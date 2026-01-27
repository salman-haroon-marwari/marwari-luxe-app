import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DMCA Policy - Marwari Luxe',
  description: 'Our DMCA policy outlining procedures for handling copyright infringement claims under the Digital Millennium Copyright Act.',
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: 'https://marwariluxe.com/legal/dmca-policy'
  },
  openGraph: {
    title: 'DMCA Policy - Marwari Luxe',
    description: 'Our DMCA policy outlining procedures for handling copyright infringement claims under the Digital Millennium Copyright Act.',
    url: 'https://marwariluxe.com/legal/dmca-policy',
    images: [
      {
        url: '/dmca-policy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe DMCA Policy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA Policy - Marwari Luxe',
    description: 'Our DMCA policy outlining procedures for handling copyright infringement claims under the Digital Millennium Copyright Act.',
    images: ['/dmca-policy-twitter-card.jpg']
  }
};

const DMCAPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">DMCA Policy</h1>
              <p className="text-gray-600">Digital Millennium Copyright Act Compliance</p>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Content */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">DMCA Compliance Statement</h2>
                <p className="text-gray-700 mb-6">
                  Marwari Luxe complies with the Digital Millennium Copyright Act (DMCA) and has established 
                  procedures for handling copyright infringement claims. This policy describes how we respond 
                  to DMCA takedown notices and counter-notifications.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">DMCA Takedown Procedure</h2>
                <p className="text-gray-700 mb-4">
                  If you believe content on our website infringes your copyright, you may submit a DMCA takedown notice.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Required Elements for Valid DMCA Notice</h3>
                <p className="text-gray-700 mb-4">
                  Your DMCA notice must include all of the following elements:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>Physical or electronic signature</strong> of the copyright owner or authorized agent</li>
                  <li><strong>Identification of copyrighted work(s)</strong> claimed to be infringed</li>
                  <li><strong>Identification of infringing material</strong> and its location on our website</li>
                  <li><strong>Contact information</strong> including name, address, telephone, and email</li>
                  <li><strong>Statement of good faith belief</strong> that use is not authorized by owner</li>
                  <li><strong>Statement under penalty of perjury</strong> that information is accurate</li>
                  <li><strong>Statement of authority</strong> to act on behalf of copyright owner</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Where to Send DMCA Notices</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <strong>Email:</strong> marwariluxe@gmail.com<br/>
                    <strong>Subject:</strong> DMCA Takedown Notice<br/>
                    <strong>Include:</strong> "DMCA Notice" in the subject line for expedited processing
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Response Process</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Initial Review</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>We review all DMCA notices for completeness and validity</li>
                  <li>Incomplete notices will be returned with request for additional information</li>
                  <li>Valid notices are processed within 24-48 business hours</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Action Taken</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Upon receipt of valid DMCA notice, we will remove or disable access to allegedly infringing material</li>
                  <li>We will notify the content uploader/author of the takedown</li>
                  <li>We maintain records of all takedown notices and actions taken</li>
                  <li>We may temporarily suspend accounts of repeat infringers</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Counter-Notification Process</h2>
                <p className="text-gray-700 mb-4">
                  If your content was removed and you believe it was mistakenly identified as infringing, 
                  you may submit a counter-notification:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Required Elements for Counter-Notification</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>Physical or electronic signature</strong> of the subscriber</li>
                  <li><strong>Identification of removed material</strong> and its former location</li>
                  <li><strong>Statement under penalty of perjury</strong> that removal was mistaken</li>
                  <li><strong>Consent to local federal court jurisdiction</strong> or agreement to accept service</li>
                  <li><strong>Contact information</strong> including name, address, telephone, and email</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Counter-Notification Processing</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>We forward valid counter-notifications to the original complainant</li>
                  <li>Content remains disabled for 10-14 business days</li>
                  <li>If no legal action is initiated, content may be restored</li>
                  <li>We notify both parties of any restoration or permanent removal</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repeat Infringer Policy</h2>
                <p className="text-gray-700 mb-6">
                  We maintain a policy of terminating accounts of users who are repeat copyright infringers. 
                  Termination decisions are made considering:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Nature and severity of infringements</li>
                  <li>Number of violations within a given period</li>
                  <li>User's response to previous warnings</li>
                  <li>Potential for future compliance</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fair Use Considerations</h2>
                <p className="text-gray-700 mb-4">
                  We evaluate whether allegedly infringing use may qualify as fair use under copyright law. 
                  Fair use factors we consider include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Purpose and character of the use (commercial vs. educational)</li>
                  <li>Nature of the copyrighted work</li>
                  <li>Amount and substantiality of portion used</li>
                  <li>Effect on the market for original work</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agent Designation</h2>
                <p className="text-gray-700 mb-4">
                  For formal DMCA communications, our designated agent is:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <strong>Designated Agent:</strong> Marwari Luxe DMCA Agent<br/>
                    <strong>Email:</strong> marwariluxe@gmail.com<br/>
                    <strong>Phone:</strong> [Add phone number if available]<br/>
                    <strong>Address:</strong> [Add physical address if available]
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">False Claims Warning</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                  <p className="text-red-700">
                    <strong>Warning:</strong> The DMCA provides for damages and attorney's fees against 
                    anyone who knowingly materially misrepresents that material is infringing. 
                    Please ensure your claim is valid before submitting a notice.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Dispute Resolution</h2>
                <p className="text-gray-700 mb-6">
                  We encourage parties to resolve copyright disputes amicably when possible. 
                  Direct communication between copyright holders and content creators often 
                  leads to faster resolutions.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-700 mb-6">
                  This DMCA Policy may be updated to reflect changes in law or our procedures. 
                  Significant changes will be communicated to our users.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For DMCA-related inquiries, complaints, or counter-notifications:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> marwariluxe@gmail.com<br/>
                    <strong>Subject Line:</strong> DMCA Notice or Counter-Notice<br/>
                    <strong>Response Time:</strong> Within 24-48 hours during business days<br/>
                    <strong>Business Days:</strong> Monday-Friday, 9:00 AM - 5:00 PM [Time Zone]
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

export default DMCAPolicyPage;