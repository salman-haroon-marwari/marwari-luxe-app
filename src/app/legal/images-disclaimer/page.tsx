import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Images Disclaimer - Marwari Luxe',
  description: 'Disclaimer regarding images and visual media used on Marwari Luxe website, including sourcing and copyright information.',
  keywords: ['images', 'disclaimer', 'visual media', 'copyright', 'royalty-free', 'Marwari Luxe'],
  openGraph: {
    title: 'Images Disclaimer - Marwari Luxe',
    description: 'Disclaimer regarding images and visual media used on Marwari Luxe website, including sourcing and copyright information.',
    url: 'https://marwariluxe.com/legal/images-disclaimer',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe - Images Disclaimer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Images Disclaimer - Marwari Luxe',
    description: 'Disclaimer regarding images and visual media used on Marwari Luxe website, including sourcing and copyright information.',
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
    canonical: 'https://marwariluxe.com/legal/images-disclaimer',
  },
};

export default function ImagesDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Images Disclaimer</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  All images and visual media used on Marwari Luxe are either sourced from reputable royalty-free stock platforms (such as Unsplash, Pexels, or Pixabay), licensed for commercial use, or created in-house by our team.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Please note that images used within our Health, Beauty, and Lifestyle content are for illustrative purposes only and may not represent guaranteed results.
                </p>
                
                <p className="text-gray-700 mb-4">
                  All product names, logos, brands, and other trademarks featured or referred to within this website are the property of their respective trademark holders. These trademark holders are not affiliated with, nor do they sponsor or endorse, Marwari Luxe unless explicitly stated.
                </p>
                
                <p className="text-gray-700 mb-6">
                  We respect the intellectual property rights of others. If you believe that an image has been used in error or violates your copyright, please contact us immediately for credit or removal.
                </p>
                
                <div className="border-t border-blue-200 pt-4">
                  <p className="text-gray-700 font-semibold">
                    Contact: <a href="mailto:MARWARILUXE@GMAIL.COM" className="text-blue-600 hover:underline">MARWARILUXE@GMAIL.COM</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}