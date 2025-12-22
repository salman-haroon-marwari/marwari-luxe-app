import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Random Number Generator - Pick Numbers Instantly | Marwari Luxe',
  description: 'Generate random numbers with our free random number generator tool. Perfect for contests, giveaways, lotteries, and games. Customize range and quantity for your specific needs.',
  keywords: ['random number generator', 'number picker', 'random picker', 'lottery number generator', 'contest tool', 'giveaway tool', 'random selector', 'number tool'],
  openGraph: {
    title: 'Free Random Number Generator - Pick Numbers Instantly | Marwari Luxe',
    description: 'Generate random numbers with our free random number generator tool. Perfect for contests, giveaways, lotteries, and games. Customize range and quantity for your specific needs.',
    url: 'https://marwariluxe.com/tools/general/random-number-generator',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Random Number Generator Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Random Number Generator - Pick Numbers Instantly | Marwari Luxe',
    description: 'Generate random numbers with our free random number generator tool. Perfect for contests, giveaways, lotteries, and games.',
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
    canonical: 'https://marwariluxe.com/tools/general/random-number-generator',
  },
};

export default function RandomNumberGeneratorLayout({
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