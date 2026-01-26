import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Timezone Converter - Convert Time Zones Instantly | Marwari Luxe',
  description: 'Convert between different time zones with our free timezone converter tool. Perfect for international meetings, travel planning, and coordinating with global teams. Get accurate time differences.',
  keywords: ['timezone converter', 'time zone converter', 'world clock', 'time difference', 'international time', 'meeting planner', 'travel time', 'global time converter'],
  openGraph: {
    title: 'Free Timezone Converter - Convert Time Zones Instantly | Marwari Luxe',
    description: 'Convert between different time zones with our free timezone converter tool. Perfect for international meetings, travel planning, and coordinating with global teams. Get accurate time differences.',
    url: 'https://marwariluxe.com/tools/general/timezone-converter',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Timezone Converter Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Timezone Converter - Convert Time Zones Instantly | Marwari Luxe',
    description: 'Convert between different time zones with our free timezone converter tool. Perfect for international meetings, travel planning, and coordinating with global teams.',
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
    canonical: 'https://marwariluxe.com/tools/general/timezone-converter',
  },
};

export default function TimezoneConverterLayout({
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