import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import IntroSection from '../components/IntroSection';
import BlogSection from '../components/BlogSection';
import BeautyToolsSection from '../components/BeautyToolsSection';
import ProductsSection from '../components/ProductsSection';
import CommunitySection from '../components/CommunitySection';
import HomePageToolsSection from '../components/HomePageToolsSection';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marwari Luxe - Premium Health & Beauty Products | Free Tools',
  description: 'Shop premium health & beauty products + FREE tools! Get personalized skincare, medication reminders & more. Trusted by 10K+ customers worldwide. Luxury wellness for modern life.',
  keywords: ['health', 'wellness', 'beauty', 'premium products', 'luxury skincare', 'natural supplements', 'wellness lifestyle', 'beauty products', 'health supplements', 'organic beauty', 'international shipping'],
  openGraph: {
    title: 'Marwari Luxe - Premium Health & Beauty Products | Free Tools',
    description: 'Shop premium health & beauty products + FREE tools! Get personalized skincare, medication reminders & more. Trusted by 10K+ customers worldwide. Luxury wellness for modern life.',
    url: 'https://www.marwariluxe.com',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://www.marwariluxe.com/og-image.jpg',
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
    images: ['https://www.marwariluxe.com/og-image.jpg'],
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
    canonical: 'https://www.marwariluxe.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <HeroSlider />
          </div>
        </section>
        
        {/* Intro Section */}
        <IntroSection />
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* Beauty Tools Section */}
        <BeautyToolsSection />
        
        {/* Featured Products */}
        <ProductsSection />
        
        {/* Featured Tools Section */}
        <HomePageToolsSection />
        
        {/* Community & Wellness Section */}
        <CommunitySection />
      </main>
      
      <Footer />
    </div>
  );
}