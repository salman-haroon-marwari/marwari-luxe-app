import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Blood Pressure Tracker - Monitor Your Health | Marwari Luxe',
  description: 'Track your blood pressure readings over time. Understand your cardiovascular health with our free blood pressure monitoring tool. Get instant analysis and health recommendations.',
  keywords: ['blood pressure tracker', 'blood pressure monitor', 'health tracker', 'cardiovascular health', 'BP monitor', 'heart health', 'health tool', 'medical tracker'],
  openGraph: {
    title: 'Free Blood Pressure Tracker - Monitor Your Health | Marwari Luxe',
    description: 'Track your blood pressure readings over time. Understand your cardiovascular health with our free blood pressure monitoring tool.',
    url: 'https://marwariluxe.com/tools/health/blood-pressure',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Blood Pressure Tracker Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Blood Pressure Tracker - Monitor Your Health | Marwari Luxe',
    description: 'Track your blood pressure readings over time. Understand your cardiovascular health with our free tool.',
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
    canonical: 'https://marwariluxe.com/tools/health/blood-pressure',
  },
};

export default function BloodPressureLayout({
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