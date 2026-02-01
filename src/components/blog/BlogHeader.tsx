'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BlogHeader = () => {
  const pathname = usePathname();
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Marwari Luxe
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/blogs" 
              className={`font-medium ${pathname.startsWith('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Blog
            </Link>
            <Link 
              href="/author" 
              className={`font-medium ${pathname.startsWith('/author') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Authors
            </Link>
            <Link 
              href="/categories" 
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Categories
            </Link>
            <Link 
              href="/about" 
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;