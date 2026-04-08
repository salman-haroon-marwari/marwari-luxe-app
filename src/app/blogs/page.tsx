// Blog Listing Page at /blogs
'use client';

import { useState } from 'react';
import { BlogPost } from '@/data/blogs';
import BlogCard from '@/components/blog/BlogCard';
import SearchBar from '@/components/blog/SearchBar';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogHero from '@/components/blog/BlogHero';
import NavigationWrapper from '@/components/NavigationWrapper';
import Footer from '@/components/Footer';

// Import blog and author data
import { blogPosts } from '@/data/blogs';
import { allAuthors } from '@/data/authors';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Get unique categories for the filter
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    // Apply category filter
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    
    // Apply search filter
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  console.log('🟢 === BLOG PAGE STATE ===');
  console.log('🟢 Selected Category:', selectedCategory);
  console.log('🟢 Search Query:', searchQuery);
  console.log('🟢 Total Blogs:', blogPosts.length);
  console.log('🟢 Filtered Blogs:', filteredPosts.length);
  console.log('🟢 Categories Available:', categories);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Scroll to top of blog listings
    setTimeout(() => {
      const blogListings = document.getElementById('blog-listings');
      if (blogListings) {
        blogListings.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string | null) => {
    console.log('🟣 Category changed to:', category);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    console.log('🟣 Search changed to:', query);
    setSearchQuery(query);
    setCurrentPage(1);
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
              onSearch={handleSearch} 
            />
          </div>
          <div>
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              blogPosts={blogPosts}
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {currentPosts.length} of {filteredPosts.length} posts | Total Blogs: {blogPosts.length}
            {selectedCategory && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
            {totalPages > 1 && ` | Page ${currentPage} of ${totalPages}`}
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-300 hover:border-purple-300'
              }`}
            >
              ← Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  page === currentPage
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-300 hover:border-purple-300'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-300 hover:border-purple-300'
              }`}
            >
              Next →
            </button>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
};
    
export default BlogPage;
