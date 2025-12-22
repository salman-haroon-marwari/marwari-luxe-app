import { getBlogById } from '../../../data/blog-pagination';
import blogPosts from '../../../data/blogs';
import { products } from '../../../data/products-58';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// Generate metadata for individual blog posts
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogPost = getBlogById(id);
  
  if (!blogPost) {
    return {
      title: 'Blog Post Not Found | Marwari Luxe',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blogPost.title} | Marwari Luxe`,
    description: blogPost.excerpt,
    keywords: [...blogPost.tags, 'health blog', 'wellness', 'beauty', 'expert advice'],
    openGraph: {
      title: `${blogPost.title} | Marwari Luxe`,
      description: blogPost.excerpt,
      url: `https://marwariluxe.com/blogs/${id}`,
      siteName: 'Marwari Luxe',
      images: [
        {
          url: blogPost.image,
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogPost.title} | Marwari Luxe`,
      description: blogPost.excerpt,
      images: [blogPost.image],
      creator: '@marwariluxe',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://marwariluxe.com/blogs/${id}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params to get the actual values
  const { id } = await params;
  
  // Find the blog post based on the ID from the URL using the pagination utility
  const blogPost = getBlogById(id);
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
            <p className="text-foreground/70 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
            <p className="text-foreground/70 mb-4">Requested ID: {id}</p>
            <p className="text-foreground/70 mb-4">Total blog posts: {blogPosts.length}</p>
            <Link 
              href="/blogs" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Blogs
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // Find related products based on blog category
  const relatedProducts = products
    .filter(product => {
      // Match products with similar category keywords
      const productTags = product.tags.join(' ').toLowerCase();
      const blogCategory = blogPost.category.toLowerCase();
      return productTags.includes(blogCategory) || 
             product.name.toLowerCase().includes(blogCategory) ||
             product.description.toLowerCase().includes(blogCategory);
    })
    .slice(0, 2); // Get only 2 related products

  // Find featured products based on featuredProductIds
  const featuredProducts = blogPost.featuredProductIds 
    ? products.filter(product => blogPost.featuredProductIds!.includes(product.id))
    : [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Blogs
          </Link>
          
          <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="relative">
              <div className="h-64 md:h-80 relative">
                <Image 
                  src={blogPost.image} 
                  alt={blogPost.title} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                  {blogPost.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 text-white mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">{blogPost.views} reads</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center text-sm text-foreground/60 mb-6">
                <span className="mr-4">By {blogPost.author}</span>
                <span className="mr-4">{blogPost.date}</span>
                <span>{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{blogPost.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {blogPost.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {blogPost.content ? (
                  <div dangerouslySetInnerHTML={{ __html: blogPost.content.replace(/\n/g, '<br />').replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto;" />') }} />
                ) : (
                  <p className="text-foreground/80">{blogPost.excerpt}</p>
                )}
              </div>
              
              {/* Social Share Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-foreground mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <a 
                    href={blogPost.shareButtons.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                    </svg>
                  </a>
                  <a 
                    href={blogPost.shareButtons.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a 
                    href={blogPost.shareButtons.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={blogPost.shareButtons.pinterest} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                    aria-label="Share on Pinterest"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-foreground mb-4">About the Author</h3>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold mr-4">
                    {blogPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{blogPost.author}</h4>
                    <p className="text-foreground/70 text-sm mt-1">
                      Leading expert in {blogPost.category.toLowerCase()} with over 15 years of experience in research and practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          
          {/* Featured Products Section */}
          {featuredProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Recommended Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="h-48 relative">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name} 
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</span>
                        <a 
                          href={product.buyNowUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Related Products Section - Hidden for Fibremaxxing Diet blog post */}
          {relatedProducts.length > 0 && blogPost.title !== 'Fibremaxxing Diet: Why Fiber is the Hottest Health Trend in 2025' && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="h-48 relative">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name} 
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</span>
                        <Link 
                          href={`/products/${product.id}`} 
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Related Articles Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(post => post.id !== blogPost.id) // Exclude current post
                .slice(0, 3) // Get first 3 related posts
                .map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.id}`}
                  className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                  <div className="h-40 relative">
                    <Image 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title} 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
                        {relatedBlog.readTime}
                      </span>
                    </div>
                    <div className="flex items-center text-foreground/60 text-sm">
                      <span>{relatedBlog.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedBlog.views} reads</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}