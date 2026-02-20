'use client';

import { Author } from '@/data/blogs';
import Image from 'next/image';

interface AuthorHeroProps {
  author: Author;
}

const AuthorHero = ({ author }: AuthorHeroProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={author.photo}
                alt={author.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{author.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{author.role}</p>
            
            {/* Stats section removed as it's not part of Author interface */}
            {/* 
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">{author.stats.articles}</p>
                <p className="text-sm text-gray-600">Articles</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">{author.stats.readers}</p>
                <p className="text-sm text-gray-600">Readers</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">{author.stats.years}</p>
                <p className="text-sm text-gray-600">Years Exp</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">{author.stats.awards}</p>
                <p className="text-sm text-gray-600">Awards</p>
              </div>
            </div>
            */}
            
            <div className="flex justify-center md:justify-start space-x-4">
              {author.social.twitter && (
                <a 
                  href={author.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              )}
              {/* LinkedIn link removed as it's not part of Author interface */}
              {author.social.instagram && (
                <a 
                  href={author.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg text-center md:text-left">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorHero;