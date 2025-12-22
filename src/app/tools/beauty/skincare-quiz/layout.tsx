import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Skincare Quiz - Find Your Perfect Routine | Marwari Luxe',
  description: 'Take our free skincare quiz to discover your ideal skincare routine. Get personalized product recommendations based on your skin type, concerns, and goals. Perfect for beginners and skincare enthusiasts.',
  keywords: ['skincare quiz', 'skin care quiz', 'personalized skincare', 'skincare routine', 'beauty quiz', 'skin analysis', 'skincare recommendations', 'beauty tool'],
  openGraph: {
    title: 'Free Skincare Quiz - Find Your Perfect Routine | Marwari Luxe',
    description: 'Take our free skincare quiz to discover your ideal skincare routine. Get personalized product recommendations based on your skin type, concerns, and goals. Perfect for beginners and skincare enthusiasts.',
    url: 'https://marwariluxe.com/tools/beauty/skincare-quiz',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Skincare Quiz Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Skincare Quiz - Find Your Perfect Routine | Marwari Luxe',
    description: 'Take our free skincare quiz to discover your ideal skincare routine. Get personalized product recommendations based on your skin type, concerns, and goals.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/skincare-quiz',
  },
};

export default function SkincareQuizLayout({
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