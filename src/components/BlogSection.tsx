'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../data/blogs';
import { BlogPost } from '../data/blogs';

export default function BlogSection() {
  // Get specific blog posts by ID as requested
  const selectedBlogIds = [
    'blog-1',    // Health blog 1 - Ozempic & GLP-1 Revolution
    'blog-2',    // Health blog 2 - Cold Plunge Therapy
    'blog-3',    // Beauty blog 1 - Cortisol Face
    'blog-12',   // Beauty blog 2 - Collagen Supplements
    'blog-11',   // Evergreen health 1 - CBD Oil vs THC
    'blog-13'    // Evergreen health 2 - Keto vs Mediterranean
  ];

  // Filter blogs to get only the selected ones
  const selectedBlogs = blogPosts.filter(blog => selectedBlogIds.includes(blog.id));

  // Ensure we have the blogs in the correct order
  const orderedBlogs = selectedBlogIds.map(id => 
    selectedBlogs.find(blog => blog.id === id)
  ).filter((blog): blog is BlogPost => blog !== undefined); // Type guard to ensure no undefined entries

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-neutral to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest From Our Blog</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Expert insights on health, beauty, and wellness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderedBlogs.map((blog, index) => (
            <article 
              key={blog.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="relative h-48">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-foreground/80 mb-4 line-clamp-3">{blog.excerpt}</p>
                <Link 
                  href={`/blogs/${blog.urlSlug}`} 
                  className="inline-block px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Link 
            href="/blogs" 
            className="inline-block px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift"
          >
            Read More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}