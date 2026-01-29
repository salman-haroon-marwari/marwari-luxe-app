import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Copyright Policy - Marwari Luxe',
  description: 'Our copyright policy explaining how we respect intellectual property rights and handle copyright infringement claims.',
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: 'https://marwariluxe.com/legal/copyright-policy'
  },
  openGraph: {
    title: 'Copyright Policy - Marwari Luxe',
    description: 'Our copyright policy explaining how we respect intellectual property rights and handle copyright infringement claims.',
    url: 'https://marwariluxe.com/legal/copyright-policy',
    images: [
      {
        url: '/copyright-policy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Copyright Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copyright Policy - Marwari Luxe',
    description: 'Our copyright policy explaining how we respect intellectual property rights and handle copyright infringement claims.',
    images: ['/copyright-policy-twitter-card.jpg']
  }
};

const CopyrightPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Copyright Policy</h1>
              <p className="text-gray-600">Last Updated: January 1, 2026</p>
            </div>

            {/* Content */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Respecting Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-6">
                  Marwari Luxe respects the intellectual property rights of others and expects users of our website to do the same. 
                  This Copyright Policy outlines our approach to copyright protection and how we handle copyright infringement claims.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Copyright Commitment</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>We create original content and properly attribute external sources</li>
                  <li>We respect copyright notices and licensing requirements</li>
                  <li>We promptly respond to valid copyright infringement notifications</li>
                  <li>We educate our team about copyright best practices</li>
                  <li>We maintain records of our content creation and sourcing processes</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Ownership</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Original Content</h3>
                <p className="text-gray-700 mb-4">
                  Unless otherwise indicated, all content on the Marwari Luxe website, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Text articles and blog posts</li>
                  <li>Images and graphics</li>
                  <li>Design elements and layouts</li>
                  <li>Software and code</li>
                  <li>Audio and video content</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Is the property of Marwari Luxe and protected by copyright laws.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Content</h3>
                <p className="text-gray-700 mb-6">
                  Some content on our website may be used with permission or under fair use provisions. 
                  We clearly attribute such content and comply with all licensing requirements.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User-Generated Content</h2>
                <p className="text-gray-700 mb-4">
                  By submitting content to our website, users grant us a non-exclusive license to use, display, 
                  and distribute that content for the operation of our services.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Users retain ownership of their submitted content</li>
                  <li>We may moderate and remove inappropriate user content</li>
                  <li>Users are responsible for ensuring they have rights to submitted content</li>
                  <li>We may use user content for promotional purposes with attribution</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Copyright Infringement Reporting</h2>
                <p className="text-gray-700 mb-4">
                  If you believe your copyrighted work has been improperly used on our website, please contact us with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>A physical or electronic signature of the copyright owner</li>
                  <li>Identification of the copyrighted work claimed to be infringed</li>
                  <li>Identification of the material that is claimed to be infringing</li>
                  <li>Contact information for the complaining party</li>
                  <li>A statement of good faith belief that use is unauthorized</li>
                  <li>A statement that the information is accurate under penalty of perjury</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Response Process</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Investigation</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>We review all valid copyright infringement notifications</li>
                  <li>We investigate the claims thoroughly and promptly</li>
                  <li>We may request additional information if needed</li>
                  <li>We assess whether use constitutes fair use or authorized use</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Removal Actions</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>We remove or disable access to infringing content when appropriate</li>
                  <li>We notify the content uploader of the removal</li>
                  <li>We maintain records of takedown notices and actions taken</li>
                  <li>We may terminate accounts of repeat infringers</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Counter-Notification Process</h2>
                <p className="text-gray-700 mb-4">
                  If your content was removed and you believe it was mistakenly identified as infringing:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>You can submit a counter-notification with required information</li>
                  <li>We will forward your counter-notification to the complainant</li>
                  <li>Content may be restored after 10-14 days if no legal action is initiated</li>
                  <li>You must provide your contact information and consent to jurisdiction</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fair Use Considerations</h2>
                <p className="text-gray-700 mb-4">
                  We may use copyrighted material under fair use provisions for purposes such as:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Criticism and commentary</li>
                  <li>News reporting</li>
                  <li>Teaching and research</li>
                  <li>Parody and satire</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  We evaluate fair use factors including purpose, nature, amount, and market effect.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repeat Infringer Policy</h2>
                <p className="text-gray-700 mb-6">
                  We maintain a policy of terminating accounts of users who repeatedly infringe copyrights 
                  in accordance with applicable law.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For copyright-related inquiries or to submit a copyright infringement notification:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> marwariluxe@gmail.com<br/>
                    <strong>Subject Line:</strong> Copyright Infringement Notification<br/>
                    <strong>Response Time:</strong> Within 24-48 hours during business days
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-700 mb-6">
                  This Copyright Policy may be updated to reflect changes in law or our practices. 
                  Users will be notified of significant changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CopyrightPolicyPage;