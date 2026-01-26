// Author Page at /author
'use client';

import { allAuthors } from '@/data/authors';
import AuthorHero from '@/components/blog/AuthorHero';
import AuthorStats from '@/components/blog/AuthorStats';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AuthorPage = () => {
  // Get all authors
  const authors = allAuthors;
  
  // Get posts for each author
  const getAuthorPosts = (authorName: string) => {
    return blogPosts.filter(post => post.author === authorName).slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Authors</h1>
        
        <div className="space-y-16">
          {authors.map((author, index) => {
            const authorPosts = getAuthorPosts(author.name);
            return (
              <div key={author.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Author Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      {author.photo ? (
                        <img 
                          src={author.photo} 
                          alt={author.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl font-bold text-gray-600">
                          {author.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h2 className="text-3xl font-bold mb-2">{author.name}</h2>
                      <p className="text-xl opacity-90 mb-2">{author.role}</p>
                      <p className="opacity-80 max-w-2xl">{author.bio}</p>
                    </div>
                    <div className="flex space-x-4">
                      {author.social.twitter && (
                        <a 
                          href={author.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      {author.social.linkedin && (
                        <a 
                          href={author.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {author.social.instagram && (
                        <a 
                          href={author.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-pink-200 transition-colors"
                          aria-label="Instagram"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Author Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Author Info */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">About {author.name}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{author.fullBio}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {author.expertise.map((exp, expIndex) => (
                            <span 
                              key={expIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Education</h4>
                          <p className="text-gray-700">{author.education}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
                          <p className="text-gray-700">{author.experience}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{author.stats.articles}</div>
                          <div className="text-sm text-gray-600">Articles</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{author.stats.readers}</div>
                          <div className="text-sm text-gray-600">Readers</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{author.stats.years}</div>
                          <div className="text-sm text-gray-600">Experience</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-amber-600">{author.stats.awards}</div>
                          <div className="text-sm text-gray-600">Awards</div>
                        </div>
                      </div>
                    </div>

                    {/* Latest Articles */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Articles</h3>
                      {authorPosts.length > 0 ? (
                        <div className="space-y-4">
                          {authorPosts.map((post) => (
                            <div key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">{post.excerpt.substring(0, 100)}...</p>
                              <div className="flex justify-between items-center text-xs text-gray-500">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 text-center py-8">No articles published yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
};

export default AuthorPage;