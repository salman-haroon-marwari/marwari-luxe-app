// RelatedPosts component to display related blog posts
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';

interface RelatedPostsProps {
  currentPostId: string;
  posts: BlogPost[];
}

const RelatedPosts = ({ currentPostId, posts }: RelatedPostsProps) => {
  // Filter out the current post and get up to 3 related posts
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .filter(post => post.category) // Filter by category similarity if possible
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Related Posts</h3>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blogs/${post.urlSlug}`}
            className="block group"
          >
            <div className="flex gap-4">
              {post.image && (
                <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{post.readTime}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;