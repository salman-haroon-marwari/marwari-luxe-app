'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  // Category color mapping
  const categoryColors: Record<string, string> = {
    'Beauty & Cosmetics': 'bg-pink-100 text-pink-800',
    'Health & Fitness': 'bg-blue-100 text-blue-800',
    'Health & Wellness': 'bg-green-100 text-green-800',
  };

  const categoryColor = categoryColors[blog.category] || 'bg-gray-100 text-gray-800';

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`${categoryColor} text-xs font-medium px-2.5 py-0.5 rounded`}>
            {blog.category}
          </span>
          <span className="text-gray-500 text-sm">{blog.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          <Link href={`/blogs/${blog.urlSlug}`} className="hover:text-blue-600 transition-colors">
            {blog.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">{blog.date}</span>
          </div>
          <Link 
            href={`/blogs/${blog.urlSlug}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
          >
            Read More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;