'use client';

import { useState } from 'react';
import { BlogPost } from '@/data/blogs';

interface BlogHeroProps {
  featuredBlogs: BlogPost[];
}

const BlogHero = ({ featuredBlogs }: BlogHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredBlogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredBlogs.length - 1 : prevIndex - 1
    );
  };

  if (!featuredBlogs || featuredBlogs.length === 0) {
    return null;
  }

  const currentBlog = featuredBlogs[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Our Health & Wellness Blog
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the latest insights, tips, and research-backed advice on health, wellness, nutrition, and beauty. 
              Empowering you to make informed decisions about your wellbeing.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={nextSlide}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
          
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src={currentBlog.image}
              alt={currentBlog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded mb-2 inline-block">
                {currentBlog.category}
              </span>
              <h2 className="text-2xl font-bold mb-2">{currentBlog.title}</h2>
              <p className="text-sm opacity-90 mb-3">{currentBlog.excerpt}</p>
              <a 
                href={`/blogs/${currentBlog.urlSlug}`} 
                className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
              >
                Read Article
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;