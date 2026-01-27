import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Marwari Luxe Health & Wellness Content',
  description: 'Find answers to common questions about Marwari Luxe content, tools, services, and wellness advice. Get help with your health and wellness journey.',
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: 'https://marwariluxe.com/legal/faq'
  },
  openGraph: {
    title: 'Frequently Asked Questions - Marwari Luxe Health & Wellness Content',
    description: 'Find answers to common questions about Marwari Luxe content, tools, services, and wellness advice.',
    url: 'https://marwariluxe.com/legal/faq',
    images: [
      {
        url: '/faq-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Frequently Asked Questions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions - Marwari Luxe Health & Wellness Content',
    description: 'Find answers to common questions about Marwari Luxe content, tools, services, and wellness advice.',
    images: ['/faq-twitter-card.jpg']
  }
};

const FAQPage = () => {
  const faqData = [
    {
      question: "How do I access our content and tools?",
      answer: "Simply browse our website to access our health, wellness, and beauty content, as well as our various tools and resources."
    },
    {
      question: "Is there a fee to access content?",
      answer: "Most of our content and tools are free to access. Some premium features may have associated costs which will be clearly indicated."
    },
    {
      question: "How often is content updated?",
      answer: "We regularly update our content and tools to provide the most current and relevant information for health, wellness, and beauty topics."
    },
    {
      question: "Is your content available internationally?",
      answer: "Yes! Our website content and tools are accessible worldwide to users interested in health, wellness, and beauty topics."
    },
    {
      question: "Is there a subscription fee for premium content?",
      answer: "Some premium content and tools may have subscription fees. These will be clearly indicated before you access the premium content. Free content remains freely accessible."
    },
    {
      question: "How can I stay updated with new content?",
      answer: "You can subscribe to our newsletter or follow our social media channels to receive notifications about new content and tools."
    },
    {
      question: "What if I find inaccurate information?",
      answer: "If you encounter any inaccuracies in our content, please contact us at marwariluxe@gmail.com so we can review and update the information as needed."
    },
    {
      question: "Can I contribute content?",
      answer: "We welcome contributions from qualified experts. Please contact us at marwariluxe@gmail.com with your proposal and credentials."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "If you encounter any inappropriate content, please report it to us immediately at marwariluxe@gmail.com."
    },
    {
      question: "How can I provide feedback?",
      answer: "We value your feedback! You can send us suggestions and comments at marwariluxe@gmail.com."
    },
    {
      question: "Do you offer personalized recommendations?",
      answer: "Yes, we offer various tools and resources that can provide personalized suggestions based on your inputs."
    },
    {
      question: "Is your content scientifically backed?",
      answer: "We strive to provide information based on scientific research and expert knowledge. However, individual results may vary. Always consult healthcare professionals for personalized advice."
    },
    {
      question: "Do you promote ethical practices?",
      answer: "Yes, we promote ethical practices and responsible consumption in health, wellness, and beauty."
    },
    {
      question: "Can I use multiple tools together?",
      answer: "Yes, many of our tools can be used together to enhance your experience. Follow the tool instructions and possibly consult healthcare professionals for personalized advice, especially for health-related tools."
    },
    {
      question: "What if I have allergies or sensitivities?",
      answer: "Always read ingredient lists carefully and perform patch tests for topical content recommendations. If you have known allergies, consult with a healthcare provider before implementing new health or beauty recommendations."
    },
    {
      question: "Do your health calculators provide medical advice?",
      answer: "No, our health calculators and tools are for informational purposes only and should not replace professional medical advice. Always consult healthcare professionals for medical guidance."
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer: "Click the 'Forgot Password' link on the login page and enter your email address. You'll receive instructions to reset your password via email."
    },
    {
      question: "How do I update my account information?",
      answer: "Log into your account and go to the 'Account Settings' or 'Profile' section where you can update your personal information and preferences."
    },
    {
      question: "Why can't I access certain features on mobile?",
      answer: "Our website is optimized for mobile devices. If you're experiencing issues, try refreshing the page, clearing your browser cache, or updating your browser to the latest version."
    },
    {
      question: "How do I unsubscribe from emails?",
      answer: "You can unsubscribe by clicking the 'Unsubscribe' link at the bottom of any email we send, or by updating your email preferences in your account settings."
    },
    {
      question: "Do you offer business partnerships?",
      answer: "Yes, we consider partnerships with businesses that align with our mission in health, wellness, and beauty. Contact us at marwariluxe@gmail.com for more information."
    },
    {
      question: "Can I become a content contributor or partner?",
      answer: "We have content contributor and partnership programs available. Please reach out to marwariluxe@gmail.com with details about your proposal and expertise."
    },
    {
      question: "Do you accept content submissions from experts?",
      answer: "We consider content submissions from qualified experts in health, wellness, and beauty. Please submit your proposal to marwariluxe@gmail.com."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team via email at marwariluxe@gmail.com, or through our contact form. We're available Monday-Friday, 9 AM-6 PM EST."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-20">
            {/* Header */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
              </div>
              <p className="text-gray-600">
                Find answers to common questions about our content, tools, services, and policies. 
                Can't find what you're looking for? <Link href="/contact" className="text-purple-600 hover:text-purple-700">Contact us</Link>.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <details key={index} className="group border border-gray-200 rounded-lg">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                    <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                    <svg className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
                <p className="text-purple-100 mb-6">
                  Our customer service team is here to help you with any questions not covered in our FAQ.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    📧 Contact Support
                  </Link>
                </div>
                <p className="text-sm text-purple-200 mt-4">
                  Available Monday - Friday, 9 AM - 6 PM EST
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Pages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  href="/legal/privacy-policy"
                  className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="font-medium text-gray-900">Privacy Policy</div>
                </Link>
                <Link
                  href="/legal/terms"
                  className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="text-2xl mb-2">📜</div>
                  <div className="font-medium text-gray-900">Terms of Service</div>
                </Link>
                <Link
                  href="/legal/disclaimer"
                  className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="text-2xl mb-2">⚠️</div>
                  <div className="font-medium text-gray-900">Disclaimer</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;