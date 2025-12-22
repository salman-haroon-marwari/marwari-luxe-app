import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free BMI Calculator - Check Your Health Status | Marwari Luxe',
  description: 'Calculate BMI instantly! Know your health status in seconds. Get instant results & health category classification. Used by fitness trainers & doctors. Free online BMI tool.',
  keywords: ['BMI calculator', 'body mass index', 'health tool', 'weight calculator', 'height calculator', 'health assessment', 'wellness tool', 'free health tool'],
  openGraph: {
    title: 'Free BMI Calculator - Check Your Health Status | Marwari Luxe',
    description: 'Calculate BMI instantly! Know your health status in seconds. Get instant results & health category classification. Used by fitness trainers & doctors.',
    url: 'https://marwariluxe.com/tools/health/bmi-calculator',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Free BMI Calculator Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free BMI Calculator - Check Your Health Status | Marwari Luxe',
    description: 'Calculate BMI instantly! Know your health status in seconds. Get instant results & health category classification.',
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
    canonical: 'https://marwariluxe.com/tools/health/bmi-calculator',
  },
};

export default function BMICalculatorLayout({
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