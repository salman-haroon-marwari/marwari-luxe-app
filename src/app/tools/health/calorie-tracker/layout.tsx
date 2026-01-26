import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Calorie Tracker - Count Calories & Lose Weight | Marwari Luxe',
  description: 'Track your daily calorie intake with our free calorie counter tool. Achieve your weight loss goals with accurate nutrition tracking. Perfect for dieting and healthy eating.',
  keywords: ['calorie tracker', 'calorie counter', 'nutrition tracker', 'weight loss tool', 'diet tracker', 'food calories', 'health app', 'fitness tool'],
  openGraph: {
    title: 'Free Calorie Tracker - Count Calories & Lose Weight | Marwari Luxe',
    description: 'Track your daily calorie intake with our free calorie counter tool. Achieve your weight loss goals with accurate nutrition tracking.',
    url: 'https://marwariluxe.com/tools/health/calorie-tracker',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Calorie Tracker Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Calorie Tracker - Count Calories & Lose Weight | Marwari Luxe',
    description: 'Track your daily calorie intake with our free calorie counter tool. Achieve your weight loss goals.',
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
    canonical: 'https://marwariluxe.com/tools/health/calorie-tracker',
  },
};

export default function CalorieTrackerLayout({
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