import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Sleep Tracker - Monitor Your Sleep Quality | Marwari Luxe',
  description: 'Track your sleep patterns with our free sleep tracker tool. Monitor sleep duration, quality, and cycles to improve your rest and overall health. Get insights into your sleep habits and recommendations for better rest.',
  keywords: ['sleep tracker', 'sleep monitor', 'sleep quality', 'sleep analysis', 'health tool', 'rest tracker', 'sleep patterns', 'wellness tool'],
  openGraph: {
    title: 'Free Sleep Tracker - Monitor Your Sleep Quality | Marwari Luxe',
    description: 'Track your sleep patterns with our free sleep tracker tool. Monitor sleep duration, quality, and cycles to improve your rest and overall health. Get insights into your sleep habits and recommendations for better rest.',
    url: 'https://marwariluxe.com/tools/health/sleep-tracker',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Sleep Tracker Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Sleep Tracker - Monitor Your Sleep Quality | Marwari Luxe',
    description: 'Track your sleep patterns with our free sleep tracker tool. Monitor sleep duration, quality, and cycles to improve your rest and overall health.',
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
    canonical: 'https://marwariluxe.com/tools/health/sleep-tracker',
  },
};

export default function SleepTrackerLayout({
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