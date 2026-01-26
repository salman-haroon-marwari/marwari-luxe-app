import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import IntroSection from '../components/IntroSection';

import CommunitySection from '../components/CommunitySection';
import HomePageToolsSection from '../components/HomePageToolsSection';
import Link from 'next/link';
import type { Metadata } from 'next';

import { blogPosts } from '@/data/blogs';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Marwari Luxe - Premium Health & Beauty Products | Free Tools',
  description: 'Shop premium health & beauty products + FREE tools! Get personalized skincare, medication reminders & more. Trusted by 10K+ customers worldwide. Luxury wellness for modern life.',
  keywords: ['health', 'wellness', 'beauty', 'premium products', 'luxury skincare', 'natural supplements', 'wellness lifestyle', 'beauty products', 'health supplements', 'organic beauty', 'international shipping'],
  openGraph: {
    title: 'Marwari Luxe - Premium Health & Beauty Products | Free Tools',
    description: 'Shop premium health & beauty products + FREE tools! Get personalized skincare, medication reminders & more. Trusted by 10K+ customers worldwide. Luxury wellness for modern life.',
    url: 'https://marwariluxe.com',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe - Premium Health, Wellness & Beauty Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marwari Luxe - Premium Health & Beauty Products | Free Tools',
    description: 'Shop premium health & beauty products + FREE tools! Get personalized skincare, medication reminders & more. Trusted by 10K+ customers.',
    images: ['https://marwariluxe.com/og-image.jpg'],
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
    canonical: 'https://marwariluxe.com',
  },
};

// Blog Section Component
const BlogSection = () => {
  // Get first 6 blog posts
  const featuredBlogs = blogPosts.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest From Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover expert insights on health, beauty, and wellness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-pink-500 text-white text-sm font-bold rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                <Link 
                  href={`/blog/${blog.urlSlug}`} 
                  className="inline-block px-4 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-block px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500 hover:text-white transition-colors duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-0 pb-0 px-0 bg-none md:bg-gradient-to-br md:from-primary/5 md:to-secondary/10 md:pt-20 md:pb-12 md:px-4">
          <div className="w-full">
            <HeroSlider />
          </div>
        </section>
        
        
        {/* Intro Section */}
        <IntroSection />
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* Featured Tools Section */}
        <HomePageToolsSection />
        
        {/* Community & Wellness Section */}
        <CommunitySection />
      </main>
      
      <Footer />
    </div>
  );
}