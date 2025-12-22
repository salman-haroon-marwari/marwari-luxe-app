import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Makeup Shade Finder - Perfect Foundation Match | Marwari Luxe',
  description: 'Find your perfect foundation shade with our free makeup shade finder tool. Get personalized recommendations based on your skin tone and undertone. Never buy the wrong foundation shade again.',
  keywords: ['makeup shade finder', 'foundation matcher', 'skin tone finder', 'makeup tool', 'beauty tool', 'foundation shade', 'cosmetic finder', 'beauty advisor'],
  openGraph: {
    title: 'Free Makeup Shade Finder - Perfect Foundation Match | Marwari Luxe',
    description: 'Find your perfect foundation shade with our free makeup shade finder tool. Get personalized recommendations based on your skin tone and undertone. Never buy the wrong foundation shade again.',
    url: 'https://marwariluxe.com/tools/beauty/makeup-shade-finder',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Makeup Shade Finder Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Makeup Shade Finder - Perfect Foundation Match | Marwari Luxe',
    description: 'Find your perfect foundation shade with our free makeup shade finder tool. Get personalized recommendations based on your skin tone and undertone.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/makeup-shade-finder',
  },
};

export default function MakeupShadeFinderLayout({
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