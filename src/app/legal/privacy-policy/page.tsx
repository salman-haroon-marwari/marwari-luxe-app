import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Marwari Luxe',
  description: 'Learn how Marwari Luxe protects your personal information, collects data, and ensures your privacy when shopping for premium health supplements and beauty products.',
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: 'https://marwariluxe.com/legal/privacy-policy'
  },
  openGraph: {
    title: 'Privacy Policy - Marwari Luxe',
    description: 'Learn how Marwari Luxe protects your personal information, collects data, and ensures your privacy when shopping for premium health supplements and beauty products.',
    url: 'https://marwariluxe.com/legal/privacy-policy',
    images: [
      {
        url: '/privacy-policy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Privacy Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Marwari Luxe',
    description: 'Learn how Marwari Luxe protects your personal information and ensures your privacy when shopping for premium health supplements and beauty products.',
    images: ['/privacy-policy-twitter-card.jpg']
  }
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Privacy Policy Title - Added even more padding above */}
            <div className="pt-16 mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy - Marwari Luxe Data Protection</h1>
              <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Content */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction - Your Privacy Matters</h2>
                <p className="text-gray-700 mb-6">
                  At Marwari Luxe, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This comprehensive Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                  browse our premium health and wellness content, or use our tools and services. We believe in transparency 
                  and want you to understand exactly how your data is handled in compliance with applicable data protection laws including GDPR and CCPA.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Name and contact information (email address, phone number, address)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Order history and preferences</li>
                  <li>Newsletter subscription preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Non-Personal Information</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address and location data</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Marketing and advertising identifiers</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Provide and improve our website and services</li>
                  <li>Send promotional materials and newsletters (with your consent)</li>
                  <li>Personalize your browsing experience</li>
                  <li>Improve our website and services</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                  <li>Provide and improve our content and services</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in operating our website</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>To trusted third parties who assist in operating our website and services</li>
                </ul>


                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                  the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
                  and understand user preferences. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
                <p className="text-gray-700 mb-6">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country 
                  or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> marwariluxe@gmail.com<br/>
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
};

export default PrivacyPolicyPage;