import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Water Intake Tracker - Stay Hydrated Daily | Marwari Luxe',
  description: 'Track your daily water consumption with our free hydration tracker tool. Stay properly hydrated and improve your health with personalized water intake goals.',
  keywords: ['water tracker', 'hydration tracker', 'water intake', 'daily water', 'health tracker', 'hydration monitor', 'water goal', 'health app'],
  openGraph: {
    title: 'Free Water Intake Tracker - Stay Hydrated Daily | Marwari Luxe',
    description: 'Track your daily water consumption with our free hydration tracker tool. Stay properly hydrated and improve your health with personalized water intake goals.',
    url: 'https://marwariluxe.com/tools/health/water-monitor',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Water Intake Tracker Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Water Intake Tracker - Stay Hydrated Daily | Marwari Luxe',
    description: 'Track your daily water consumption with our free hydration tracker tool. Stay properly hydrated and improve your health.',
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
    canonical: 'https://marwariluxe.com/tools/health/water-monitor',
  },
};

export default function WaterMonitorLayout({
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