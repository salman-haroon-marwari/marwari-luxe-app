import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Step Counter - Track Your Daily Steps | Marwari Luxe',
  description: 'Count your daily steps with our free step counter tool. Set goals, track progress, and monitor your activity levels to stay fit and healthy. Perfect for fitness enthusiasts and anyone looking to increase their daily movement.',
  keywords: ['step counter', 'pedometer', 'step tracker', 'activity tracker', 'fitness tool', 'daily steps', 'health tracker', 'movement tracker'],
  openGraph: {
    title: 'Free Step Counter - Track Your Daily Steps | Marwari Luxe',
    description: 'Count your daily steps with our free step counter tool. Set goals, track progress, and monitor your activity levels to stay fit and healthy. Perfect for fitness enthusiasts and anyone looking to increase their daily movement.',
    url: 'https://marwariluxe.com/tools/health/step-counter',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Step Counter Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Step Counter - Track Your Daily Steps | Marwari Luxe',
    description: 'Count your daily steps with our free step counter tool. Set goals, track progress, and monitor your activity levels to stay fit and healthy.',
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
    canonical: 'https://marwariluxe.com/tools/health/step-counter',
  },
};

export default function StepCounterLayout({
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