'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const categoryLinks = [
    { name: 'Health & Wellness', href: '/categories/health-wellness', icon: '🏥' },
    { name: 'Beauty & Cosmetics', href: '/categories/beauty-cosmetics', icon: '💄' },
    { name: 'Health Tools', href: '/tools/health', icon: '⚕️' },
    { name: 'Beauty Tools', href: '/tools/beauty', icon: '✨' },
    { name: 'General Tools', href: '/tools/general', icon: '🔧' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy-policy' },
    { name: 'Terms & Conditions', href: '/legal/terms' },
    { name: 'Disclaimer', href: '/legal/disclaimer' },
    { name: 'DMCA Policy', href: '/legal/dmca-policy' },
    { name: 'Images & Media Policy', href: '/legal/images-media-policy' },
    { name: 'Images Disclaimer', href: '/legal/images-disclaimer' },
    { name: 'FAQ', href: '/legal/faq' },
  ];

  // State for scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  // State for subscribe form
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Handle scroll event to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Handle subscribe form submission
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setPopupMessage('Please enter a valid email address');
      setShowPopup(true);
      return;
    }
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setPopupMessage(data.message);
        setEmail(''); // Clear the email field
      } else {
        setPopupMessage(data.message || 'Something went wrong. Please try again.');
      }
      
      setShowPopup(true);
    } catch (error) {
      setPopupMessage('Network error. Please try again.');
      setShowPopup(true);
    }
  };

  // social icons removed to avoid unused-symbol warnings

  const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white safe-area-inset-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div>
              {/* Footer Logo - Multiple Options */}
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4">Marwari Luxe</h3>
              
              {/* Option 1: Add logo image (uncomment to use) */}
              {/* <div className="flex items-center mb-3 sm:mb-4">
                <img src="/logo-white.png" alt="Marwari Luxe" className="h-8 mr-2" />
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400">Marwari Luxe</h3>
              </div> */}
              
              {/* Option 2: Add icon with text (uncomment to use) */}
              {/* <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-3xl mr-2">💎</span>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400">Marwari Luxe</h3>
              </div> */}
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                Your trusted destination for expert health and beauty content. 
                We&apos;re committed to providing high-quality, evidence-based information that enhances 
                your wellness journey and natural beauty.
              </p>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors block py-3 px-3 rounded-md hover:bg-gray-800 text-sm sm:text-base touch-target"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Categories</h4>
              <ul className="space-y-2">
                {categoryLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors block py-3 px-3 rounded-md hover:bg-gray-800 text-sm sm:text-base flex items-center touch-target"
                    >
                      <span className="mr-2">{link.icon}</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors block py-3 px-3 rounded-md hover:bg-gray-800 text-sm sm:text-base touch-target"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Unique Newsletter Signup */}
        <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-gray-700">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 sm:p-8 border border-purple-800/50 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">Wellness Insider</h4>
                </div>
                <p className="text-purple-200 mb-4 max-w-2xl">
                  Get exclusive access to premium health insights, beauty secrets, and member-only discounts delivered straight to your inbox.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-purple-200 text-sm">
                    <svg className="w-4 h-4 mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Weekly wellness tips</span>
                  </div>
                  <div className="flex items-center text-purple-200 text-sm">
                    <svg className="w-4 h-4 mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Exclusive discounts</span>
                  </div>
                  <div className="flex items-center text-purple-200 text-sm">
                    <svg className="w-4 h-4 mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Early content access</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="pl-10 pr-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center"
                >
                  <span>Subscribe</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Marwari Luxe. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ for your wellness journey</p>
          
          {/* Scroll to Top Button - Always rendered to prevent hydration mismatch */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 z-50 ${
              showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUpIcon />
          </button>
        </div>
        
        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                  <svg className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-foreground/80 mb-6">{popupMessage}</p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;