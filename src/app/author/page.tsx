// Author Page at /author
'use client';

import AuthorHero from '@/components/blog/AuthorHero';
import AuthorStats from '@/components/blog/AuthorStats';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AuthorPage = () => {
  // Get posts for the team by category
  const getAuthorPosts = (categoryFilter?: string) => {
    let filteredPosts = blogPosts;
    
    if (categoryFilter) {
      if (categoryFilter === "health") {
        filteredPosts = filteredPosts.filter(post => 
          post.category.includes("Health") || post.category.includes("Fitness") || post.category.includes("Wellness")
        );
      } else if (categoryFilter === "beauty") {
        filteredPosts = filteredPosts.filter(post => 
          post.category.includes("Beauty") || post.category.includes("Cosmetics")
        );
      }
    }
    
    return filteredPosts.slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Authors</h1>
        
            <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Author Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center">
                  ML
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-bold mb-2">Marwari Luxe Team</h2>
                  <p className="text-xl opacity-90 mb-2">Health & Beauty Content Experts</p>
                  <p className="opacity-80 max-w-2xl">Our dedicated team of health and beauty professionals committed to providing accurate, research-based content.</p>
                </div>
              </div>
            </div>

            {/* Author Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Author Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About Marwari Luxe Team</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">The Marwari Luxe Team consists of experienced health and beauty professionals who are passionate about helping individuals achieve their wellness goals. Our team combines expertise in nutrition, fitness, skincare, and holistic health to deliver comprehensive, evidence-based content. We stay updated with the latest research and trends to provide our readers with reliable information they can trust.</p>
                  
                  
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Articles</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">200+</div>
                      <div className="text-sm text-gray-600">Readers</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">5+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">Soon</div>
                      <div className="text-sm text-gray-600">Awards</div>
                    </div>
                  </div>
                </div>

                {/* Latest Articles by Category */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Articles</h3>
                  
                  {/* Health Articles */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Health & Wellness
                    </h4>
                    <div className="space-y-4">
                      {getAuthorPosts("health").length > 0 ? (
                        getAuthorPosts("health").map((post) => (
                          <div key={post.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow flex gap-3">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                                <img 
                                  src={post.image} 
                                  alt={post.imageAlt || post.title}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-medium text-gray-900 mb-1 line-clamp-2 text-sm">{post.title}</h5>
                              <p className="text-xs text-gray-600 mb-2 line-clamp-2">{post.excerpt.substring(0, 80)}...</p>
                              <div className="flex justify-between items-center text-xs text-gray-500">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">No health articles published yet.</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Beauty Articles */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                      Beauty & Cosmetics
                    </h4>
                    <div className="space-y-4">
                      {getAuthorPosts("beauty").length > 0 ? (
                        getAuthorPosts("beauty").map((post) => (
                          <div key={post.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow flex gap-3">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                                <img 
                                  src={post.image} 
                                  alt={post.imageAlt || post.title}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-medium text-gray-900 mb-1 line-clamp-2 text-sm">{post.title}</h5>
                              <p className="text-xs text-gray-600 mb-2 line-clamp-2">{post.excerpt.substring(0, 80)}...</p>
                              <div className="flex justify-between items-center text-xs text-gray-500">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">No beauty articles published yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      <Footer />
    </div>
  );
};

export default AuthorPage;