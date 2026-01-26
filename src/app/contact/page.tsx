'use client';

import { useState } from 'react';



import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// SVG Icons for social media
const FacebookIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

// Inline SVG Icons to replace Heroicons
const EnvelopeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChatBubbleLeftRightIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

// Client component starts here
const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
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
        body: JSON.stringify({ email: newsletterEmail }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setPopupMessage(data.message);
        setNewsletterEmail(''); // Clear the email field
      } else {
        setPopupMessage(data.message || 'Something went wrong. Please try again.');
      }
      
      setShowPopup(true);
    } catch (error) {
      setPopupMessage('Network error. Please try again.');
      setShowPopup(true);
    }
  };

  // Contact information cards
  const contactInfo = [
    {
      icon: <EnvelopeIcon />,
      title: "Email Us",
      content: "marwariluxe@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <PhoneIcon />,
      title: "Trusted Partners",
      content: "Verified Affiliate Network",
      description: "Quality Products from Trusted Brands"
    },
    {
      icon: <MapPinIcon />,
      title: "Expert Curated",
      content: "Handpicked Selection",
      description: "Carefully Selected for Your Wellness"
    },
    {
      icon: <ClockIcon />,
      title: "24/7 Support",
      content: "Online Assistance",
      description: "Help Whenever You Need It"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Main content with top padding */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Have questions about our products or need personalized wellness advice? 
                We&apos;re here to help you on your journey to better health and beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-800 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Online Support Section */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      {/* <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-support">Order Support</option>
                      <option value="wellness-advice">Wellness Advice</option> */}
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                      placeholder="Please describe how we can help you..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                        isSubmitting 
                          ? 'bg-purple-400 cursor-not-allowed' 
                          : 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        Oops! Something went wrong. Please try again.
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Online Support Section */}
              <div className="space-y-8">
                {/* Wellness Newsletter Card */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg p-8 text-white">
                  <div className="flex items-center mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-2xl font-bold ml-3">Wellness Newsletter</h3>
                  </div>
                  <p className="mb-6 text-emerald-100">
                    Subscribe to our weekly newsletter for exclusive health tips, product launches, and special discounts delivered straight to your inbox.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <input 
                      type="email" 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    />
                    <button 
                      type="submit"
                      className="w-full bg-white text-emerald-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Subscribe Now
                    </button>
                  </form>
                  <p className="mt-4 text-xs text-emerald-200">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                {/* Community Support Card */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <UserGroupIcon />
                    <h3 className="text-2xl font-bold text-gray-900 ml-3">Community Support</h3>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Join our vibrant community of health and beauty enthusiasts. Share experiences, ask questions, and connect with like-minded individuals.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/marwariluxeofficial" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <FacebookIcon />
                    </a>
                    <a 
                      href="https://www.instagram.com/marwariluxeofficial/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <InstagramIcon />
                    </a>
                    <a 
                      href="https://x.com/marwariluxe" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <TwitterIcon />
                    </a>
                    <a 
                      href="https://www.youtube.com/@MarwariLuxeOfficial" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <YouTubeIcon />
                    </a>
                  </div>
                </div>

                {/* Wellness Tips Card */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-lg p-8 text-white">
                  <div className="flex items-center mb-4">
                    <LightBulbIcon />
                    <h3 className="text-2xl font-bold ml-3">Wellness Tips & Resources</h3>
                  </div>
                  <p className="mb-6 text-amber-100">
                    Access our extensive library of wellness guides, beauty tutorials, and expert advice to enhance your health journey.
                  </p>
                  <Link 
                    href="/categories/health-wellness"
                    className="bg-white text-amber-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block"
                  >
                    Explore Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

// Contact Page Server Component
export default function ContactPage() {
  return <ContactClientWrapper />;
}

// Wrapper component that imports the client component
const ContactClientWrapper = () => {
  return <ContactClient />;
};