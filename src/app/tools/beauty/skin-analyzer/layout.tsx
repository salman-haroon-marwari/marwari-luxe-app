import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Skin Type Analyzer - Find Your Perfect Skincare | Marwari Luxe',
  description: 'Determine your skin type with our free skin analyzer tool. Get personalized skincare recommendations based on your unique skin profile. Perfect for finding the right products for your skin.',
  keywords: ['skin type analyzer', 'skincare quiz', 'skin analysis', 'personalized skincare', 'beauty tool', 'skincare routine', 'skin care', 'beauty analysis'],
  openGraph: {
    title: 'Free Skin Type Analyzer - Find Your Perfect Skincare | Marwari Luxe',
    description: 'Determine your skin type with our free skin analyzer tool. Get personalized skincare recommendations based on your unique skin profile.',
    url: 'https://marwariluxe.com/tools/beauty/skin-analyzer',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Skin Type Analyzer Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Skin Type Analyzer - Find Your Perfect Skincare | Marwari Luxe',
    description: 'Determine your skin type with our free skin analyzer tool. Get personalized skincare recommendations.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/skin-analyzer',
  },
};

export default function SkinAnalyzerLayout({
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