// Test page to show ALL blogs without pagination
import { blogPosts } from '@/data/blogs';
import { allAuthors } from '@/data/authors';
import BlogCard from '@/components/blog/BlogCard';
import NavigationWrapper from '@/components/NavigationWrapper';
import Footer from '@/components/Footer';

export default async function AllBlogsTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavigationWrapper />
      <main className="flex-grow pt-16 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">All Blogs Test - Total: {blogPosts.length}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((blog) => {
              const author = allAuthors.find(a => a.name === blog.author) || allAuthors[0];
              return (
                <BlogCard 
                  key={blog.id} 
                  blog={blog} 
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
