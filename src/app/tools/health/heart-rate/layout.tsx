import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Heart Rate Monitor - Track Your Pulse & BPM | Marwari Luxe',
  description: 'Monitor your heart rate with our free heart rate tracker tool. Track your resting heart rate, active heart rate, and recovery rate. Perfect for fitness enthusiasts and health-conscious individuals.',
  keywords: ['heart rate monitor', 'pulse tracker', 'BPM monitor', 'heart rate tracker', 'fitness tool', 'health monitor', 'cardio tracker', 'heart health'],
  openGraph: {
    title: 'Free Heart Rate Monitor - Track Your Pulse & BPM | Marwari Luxe',
    description: 'Monitor your heart rate with our free heart rate tracker tool. Track your resting heart rate, active heart rate, and recovery rate. Perfect for fitness enthusiasts and health-conscious individuals.',
    url: 'https://marwariluxe.com/tools/health/heart-rate',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Heart Rate Monitor Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Heart Rate Monitor - Track Your Pulse & BPM | Marwari Luxe',
    description: 'Monitor your heart rate with our free heart rate tracker tool. Track your resting heart rate, active heart rate, and recovery rate.',
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
    canonical: 'https://marwariluxe.com/tools/health/heart-rate',
  },
};

export default function HeartRateLayout({
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