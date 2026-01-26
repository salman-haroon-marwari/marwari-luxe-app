import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Cosmetic Ingredient Checker - Safe Beauty Products | Marwari Luxe',
  description: 'Check cosmetic product ingredients for allergens and harmful substances. Get instant analysis of potentially concerning ingredients and safer alternatives. Make informed beauty choices.',
  keywords: ['ingredient checker', 'cosmetic ingredients', 'beauty product safety', 'skincare ingredients', 'allergen checker', 'harmful chemicals', 'clean beauty', 'safe cosmetics'],
  openGraph: {
    title: 'Free Cosmetic Ingredient Checker - Safe Beauty Products | Marwari Luxe',
    description: 'Check cosmetic product ingredients for allergens and harmful substances. Get instant analysis of potentially concerning ingredients and safer alternatives.',
    url: 'https://marwariluxe.com/tools/beauty/ingredient-checker',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Cosmetic Ingredient Checker Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Cosmetic Ingredient Checker - Safe Beauty Products | Marwari Luxe',
    description: 'Check cosmetic product ingredients for allergens and harmful substances. Get instant analysis and safer alternatives.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/ingredient-checker',
  },
};

export default function IngredientCheckerLayout({
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