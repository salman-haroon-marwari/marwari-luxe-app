import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Marwari Luxe',
  description: 'Read our terms and conditions for using Marwari Luxe website and services. Understand our usage policies, disclaimers, and user responsibilities.',
  keywords: ['terms', 'conditions', 'usage policy', 'disclaimer', 'Marwari Luxe'],
  openGraph: {
    title: 'Terms and Conditions - Marwari Luxe',
    description: 'Read our terms and conditions for using Marwari Luxe website and services. Understand our usage policies, disclaimers, and user responsibilities.',
    url: 'https://marwariluxe.com/legal/terms',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe - Terms and Conditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - Marwari Luxe',
    description: 'Read our terms and conditions for using Marwari Luxe website and services. Understand our usage policies, disclaimers, and user responsibilities.',
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
    canonical: 'https://marwariluxe.com/legal/terms',
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
              <p className="text-gray-600">Last Updated: January 1, 2026</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction and Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to Marwari Luxe. By accessing or using our website, located at [Insert Website URL], you agree to comply with and be bound by these Terms and Conditions.
                </p>
                <p className="text-gray-700">
                  Please read these terms carefully. If you do not agree with any part of these terms, you must discontinue use of our website immediately. Your continued use of Marwari Luxe confirms your acceptance of these terms and any future modifications.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-4">
                  Unless otherwise stated, Marwari Luxe and/or its licensors own the intellectual property rights for all material on this website, including text, graphics, logos, images, and software tools. All intellectual property rights are reserved.
                </p>
                <p className="text-gray-700 mb-4">
                  You may access content from Marwari Luxe for your own personal use, subject to the restrictions set in these terms.
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                  You must not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Republish material from Marwari Luxe.</li>
                  <li>Sell, rent, or sub-license material from Marwari Luxe.</li>
                  <li>Reproduce, duplicate, or copy material from Marwari Luxe.</li>
                  <li>Redistribute content from Marwari Luxe (unless content is specifically made for redistribution).</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities and Usage</h2>
                <p className="text-gray-700 mb-4">
                  By using our website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                  Prohibited behavior includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Harassing or causing distress to any other user.</li>
                  <li>Transmitting obscene or offensive content.</li>
                  <li>Attempting to gain unauthorized access to our site's systems or tools.</li>
                  <li>Using our website to transmit unsolicited commercial communications (spam).</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Medical and General Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The content provided on Marwari Luxe, including articles, blog posts, and tools related to Health and Beauty, is for informational and educational purposes only.
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                  No Medical Advice: Nothing on this website constitutes professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
                <p className="text-gray-700">
                  No Guarantees: While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, or suitability of the information.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Use of Digital Tools</h2>
                <p className="text-gray-700 mb-4">
                  Marwari Luxe provides various digital tools and calculators for user convenience. These tools are provided on an "as-is" basis.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>We do not guarantee the accuracy of results generated by these tools.</li>
                  <li>Users should not rely solely on these tools for critical financial, health, or professional decisions.</li>
                  <li>We accept no liability for any errors or omissions in the results provided by our tools.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Third-Party Links and Ads</h2>
                <p className="text-gray-700 mb-4">
                  Our website may contain links to third-party websites or services (including Google AdSense ads) that are not owned or controlled by Marwari Luxe.
                </p>
                <p className="text-gray-700">
                  We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Marwari Luxe shall not be responsible or liable, directly or indirectly, for any damage or loss caused by or in connection with the use of such external content.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the fullest extent permitted by law, Marwari Luxe, its owners, and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Your access to or use of or inability to access or use the website.</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                  <li>Any bugs, viruses, or trojan horses that may be transmitted to or through our website by any third party.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Changes to These Terms</h2>
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. We will indicate the date of the latest revision at the top of this page. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of [Insert Your Country/State], without regard to its conflict of law provisions.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at:
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