import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Beauty Calendar - Plan Your Beauty Routine | Marwari Luxe',
  description: 'Organize your beauty appointments, treatments, and routines with our free beauty calendar tool. Never miss a skincare appointment or beauty treatment again.',
  keywords: ['beauty calendar', 'skincare schedule', 'beauty planner', 'appointment scheduler', 'beauty routine', 'treatment planner', 'beauty organizer', 'skincare calendar'],
  openGraph: {
    title: 'Free Beauty Calendar - Plan Your Beauty Routine | Marwari Luxe',
    description: 'Organize your beauty appointments, treatments, and routines with our free beauty calendar tool. Never miss a skincare appointment or beauty treatment again.',
    url: 'https://marwariluxe.com/tools/beauty/beauty-calendar',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Beauty Calendar Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Beauty Calendar - Plan Your Beauty Routine | Marwari Luxe',
    description: 'Organize your beauty appointments, treatments, and routines with our free beauty calendar tool.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/beauty-calendar',
  },
};

export default function BeautyCalendarLayout({
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