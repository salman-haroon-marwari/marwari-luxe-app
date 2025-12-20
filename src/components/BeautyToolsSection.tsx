'use client';

import Link from 'next/link';
import { blogPosts } from '../data/blogs';

const BeautyToolsSection = () => {
  // Filter blogs to only show custom beauty blogs
  const beautyBlogs = blogPosts.filter(blog => 
    blog.id.startsWith('custom-beauty-') && 
    ['custom-beauty-001', 'custom-beauty-002', 'custom-beauty-003', 'custom-beauty-004', 'custom-beauty-005', 'custom-beauty-006'].includes(blog.id)
  );

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Beauty Blogs</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover the latest beauty trends and tips
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beautyBlogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blogs/${blog.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{blog.title}</h3>
                <p className="text-foreground/80 mb-4 flex-grow">{blog.excerpt}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-foreground/60">{blog.date}</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blogs" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 hover-lift focus-ring"
          >
            View All Beauty Blogs
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeautyToolsSection;