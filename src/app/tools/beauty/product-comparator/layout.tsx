import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Beauty Product Comparator - Compare Cosmetics & Skincare | Marwari Luxe',
  description: 'Compare beauty products side-by-side with our free product comparator tool. Analyze ingredients, prices, reviews, and benefits to make informed purchasing decisions for your beauty routine.',
  keywords: ['product comparator', 'beauty product comparison', 'cosmetic comparison', 'skincare comparator', 'beauty tool', 'product analysis', 'ingredient comparison', 'beauty shopping'],
  openGraph: {
    title: 'Free Beauty Product Comparator - Compare Cosmetics & Skincare | Marwari Luxe',
    description: 'Compare beauty products side-by-side with our free product comparator tool. Analyze ingredients, prices, reviews, and benefits to make informed purchasing decisions for your beauty routine.',
    url: 'https://marwariluxe.com/tools/beauty/product-comparator',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Beauty Product Comparator Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Beauty Product Comparator - Compare Cosmetics & Skincare | Marwari Luxe',
    description: 'Compare beauty products side-by-side with our free product comparator tool. Analyze ingredients, prices, reviews, and benefits to make informed purchasing decisions.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/product-comparator',
  },
};

export default function ProductComparatorLayout({
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