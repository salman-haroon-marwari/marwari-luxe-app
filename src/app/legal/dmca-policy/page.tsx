import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'DMCA Copyright Policy - Marwari Luxe',
  description: 'Digital Millennium Copyright Act (DMCA) policy for Marwari Luxe. Learn how to report copyright infringement and our takedown procedures.',
  keywords: ['DMCA', 'copyright policy', 'copyright infringement', 'takedown notice', 'intellectual property', 'Marwari Luxe'],
  openGraph: {
    title: 'DMCA Copyright Policy - Marwari Luxe',
    description: 'Digital Millennium Copyright Act (DMCA) policy for Marwari Luxe. Learn how to report copyright infringement and our takedown procedures.',
    url: 'https://marwariluxe.com/legal/dmca-policy',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe - DMCA Copyright Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA Copyright Policy - Marwari Luxe',
    description: 'Digital Millennium Copyright Act (DMCA) policy for Marwari Luxe. Learn how to report copyright infringement and our takedown procedures.',
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
    canonical: 'https://marwariluxe.com/legal/dmca-policy',
  },
};

export default function DMCAPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">DMCA Copyright Policy</h1>
              <p className="text-gray-600">Last Updated: May 1, 2026</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Respect for Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  At Marwari Luxe ("we", "us", "our"), we respect the intellectual property rights of others and expect our users to do the same. It is our policy to respond to clear notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA).
                </p>
                <p className="text-gray-700">
                  We are committed to maintaining a compliant website. If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on Marwari Luxe, please notify us immediately.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">DMCA Takedown Notice Requirements</h2>
                <p className="text-gray-700 mb-4">
                  If you are a copyright owner, or are authorized to act on behalf of one, and you believe that your work has been infringed upon, please submit a designated notice to us.
                </p>
                <p className="text-gray-700 mb-6">
                  To be effective, your notification must be in writing and include the following information:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Identification of the Copyrighted Work:</h3>
                    <p className="text-gray-700 mb-3">
                      A description of the copyrighted work that you claim has been infringed. If multiple copyrighted works are covered by a single notification, you may provide a representative list of such works.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Identification of the Infringing Material:</h3>
                    <p className="text-gray-700 mb-3">
                      A description of the material that you claim is infringing (or to be the subject of infringing activity) and that is to be removed or access to which is to be disabled.
                    </p>
                    <p className="text-gray-700 font-medium text-red-600">
                      Crucial: You must provide the specific URL(s) or other specific locations on Marwari Luxe where the material is located so we can locate it.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Information:</h3>
                    <p className="text-gray-700 mb-3">
                      Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and a valid email address.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Statement of Good Faith:</h3>
                    <p className="text-gray-700 mb-3">
                      A statement that you have a "good faith belief" that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law (e.g., "I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use).").
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Statement of Accuracy:</h3>
                    <p className="text-gray-700 mb-3">
                      A statement that the information in the notification is accurate, and under penalty of perjury, that you are the copyright owner or authorized to act on behalf of the owner.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Signature:</h3>
                    <p className="text-gray-700 mb-3">
                      A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Submit a Claim</h2>
                <p className="text-gray-700 mb-4">
                  Please send your DMCA Takedown Notice to our Designated Copyright Agent via email:
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <p className="text-gray-800 font-semibold text-lg mb-2">Email: <a href="mailto:MARWARILUXE@GMAIL.COM" className="text-blue-600 hover:underline">MARWARILUXE@GMAIL.COM</a></p>
                  <p className="text-gray-700">Subject Line: DMCA Copyright Infringement Notice - [Insert Domain Name]</p>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Note on False Claims</h2>
                <p className="text-gray-700 mb-4">
                  Please be aware that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability for damages.
                </p>
                <p className="text-gray-700">
                  If you are unsure whether the material available online infringes your copyright, we suggest that you contact an attorney before sending us a notice.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Handling of Requests</h2>
                <p className="text-gray-700 mb-4">
                  Upon receipt of a valid DMCA notice, Marwari Luxe will take reasonable steps to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Remove or disable access to the infringing material.</li>
                  <li>Notify the content provider, member, or user that we have removed or disabled access to the material.</li>
                  <li>Terminate the accounts of repeat infringers where appropriate.</li>
                </ul>
                <p className="text-gray-700">
                  We aim to handle all takedown requests promptly to ensure a safe and legal environment for our users.
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