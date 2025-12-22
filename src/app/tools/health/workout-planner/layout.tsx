import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Workout Planner - Create Custom Fitness Routines | Marwari Luxe',
  description: 'Plan your workouts with our free fitness planner tool. Create custom exercise routines, track your progress, and achieve your fitness goals with personalized workout plans.',
  keywords: ['workout planner', 'fitness planner', 'exercise planner', 'workout routine', 'fitness tracker', 'exercise program', 'workout schedule', 'fitness app'],
  openGraph: {
    title: 'Free Workout Planner - Create Custom Fitness Routines | Marwari Luxe',
    description: 'Plan your workouts with our free fitness planner tool. Create custom exercise routines, track your progress, and achieve your fitness goals with personalized workout plans.',
    url: 'https://marwariluxe.com/tools/health/workout-planner',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Workout Planner Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Workout Planner - Create Custom Fitness Routines | Marwari Luxe',
    description: 'Plan your workouts with our free fitness planner tool. Create custom exercise routines and achieve your fitness goals.',
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
    canonical: 'https://marwariluxe.com/tools/health/workout-planner',
  },
};

export default function WorkoutPlannerLayout({
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