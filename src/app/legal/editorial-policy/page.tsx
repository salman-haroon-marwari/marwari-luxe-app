import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Editorial Policy - Marwari Luxe',
  description: 'Our editorial policy outlining content standards, fact-checking procedures, and commitment to providing accurate health and wellness information.',
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: 'https://marwariluxe.com/legal/editorial-policy'
  },
  openGraph: {
    title: 'Editorial Policy - Marwari Luxe',
    description: 'Our editorial policy outlining content standards, fact-checking procedures, and commitment to providing accurate health and wellness information.',
    url: 'https://marwariluxe.com/legal/editorial-policy',
    images: [
      {
        url: '/editorial-policy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Editorial Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Policy - Marwari Luxe',
    description: 'Our editorial policy outlining content standards, fact-checking procedures, and commitment to providing accurate health and wellness information.',
    images: ['/editorial-policy-twitter-card.jpg']
  }
};

const EditorialPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Editorial Policy</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Content */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Quality Content</h2>
                <p className="text-gray-700 mb-6">
                  At Marwari Luxe, we are committed to providing accurate, reliable, and helpful content about health, wellness, and beauty. 
                  This Editorial Policy outlines our standards and practices for creating and maintaining content on our website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Standards</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>Accuracy:</strong> We strive to ensure all information is factually correct and up-to-date</li>
                  <li><strong>Evidence-Based:</strong> Content is based on scientific research, expert opinions, and credible sources</li>
                  <li><strong>Clarity:</strong> Information is presented in clear, understandable language</li>
                  <li><strong>Relevance:</strong> Content addresses genuine user needs and interests</li>
                  <li><strong>Timeliness:</strong> Information is current and regularly reviewed for updates</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fact-Checking Process</h2>
                <p className="text-gray-700 mb-4">
                  Our content undergoes rigorous fact-checking procedures:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>All health claims are verified against peer-reviewed research</li>
                  <li>Information is cross-referenced with multiple authoritative sources</li>
                  <li>Medical content is reviewed by qualified healthcare professionals when possible</li>
                  <li>Regular audits ensure ongoing accuracy of published content</li>
                  <li>Outdated information is promptly updated or removed</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Creation Guidelines</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Requirements</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Primary sources must be from reputable institutions and publications</li>
                  <li>Statistical data must be from credible organizations</li>
                  <li>Expert quotes must be properly attributed and contextualized</li>
                  <li>All studies cited must be peer-reviewed when available</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Writing Standards</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Content must be original and not plagiarized</li>
                  <li>Tone should be professional yet accessible</li>
                  <li>Claims must be substantiated with evidence</li>
                  <li>Potential biases must be disclosed</li>
                  <li>Cultural sensitivity and inclusivity are prioritized</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Review Process</h2>
                <p className="text-gray-700 mb-4">
                  Every piece of content goes through multiple review stages:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-gray-700">
                  <li><strong>Initial Review:</strong> Editor checks for completeness and basic accuracy</li>
                  <li><strong>Factual Verification:</strong> Research team verifies all claims and sources</li>
                  <li><strong>Expert Review:</strong> Subject matter experts review technical content</li>
                  <li><strong>Final Approval:</strong> Senior editors approve content for publication</li>
                </ol>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Corrections and Updates</h2>
                <p className="text-gray-700 mb-6">
                  We are committed to maintaining the accuracy of our content:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Errors are corrected promptly upon discovery</li>
                  <li>Significant corrections are clearly noted</li>
                  <li>Outdated information is regularly reviewed and updated</li>
                  <li>Users can report potential inaccuracies through our contact form</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclosure Requirements</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Transparency</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Any sponsored content is clearly labeled</li>
                  <li>Affiliate relationships are disclosed</li>
                  <li>Author credentials and expertise are clearly stated</li>
                  <li>Potential conflicts of interest are disclosed</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Feedback</h2>
                <p className="text-gray-700 mb-6">
                  We value user input and encourage feedback:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Users can contact us with questions or concerns about content</li>
                  <li>Feedback is reviewed and considered for future improvements</li>
                  <li>We respond to content-related inquiries promptly</li>
                  <li>User suggestions help shape our editorial direction</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-700 mb-6">
                  This Editorial Policy may be updated periodically to reflect changes in our practices or industry standards. 
                  Major changes will be communicated to our users.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about our editorial policy or to report content concerns:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> marwariluxe@gmail.com<br/>
                    <strong>Response Time:</strong> Within 24-48 hours during business days
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

export default EditorialPolicyPage;