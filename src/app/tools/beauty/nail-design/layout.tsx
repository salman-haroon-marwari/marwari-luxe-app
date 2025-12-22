import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Nail Design Ideas - Creative Nail Art Inspiration | Marwari Luxe',
  description: 'Get creative nail design ideas with our free nail art inspiration tool. Discover trending designs, seasonal patterns, and personalized recommendations for your next manicure.',
  keywords: ['nail design', 'nail art', 'manicure ideas', 'nail inspiration', 'beauty tool', 'nail designs', 'nail art ideas', 'creative nails'],
  openGraph: {
    title: 'Free Nail Design Ideas - Creative Nail Art Inspiration | Marwari Luxe',
    description: 'Get creative nail design ideas with our free nail art inspiration tool. Discover trending designs, seasonal patterns, and personalized recommendations for your next manicure.',
    url: 'https://marwariluxe.com/tools/beauty/nail-design',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Nail Design Ideas Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Nail Design Ideas - Creative Nail Art Inspiration | Marwari Luxe',
    description: 'Get creative nail design ideas with our free nail art inspiration tool. Discover trending designs and personalized recommendations for your next manicure.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/nail-design',
  },
};

export default function NailDesignLayout({
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