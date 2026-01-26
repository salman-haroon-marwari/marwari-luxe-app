import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Hair Care Guide - Healthy Hair Tips & Routines | Marwari Luxe',
  description: 'Get personalized hair care advice with our free hair care guide tool. Discover routines for your hair type, learn about hair products, and get tips for healthier, stronger hair.',
  keywords: ['hair care', 'hair care guide', 'hair routine', 'hair health', 'hair tips', 'hair products', 'scalp care', 'beauty tool'],
  openGraph: {
    title: 'Free Hair Care Guide - Healthy Hair Tips & Routines | Marwari Luxe',
    description: 'Get personalized hair care advice with our free hair care guide tool. Discover routines for your hair type, learn about hair products, and get tips for healthier, stronger hair.',
    url: 'https://marwariluxe.com/tools/beauty/hair-care',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Hair Care Guide Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Hair Care Guide - Healthy Hair Tips & Routines | Marwari Luxe',
    description: 'Get personalized hair care advice with our free hair care guide tool. Discover routines for your hair type and get tips for healthier hair.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/hair-care',
  },
};

export default function HairCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}