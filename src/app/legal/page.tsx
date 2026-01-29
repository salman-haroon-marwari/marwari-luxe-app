import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Legal - Marwari Luxe',
  description: 'Legal information, policies, and terms for Marwari Luxe. Review our DMCA policy, privacy policy, terms of service, and other legal documents.',
  keywords: ['legal', 'terms', 'privacy policy', 'disclaimer', 'DMCA policy', 'Marwari Luxe'],
  openGraph: {
    title: 'Legal - Marwari Luxe',
    description: 'Legal information, policies, and terms for Marwari Luxe. Review our DMCA policy, privacy policy, terms of service, and other legal documents.',
    url: 'https://marwariluxe.com/legal',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe - Legal Information',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal - Marwari Luxe',
    description: 'Legal information, policies, and terms for Marwari Luxe. Review our DMCA policy, privacy policy, terms of service, and other legal documents.',
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
    canonical: 'https://marwariluxe.com/legal',
  },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Information</h1>
              <p className="text-gray-600">Important legal documents and policies for Marwari Luxe</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Copyright & IP Protection</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/dmca-policy" className="text-blue-600 hover:underline font-medium">
                      DMCA Copyright Policy
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Our policy regarding copyright infringement and takedown notices.</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Privacy & Data Protection</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/privacy-policy" className="text-blue-600 hover:underline font-medium">
                      Privacy Policy
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Information about how we collect, use, and protect your personal data.</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Terms & Conditions</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/terms" className="text-blue-600 hover:underline font-medium">
                      Terms of Service
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Rules and guidelines for using our website and services.</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Additional Policies</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/disclaimer" className="text-blue-600 hover:underline font-medium">
                      Disclaimer
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Important disclaimers regarding content and services.</p>
                  </li>
                  <li>
                    <Link href="/legal/editorial-policy" className="text-blue-600 hover:underline font-medium">
                      Editorial Policy
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Our standards and practices for content creation.</p>
                  </li>
                  <li>
                    <Link href="/legal/copyright-policy" className="text-blue-600 hover:underline font-medium">
                      Copyright Policy
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">General information about copyright protection.</p>
                  </li>
                  <li>
                    <Link href="/legal/images-media-policy" className="text-blue-600 hover:underline font-medium">
                      Images & Media Policy
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Our policy on image and media usage and copyright compliance.</p>
                  </li>
                  <li>
                    <Link href="/legal/images-disclaimer" className="text-blue-600 hover:underline font-medium">
                      Images Disclaimer
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Disclaimer regarding images and visual media usage.</p>
                  </li>
                  <li>
                    <Link href="/legal/faq" className="text-blue-600 hover:underline font-medium">
                      Legal FAQ
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">Frequently asked questions about our legal policies.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Legal Framework</h2>
              <p className="text-gray-700 mb-4">
                At Marwari Luxe, we are committed to maintaining transparency and trust with our users through comprehensive legal policies. 
                Our legal framework ensures that both our users and our organization are protected and informed about rights and responsibilities.
              </p>
              <p className="text-gray-700 mb-4">
                We regularly review and update our legal documents to ensure compliance with applicable laws and regulations. 
                If you have any questions about our legal policies, please contact us at <a href="mailto:MARWARILUXE@GMAIL.COM" className="text-blue-600 hover:underline">MARWARILUXE@GMAIL.COM</a>.
              </p>
              <p className="text-gray-700">
                This page serves as a central hub for all legal information related to Marwari Luxe. We recommend reviewing these documents periodically for any updates.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}