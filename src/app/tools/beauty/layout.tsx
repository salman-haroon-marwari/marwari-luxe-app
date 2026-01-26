import type { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Beauty Tools | Skincare Calculators & Analyzers | Marwari Luxe',
  description: 'Discover our collection of free beauty tools including skin type analyzers, skincare quizzes, makeup shade finders, and cosmetic calculators. Enhance your beauty routine with our expert-designed utilities.',
  keywords: ['beauty tools', 'skincare tools', 'cosmetic tools', 'beauty calculators', 'skincare analyzers', 'makeup tools', 'beauty utilities', 'skincare quizzes'],
  openGraph: {
    title: 'Beauty Tools | Skincare Calculators & Analyzers | Marwari Luxe',
    description: 'Discover our collection of free beauty tools including skin type analyzers, skincare quizzes, makeup shade finders, and cosmetic calculators.',
    url: 'https://marwariluxe.com/tools/beauty',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Beauty Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Tools | Skincare Calculators & Analyzers | Marwari Luxe',
    description: 'Discover our collection of free beauty tools including skin type analyzers, skincare quizzes, makeup shade finders, and cosmetic calculators.',
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
    canonical: 'https://marwariluxe.com/tools/beauty',
  },
};

export default function BeautyToolsLayout({
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