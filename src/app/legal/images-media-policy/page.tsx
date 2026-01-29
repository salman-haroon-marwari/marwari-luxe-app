import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Images & Media Usage Policy - Marwari Luxe',
  description: 'Our policy on image and media usage, copyright compliance, and visual content sources for Marwari Luxe website.',
  keywords: ['images', 'media', 'copyright', 'usage policy', 'visual content', 'Marwari Luxe'],
  openGraph: {
    title: 'Images & Media Usage Policy - Marwari Luxe',
    description: 'Our policy on image and media usage, copyright compliance, and visual content sources for Marwari Luxe website.',
    url: 'https://marwariluxe.com/legal/images-media-policy',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe - Images & Media Usage Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Images & Media Usage Policy - Marwari Luxe',
    description: 'Our policy on image and media usage, copyright compliance, and visual content sources for Marwari Luxe website.',
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
    canonical: 'https://marwariluxe.com/legal/images-media-policy',
  },
};

export default function ImagesMediaPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Images & Media Usage Policy</h1>
              <p className="text-gray-600">Last Updated: January 1, 2026</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  At Marwari Luxe ("we", "us", "our"), we understand that visual content is essential for an engaging user experience, particularly in the niches of Health, Beauty, and Lifestyle. However, we are equally committed to respecting the Intellectual Property (IP) rights of photographers, artists, and content creators.
                </p>
                <p className="text-gray-700">
                  This policy outlines the sources of the media found on our website, how we use them, and the protocols we follow to ensure compliance with copyright laws and Google AdSense policies.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Our Image Sources</h2>
                <p className="text-gray-700 mb-4">
                  We utilize a variety of sources to provide high-quality visuals for our articles, tools, and blogs. Our media is obtained through the following methods:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Self-Created Content:</h3>
                    <p className="text-gray-700">
                      Many images, graphics, and screenshots of digital tools on Marwari Luxe are created in-house by our team. We hold the exclusive copyright to these assets.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Royalty-Free Stock Platforms:</h3>
                    <p className="text-gray-700">
                      We use images from reputable, royalty-free stock photography platforms (such as Unsplash, Pexels, and Pixabay) that operate under Creative Commons Zero (CC0) or similar licenses allowing commercial use without mandatory attribution.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Licensed Media:</h3>
                    <p className="text-gray-700">
                      We may utilize paid stock assets from platforms (such as Canva Pro, Shutterstock, or Adobe Stock) where we have purchased a valid license for commercial use.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Public Domain:</h3>
                    <p className="text-gray-700">
                      We may use images that have entered the public domain, meaning they are no longer under copyright protection.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Embedded Social Media:</h3>
                    <p className="text-gray-700">
                      Occasionally, we may embed posts from social media platforms (like Instagram, Twitter/X, or Pinterest) directly into our articles. These embeds remain hosted on the original platform and are used in accordance with their respective Terms of Service.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Illustrative Purposes Only</h2>
                <p className="text-gray-700 mb-4">
                  Please note that images used in our Health and Beauty sections are for illustrative purposes only.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Images showing skin conditions, makeup results, or fitness outcomes are representations and may not reflect typical results for every individual.</li>
                  <li>These images should not be interpreted as medical diagnoses or guarantees of specific results.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Copyright and Fair Use</h2>
                <p className="text-gray-700 mb-4">
                  Marwari Luxe strictly adheres to copyright laws. We do not claim ownership of third-party images unless explicitly stated.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fair Use:</h3>
                    <p className="text-gray-700">
                      In limited circumstances, we may use copyrighted material for the purposes of commentary, criticism, news reporting, or education, as permitted under "Fair Use" doctrines. In such cases, we strive to provide appropriate credit to the original owner.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Attribution:</h3>
                    <p className="text-gray-700">
                      Where a license requires attribution, we will clearly credit the creator in the caption or at the end of the article.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. User-Generated Content</h2>
                <p className="text-gray-700 mb-4">
                  If Marwari Luxe allows users to upload images (e.g., in comments, forum discussions, or tool usage):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You retain your ownership rights to the content you upload.</li>
                  <li>By uploading, you grant Marwari Luxe a non-exclusive, royalty-free license to display, modify, and distribute said content on our platform.</li>
                  <li>You must not upload images that you do not own or that violate the privacy or rights of others.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Image Removal Requests</h2>
                <p className="text-gray-700 mb-4">
                  If you are a copyright owner (or an authorized agent) and believe that your work has been used on Marwari Luxe in a way that constitutes copyright infringement, or if you appear in an image and wish for it to be removed for privacy reasons, please contact us immediately.
                </p>
                <p className="text-gray-700 mb-4">
                  To expedite your request, please provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>The exact URL of the page where the image appears.</li>
                  <li>A description of the image in question.</li>
                  <li>Proof of ownership (or a statement explaining why you have the right to request removal).</li>
                  <li>Your contact information.</li>
                </ul>
                <p className="text-gray-700">
                  We are committed to resolving valid takedown requests within a reasonable timeframe (usually 24-48 business hours).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For all inquiries regarding images, media usage, or copyright concerns, please contact our designated team at:
                </p>
                <p className="text-gray-700 font-semibold">
                  Email: <a href="mailto:MARWARILUXE@GMAIL.COM" className="text-blue-600 hover:underline">MARWARILUXE@GMAIL.COM</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}