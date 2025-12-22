import type { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'General Tools | Utility Calculators & Converters | Marwari Luxe',
  description: 'Access our collection of free general tools including unit converters, password generators, QR code creators, and utility calculators. Simplify your daily tasks with our expert-designed utilities.',
  keywords: ['general tools', 'utility tools', 'calculators', 'converters', 'productivity tools', 'utility calculators', 'general utilities', 'free tools'],
  openGraph: {
    title: 'General Tools | Utility Calculators & Converters | Marwari Luxe',
    description: 'Access our collection of free general tools including unit converters, password generators, QR code creators, and utility calculators.',
    url: 'https://marwariluxe.com/tools/general',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe General Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'General Tools | Utility Calculators & Converters | Marwari Luxe',
    description: 'Access our collection of free general tools including unit converters, password generators, QR code creators, and utility calculators.',
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
    canonical: 'https://marwariluxe.com/tools/general',
  },
};

export default function GeneralToolsLayout({
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