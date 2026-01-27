import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Marwari Luxe Health & Beauty',
  description: 'Read our terms and conditions for using Marwari Luxe website and services. Understand our affiliate marketing relationship, product information, and user responsibilities.',
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: 'https://marwariluxe.com/legal/terms'
  },
  openGraph: {
    title: 'Terms & Conditions - Marwari Luxe Health & Beauty',
    description: 'Read our terms and conditions for using Marwari Luxe website and services.',
    url: 'https://marwariluxe.com/legal/terms',
    images: [
      {
        url: '/terms-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Terms & Conditions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions - Marwari Luxe Health & Beauty',
    description: 'Read our terms and conditions for using Marwari Luxe website and services.',
    images: ['/terms-twitter-card.jpg']
  }
};

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Content */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-6">
                  Welcome to Marwari Luxe. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and services. 
                  By accessing or using our website, you agree to be bound by these Terms. If you do not agree with these Terms, 
                  please do not use our services. We operate as a content and tools platform providing valuable information 
                  and resources for health, wellness, and beauty.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Definitions</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>&quot;Company&quot;</strong> refers to Marwari Luxe</li>
                  <li><strong>&quot;Service&quot;</strong> refers to our website and related services</li>
                  <li><strong>&quot;User&quot;</strong> refers to anyone who accesses or uses our Service</li>
                  <li><strong>&quot;Content&quot;</strong> refers to all information, data, text, images, and other materials</li>
                </ul>


                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Our Service</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eligibility</h3>
                <p className="text-gray-700 mb-4">
                  You must be at least 18 years old to use our Service. By using our Service, you represent and warrant that you 
                  meet this age requirement.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Registration</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>You may need to create an account to access certain features</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You agree to provide accurate and complete information</li>
                  <li>You are responsible for all activities that occur under your account</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Products and Services</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Information</h3>
                <p className="text-gray-700 mb-4">
                  We strive to provide accurate content and information. However, we do not warrant that descriptions or other content is accurate, complete, reliable, or error-free.
                </p>




                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content and Services</h2>
                <p className="text-gray-700 mb-6">
                  Our website provides educational content, tools, and resources related to health, wellness, and beauty.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">You may not use our Service:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>


                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 mb-6">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of 
                  Marwari Luxe and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h2>
                <p className="text-gray-700 mb-6">
                  The information on this website is provided on an &quot;as is&quot; basis without any warranties, express or implied. 
                  We make no representations about the suitability, reliability, availability, timeliness, and accuracy of the 
                  information contained on the website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  In no event shall Marwari Luxe, nor its directors, employees, partners, agents, suppliers, or affiliates, be 
                  liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 mb-6">
                  We may terminate or suspend your account and access to our Service immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to 
                  use the Service will cease immediately.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 mb-6">
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict 
                  of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver 
                  of those rights.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
                  material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a 
                  material change will be determined at our sole discretion.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us:
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

export default TermsConditionsPage;