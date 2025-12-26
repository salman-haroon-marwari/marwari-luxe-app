import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Marwari Luxe',
  description: 'Get in touch with Marwari Luxe for questions about our health, wellness, and beauty products. We offer personalized wellness advice and expert support.',
  keywords: ['contact Marwari Luxe', 'customer support', 'health and beauty questions', 'wellness advice', 'product inquiry', 'customer service'],
  openGraph: {
    title: 'Contact Us | Marwari Luxe',
    description: 'Get in touch with Marwari Luxe for questions about our health, wellness, and beauty products.',
    url: 'https://marwariluxe.com/contact',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Marwari Luxe - Premium Health & Beauty Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Marwari Luxe',
    description: 'Get in touch with Marwari Luxe for questions about our health, wellness, and beauty products.',
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
    canonical: 'https://marwariluxe.com/contact',
  },
};