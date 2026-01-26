// Blog Search Results Page at /blog/search
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogPost } from '@/data/blogs';
import { Author } from '@/data/authors';
import BlogCard from '@/components/blog/BlogCard';
import SearchBar from '@/components/blog/SearchBar';
import CategoryFilter from '@/components/blog/CategoryFilter';
import Pagination from '@/components/blog/Pagination';
import BlogHero from '@/components/blog/BlogHero';

// Import blog and author data
import { blogPosts } from '@/data/blogs';
import { allAuthors } from '@/data/authors';
import NavigationWrapper from '@/components/NavigationWrapper';
import Footer from '@/components/Footer';

// Client component that uses useSearchParams
const SearchContent = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories for the filter
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on search query and category
  useEffect(() => {
    let result = blogPosts;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, selectedCategory]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog listings
    document.getElementById('blog-listings')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <SearchBar 
              initialValue={searchQuery}
              onSearch={(query) => {
                setSearchQuery(query);
              }} 
            />
          </div>
          <div>
            <CategoryFilter 
              categories={categories} 
              onCategoryChange={setSelectedCategory} 
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {currentPosts.length} of {filteredPosts.length} posts
            {selectedCategory && ` in ${selectedCategory}`}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Blog Listings */}
        <div id="blog-listings" className="mb-12">
          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((blog) => {
                // Find the author for this post
                const author = allAuthors.find((a: any) => a.name === blog.author) || allAuthors[0];
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
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}
      </div>
    </main>
    <Footer />
  </div>
  );
};

const BlogSearchPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default BlogSearchPage;