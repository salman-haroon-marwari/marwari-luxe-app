'use client';

import { useState, useMemo } from 'react';
import { getPaginatedBlogs, getBlogCategories } from '../../data/blog-pagination';
import Image from 'next/image';
import Link from 'next/link';

// Client component starts here
export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Topics');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  // Get unique categories for filter buttons
  const categories = ['All Topics', ...getBlogCategories()];

  // Get paginated blogs based on current filters
  const { posts: visibleBlogs, totalPages, currentPage: currentPaginationPage, totalPosts } = useMemo(() => {
    // For search functionality, we'll still need to filter the posts
    // But we'll use the pagination utility for better performance
    if (searchTerm) {
      // If searching, filter all posts and paginate the results
      const allPosts = [...require('../../data/blogs').blogPosts];
      const filteredPosts = allPosts.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             blog.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesFilter = activeFilter === 'All Topics' || blog.category === activeFilter;
        return matchesSearch && matchesFilter;
      });
      
      const totalPosts = filteredPosts.length;
      const totalPages = Math.ceil(totalPosts / pageSize);
      const validPage = Math.max(1, Math.min(currentPage, totalPages));
      const startIndex = (validPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const posts = filteredPosts.slice(startIndex, endIndex);
      
      return { posts, totalPages, currentPage: validPage, totalPosts };
    } else {
      // If not searching, use the pagination utility directly
      return getPaginatedBlogs(currentPage, pageSize, activeFilter === 'All Topics' ? undefined : activeFilter);
    }
  }, [searchTerm, activeFilter, currentPage, pageSize]);

  // Check if there are more blogs to load
  const hasMoreBlogs = currentPage < totalPages;

  // Function to load more blogs
  const loadMoreBlogs = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };
  
  // Reset page when filter or search changes
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 opacity-90"></div>
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    Expert Insights
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Discover <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">Evidence-Based</span> Health & Wellness Knowledge
                  </h1>
                  <p className="text-xl mb-8 max-w-3xl opacity-90 leading-relaxed">
                    Explore our comprehensive collection of expert articles covering the latest research and practical strategies in health, wellness, and beauty. 
                    Each piece is crafted to empower you with actionable insights for a better life.
                  </p>
                </div>
              </div>
            </div>
              
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
            
          {/* Blog Filters with Vibrant Colors */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button 
                key={category} 
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-sm font-bold ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-foreground hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
            
          {/* Blog Posts Grid */}
          {visibleBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleBlogs.map((blog, index) => (
                <article 
                  key={blog.id} 
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2"
                  style={{animationDelay: `${(index % 6) * 100}ms`} }
                >
                  <div className="relative">
                    <div className="h-48 relative">
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    {blog.tags && (
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {blog.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                          <span key={tagIndex} className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{blog.title}</h3>
                        <div className="flex items-center text-sm text-foreground/60 mb-3">
                          <span>By {blog.author}</span>
                          <span className="mx-2">•</span>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
                        {blog.readTime}
                      </span>
                    </div>
                    <p className="text-foreground/80 mb-5">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <Link 
                        href={`/blogs/${blog.id}`} 
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
                      >
                        Read Full Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <div className="flex items-center text-foreground/60 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{blog.views} reads</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-foreground mb-4">No articles found</h3>
              <p className="text-foreground/70 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All Topics');
                  setCurrentPage(1);
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
            
          {/* Load More Button with Enhanced Style */}
          {hasMoreBlogs && (
            <div className="text-center mt-12 animate-fade-in">
              <button 
                onClick={loadMoreBlogs}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}