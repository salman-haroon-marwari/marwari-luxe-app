'use client';

import { BlogPost } from '@/data/blogs';
import Link from 'next/link';

interface BlogSidebarProps {
  recentPosts: BlogPost[];
  categories: string[];
}

const BlogSidebar = ({ recentPosts, categories }: BlogSidebarProps) => {
  return (
    <aside className="space-y-8">
      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts && recentPosts.slice(0, 5).map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.urlSlug}`}
              className="block group"
            >
              <div className="flex items-start gap-3">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 text-sm">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories && categories.map((category, index) => (
            <li key={index}>
              <a 
                href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-600 hover:text-blue-600 flex items-center justify-between"
              >
                <span>{category}</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {Math.floor(Math.random() * 20) + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-gray-600 text-sm mb-4">
          Get the latest health and wellness tips delivered straight to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;