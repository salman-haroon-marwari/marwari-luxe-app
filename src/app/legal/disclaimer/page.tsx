import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer - Marwari Luxe',
  description: 'Important disclaimer regarding the use of Marwari Luxe website, content, and services. Read our medical information limitations and content usage guidelines.',
  keywords: ['disclaimer', 'medical advice', 'content usage', 'Marwari Luxe'],
  openGraph: {
    title: 'Disclaimer - Marwari Luxe',
    description: 'Important disclaimer regarding the use of Marwari Luxe website, content, and services. Read our medical information limitations and content usage guidelines.',
    url: 'https://marwariluxe.com/legal/disclaimer',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe - Disclaimer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Marwari Luxe',
    description: 'Important disclaimer regarding the use of Marwari Luxe website, content, and services. Read our medical information limitations and content usage guidelines.',
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
    canonical: 'https://marwariluxe.com/legal/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
              <p className="text-gray-600">Last Updated: May 1, 2026</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. General Information</h2>
                <p className="text-gray-700 mb-4">
                  The information provided by Marwari Luxe ("we," "us," or "our") on this website is for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
                <p className="text-gray-700">
                  By using this website, you agree that Marwari Luxe is not responsible for any errors or omissions, or for the results obtained from the use of this information. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Medical and Health Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  Marwari Luxe may contain content regarding health, beauty, wellness, and fitness. The Site cannot and does not contain medical advice.
                </p>
                <p className="text-gray-700">
                  The health and beauty information provided is for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate medical professionals or licensed healthcare providers. We do not provide any kind of medical advice, diagnosis, or treatment.
                </p>
                <p className="text-gray-700">
                  The use or reliance of any information contained on the site is solely at your own risk.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Professional Advice Disclaimer</h2>
                <p className="text-gray-700">
                  The Site cannot and does not contain legal, financial, or other professional advice. Any information provided regarding these topics is for general educational and informational purposes only and is not a substitute for professional advice.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Digital Tools and Calculators Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  Marwari Luxe may provide various online tools, calculators, and software utilities. While we strive to ensure these tools are accurate and useful, we do not guarantee their precision, reliability, or suitability for any specific purpose.
                </p>
                <p className="text-gray-700">
                  Results generated by our tools are estimates only and should not be used as the sole basis for making critical financial, health, or business decisions. Users should verify any results with professional sources.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. External Links Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties, or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                </p>
                <p className="text-gray-700">
                  We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Affiliates Disclaimer</h2>
                <p className="text-gray-700">
                  The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. This comes at no extra cost to you.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Errors and Omissions Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Marwari Luxe is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions regarding this Disclaimer, please contact us:
                </p>
                <p className="text-gray-700">
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