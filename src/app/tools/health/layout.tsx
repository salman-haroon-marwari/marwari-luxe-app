import type { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Health Tools | Wellness Calculators & Trackers | Marwari Luxe',
  description: 'Access our collection of free health tools including BMI calculators, medication trackers, calorie counters, and wellness assessment tools. Improve your health journey with our expert-designed utilities.',
  keywords: ['health tools', 'wellness tools', 'medical calculators', 'health trackers', 'wellness calculators', 'health assessment', 'medical tools', 'wellness utilities'],
  openGraph: {
    title: 'Health Tools | Wellness Calculators & Trackers | Marwari Luxe',
    description: 'Access our collection of free health tools including BMI calculators, medication trackers, calorie counters, and wellness assessment tools.',
    url: 'https://marwariluxe.com/tools/health',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Health Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Tools | Wellness Calculators & Trackers | Marwari Luxe',
    description: 'Access our collection of free health tools including BMI calculators, medication trackers, calorie counters, and wellness assessment tools.',
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
    canonical: 'https://marwariluxe.com/tools/health',
  },
};

export default function HealthToolsLayout({
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