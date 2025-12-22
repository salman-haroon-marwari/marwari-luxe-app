import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Stress Assessment - Check Your Stress Levels | Marwari Luxe',
  description: 'Assess your stress levels with our free stress assessment tool. Get personalized insights into your stress patterns and receive recommendations for stress management techniques. Take control of your mental wellness today.',
  keywords: ['stress assessment', 'stress test', 'mental health', 'stress level', 'wellness tool', 'stress management', 'mental wellness', 'health assessment'],
  openGraph: {
    title: 'Free Stress Assessment - Check Your Stress Levels | Marwari Luxe',
    description: 'Assess your stress levels with our free stress assessment tool. Get personalized insights into your stress patterns and receive recommendations for stress management techniques. Take control of your mental wellness today.',
    url: 'https://marwariluxe.com/tools/health/stress-assessment',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Stress Assessment Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Stress Assessment - Check Your Stress Levels | Marwari Luxe',
    description: 'Assess your stress levels with our free stress assessment tool. Get personalized insights into your stress patterns and receive recommendations for stress management techniques.',
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
    canonical: 'https://marwariluxe.com/tools/health/stress-assessment',
  },
};

export default function StressAssessmentLayout({
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