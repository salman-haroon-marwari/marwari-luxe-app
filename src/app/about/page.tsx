import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Marwari Luxe - Trusted Health & Beauty Experts',
  description: 'Meet the team behind Marwari Luxe! Discover our story, values & mission. Trusted by 10K+ customers worldwide. Combining Ayurvedic wisdom with modern science for premium wellness products.',
  keywords: ['Marwari Luxe', 'health and beauty', 'Ayurvedic wellness', 'premium skincare', 'natural supplements', 'wellness experts', 'global wellness', 'beauty products Canada', 'health supplements UK', 'organic beauty Australia'],
  openGraph: {
    title: 'About Marwari Luxe - Trusted Health & Beauty Experts',
    description: 'Meet the team behind Marwari Luxe! Discover our story, values & mission. Trusted by 10K+ customers worldwide. Combining Ayurvedic wisdom with modern science.',
    url: 'https://marwariluxe.com/about',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Marwari Luxe - Premium Health & Beauty Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Marwari Luxe - Trusted Health & Beauty Experts',
    description: 'Meet the team behind Marwari Luxe! Discover our story, values & mission. Trusted by 10K+ customers worldwide.',
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
    canonical: 'https://marwariluxe.com/about',
  },
};

// Using SVG icons instead of Heroicons since the package is not installed
const values = [
  {
    icon: (
      <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Customer-Centric",
    description: "Your wellness journey is our priority. We&apos;re committed to providing products and services that truly enhance your health and beauty."
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality Assurance",
    description: "Every product in our collection is carefully selected and tested to meet the highest standards of quality and safety."
  },
  {
    icon: (
      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Reach",
    description: "Serving customers worldwide with international shipping and support for multiple currencies and payment methods."
  },
  {
    icon: (
      <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Expert Team",
    description: "Our team of health and beauty experts continuously research and curate the best products for your needs."
  }
];

const stats = [
  { number: "10K+", label: "Happy Customers" },
  { number: "25+", label: "Premium Products" },
  { number: "50+", label: "Countries Served" },
  { number: "99%", label: "Customer Satisfaction" }
];

// Team members data
const teamMembers = [
  {
    name: "Salman Marwari",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762293147/1_iqq4q6.jpg",
    description: "Salman Marwari is the Founder and CEO of Marwari Luxe, a trusted health and beauty platform. As a passionate health and beauty blogger, he creates research-based, easy-to-understand content on skincare, nutrition and overall wellness. With years of experience in writing and digital health communication, Salman combines science and storytelling to help readers make smarter lifestyle choices. His vision is to build Marwari Luxe into a global brand that educates and inspires people to live healthier, more confident lives."
  },
  {
    name: "Dr. Sarfaraz Alam",
    role: "Chief Health Officer",
    image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762293147/2_k3mah0.jpg",
    description: "Dr. Sarfaraz Alam is the Chief Health Officer at Marwari Luxe. He holds an MBBS degree with specialization in preventive medicine and nutrition. With over 10 years of medical practice, he ensures that all health-related content published on the platform follows accurate, evidence-based standards. His expertise bridges the gap between modern medicine and everyday wellness, making health information both credible and accessible for readers worldwide."
  },
  {
    name: "Dr. Farha Ali",
    role: "Beauty Specialist",
    image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762293147/3_obup78.jpg",
    description: "Dr. Farha Ali serves as the Beauty Specialist at Marwari Luxe. She holds a Doctorate in Cosmetic Science and is certified in Advanced Skin and Hair Care Formulations. With her strong background in dermatology and aesthetic medicine, Dr. Farha helps translate complex beauty science into practical advice. Her insights guide readers toward safer, more effective skincare routines while promoting confidence through knowledge and self-care."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Main content with top padding */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white transition-opacity duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Marwari Luxe - Premium Health & Beauty Experts
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Marwari Luxe helps people look and feel their best. We combine science-backed advice with practical tips on skincare, nutrition and wellness. Our mission is to inspire confidence and a healthier lifestyle for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 transition-opacity duration-700">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story - From Tradition to Innovation
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Founded in 2020, Marwari Luxe combines Ayurvedic wellness practices with modern science. Our founders recognized the need for high-quality health and beauty solutions in today&apos;s fast-paced world.
                  </p>
                  <p>
                    We started as a small team passionate about connecting ancient wellness with modern needs. Today, we serve thousands of customers worldwide with carefully curated products that honor both tradition and innovation.
                  </p>
                  <p>
                    We&apos;re committed to authenticity, quality, and customer satisfaction. Every product undergoes rigorous testing to ensure safety, effectiveness, and ethical sourcing.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 transition-opacity duration-700">
                <div className="relative h-70 rounded-xl overflow-hidden shadow-xl">
                  {/* Added explicit width and height to ensure proper loading */}
                  <Image
                    src="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762816783/4_seitcm.png"
                    alt="Marwari Luxe Heritage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 transition-opacity duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 transition-opacity duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-100 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate experts behind Marwari Luxe, dedicated to bringing you the best in health and beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="h-64 bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center relative overflow-hidden">
                    {member.image ? (
                      <>
                        {/* Added explicit width and height to ensure proper loading */}
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          fill
                          priority={false}
                        />
                        <div className="fallback-text absolute inset-0 flex items-center justify-center text-6xl opacity-0 group-hover:opacity-100 transition-opacity">
                          
                        </div>
                      </>
                    ) : (
                      <div className="text-6xl">👤</div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}