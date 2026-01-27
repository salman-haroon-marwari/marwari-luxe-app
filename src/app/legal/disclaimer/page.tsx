import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer - Marwari Luxe Health & Wellness Content',
  description: 'Important disclaimer regarding the use of Marwari Luxe website, content, and services. Read our medical information limitations and content usage guidelines.',
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: 'https://marwariluxe.com/legal/disclaimer'
  },
  openGraph: {
    title: 'Disclaimer - Marwari Luxe Health & Wellness Content',
    description: 'Important disclaimer regarding the use of Marwari Luxe website, content, and services.',
    url: 'https://marwariluxe.com/legal/disclaimer',
    images: [
      {
        url: '/disclaimer-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Disclaimer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Marwari Luxe Health & Wellness Content',
    description: 'Important disclaimer regarding the use of Marwari Luxe website, content, and services.',
    images: ['/disclaimer-twitter-card.jpg']
  }
};

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                  <p className="text-yellow-700">
                    The information provided on this website is for general informational purposes only and should not be 
                    considered as professional medical, health, or beauty advice. Always consult with qualified professionals 
                    before making decisions related to your health and wellness.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Information</h2>
                <p className="text-gray-700 mb-6">
                  This disclaimer applies to the Marwari Luxe website, content, services, and all related materials. By using 
                  our website and services, you acknowledge and agree to the terms set forth in this disclaimer. We operate as 
                  a content and tools platform providing valuable information for health, wellness, and beauty.
                </p>


                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health and Medical Disclaimer</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">⚠️ Medical Information Disclaimer</h3>
                  <ul className="list-disc pl-5 text-red-700 space-y-2">
                    <li>The health information provided is not intended to diagnose, treat, cure, or prevent any disease</li>
                    <li>Our content and tools are not a substitute for professional medical advice</li>
                    <li>Individual results may vary and are not guaranteed</li>
                    <li>Always consult your healthcare provider before starting any new health regimen</li>
                    <li>Do not ignore professional medical advice based on information from our website</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Information Disclaimer</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accuracy of Information</h3>
                <p className="text-gray-700 mb-4">
                  While we strive to provide accurate and up-to-date information:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Content and information may be updated periodically</li>
                  <li>Images and descriptions are for illustrative purposes</li>
                  <li>We recommend verifying information before making decisions</li>
                  <li>We recommend consulting professional sources for critical matters</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Individual Results</h3>
                <p className="text-gray-700 mb-6">
                  Results from using our content and tools may vary from person to person. Factors such as age, skin type, health condition,
                  lifestyle, and adherence to recommendations can affect outcomes. Testimonials and reviews reflect individual
                  experiences and should not be considered typical results.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Beauty and Cosmetic Disclaimer</h2>
                <div className="bg-pink-50 border-l-4 border-pink-400 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-3">💄 Beauty Content Information</h3>
                  <ul className="list-disc pl-5 text-pink-700 space-y-2">
                    <li>Skin reactions and allergies may occur - always perform patch tests</li>
                    <li>Results may vary based on individual skin type and condition</li>
                    <li>Beauty advice is for informational purposes only</li>
                    <li>Consult a dermatologist for specific skin concerns</li>
                    <li>Follow content recommendations and discontinue use if irritation occurs</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tool and Calculator Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  Our website may include various health and beauty calculators and tools:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Results are estimates and should not replace professional assessment</li>
                  <li>Tools are provided for educational and informational purposes only</li>
                  <li>Accuracy of calculations depends on the information you provide</li>
                  <li>We are not responsible for decisions made based on tool results</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Content</h2>
                <p className="text-gray-700 mb-6">
                  Our website may contain links to third-party websites or content.
                  We do not endorse or take responsibility for the accuracy, completeness, or reliability of third-party content.
                  Users access third-party content at their own risk.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Consultation</h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">When to Seek Professional Help</h3>
                      <p className="text-blue-700 mb-3">
                        You should consult qualified professionals in the following situations:
                      </p>
                      <ul className="list-disc pl-5 text-blue-700 space-y-1">
                        <li>Before starting any new health or wellness program</li>
                        <li>If you have existing medical conditions</li>
                        <li>When experiencing adverse reactions to content recommendations</li>
                        <li>For personalized health or beauty advice</li>
                        <li>If you have concerns about content suitability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  To the fullest extent permitted by law, Marwari Luxe disclaims all liability for any damages, injuries, or 
                  adverse effects that may result from the use of our content, website, or services. This includes but is not 
                  limited to direct, indirect, incidental, consequential, or punitive damages.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Age Restrictions</h2>
                <p className="text-gray-700 mb-6">
                  Our content and services are intended for use by adults 18 years and older unless specifically stated otherwise.
                  Content intended for minors should be used under adult supervision and with appropriate professional guidance.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Information</h2>
                <p className="text-gray-700 mb-6">
                  Our content and information have not been evaluated by the Food and Drug Administration (FDA) unless specifically stated. 
                  Information provided is not intended to diagnose, treat, cure, or prevent any disease. Claims made 
                  are based on available research and user testimonials.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Disclaimer</h2>
                <p className="text-gray-700 mb-6">
                  We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with an updated 
                  revision date. We encourage you to review this disclaimer periodically for any changes. Your continued use of 
                  our website after any modifications to this disclaimer constitutes acceptance of those changes.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Disclaimer, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
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

export default DisclaimerPage;