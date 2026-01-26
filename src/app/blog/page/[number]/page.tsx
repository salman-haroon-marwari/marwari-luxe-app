import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import { allAuthors } from '@/data/authors';
import BlogCard from '@/components/blog/BlogCard';
import BlogHero from '@/components/blog/BlogHero';
import PaginationSearchFilters from '@/components/blog/PaginationSearchFilters';
import NavigationWrapper from '@/components/NavigationWrapper';
import Footer from '@/components/Footer';

interface BlogPaginationPageProps {
  params: Promise<{
    number: string;
  }>;
}

const BlogPaginationPage = async ({ params }: BlogPaginationPageProps) => {
  const awaitedParams = await params;
  const { number } = awaitedParams;
  const pageNumber = parseInt(number, 10);
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound(); // This triggers the 404 page
  }

  // Get unique categories for the filter
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Server-side pagination
  const postsPerPage = 9;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Check if the requested page exists
  if (pageNumber > totalPages && totalPages > 0) {
    notFound(); // This triggers the 404 page
  }

  // Calculate pagination indices
  const indexOfLastPost = pageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Find the author for each post
  const postsWithAuthors = currentPosts.map(blog => {
    const author = allAuthors.find(a => a.name === blog.author) || allAuthors[0];
    return { blog, author };
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavigationWrapper />
      <main className="flex-grow pt-16 md:pt-24">
        {/* Blog Hero Section */}
        <BlogHero 
          featuredBlogs={blogPosts.slice(0, 3)} 
        />

        <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <PaginationSearchFilters categories={categories} />

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {currentPosts.length} of {totalPosts} posts
          </p>
        </div>

        {/* Blog Listings */}
        <div id="blog-listings" className="mb-12">
          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsWithAuthors.map(({ blog, author }) => {
                return (
                  <BlogCard 
                    key={blog.id} 
                    blog={blog} 
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No posts found</h3>
              <p className="text-gray-500 mt-2">No blog posts available.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-1" aria-label="Pagination">
              <a
                href={pageNumber > 1 ? `/blog/page/${pageNumber - 1}` : `/blog/page/1`}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pageNumber === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </a>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <a
                  key={num}
                  href={`/blog/page/${num}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    num === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {num}
                </a>
              ))}

              <a
                href={pageNumber < totalPages ? `/blog/page/${pageNumber + 1}` : `/blog/page/${totalPages}`}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pageNumber === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Next
              </a>
            </nav>
          </div>
        )}
      </div>
    </main>
    <Footer />
  </div>
);
};

export default BlogPaginationPage;