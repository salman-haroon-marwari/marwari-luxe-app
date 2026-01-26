import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Skincare Routine Builder - Custom Daily Regimen | Marwari Luxe',
  description: 'Build your perfect daily skincare routine with our free routine builder tool. Get step-by-step guidance tailored to your skin type and concerns. Create morning and evening regimens for healthy, glowing skin.',
  keywords: ['skincare routine', 'skincare regimen', 'daily skincare', 'morning routine', 'evening routine', 'skincare steps', 'beauty routine', 'skin care plan'],
  openGraph: {
    title: 'Free Skincare Routine Builder - Custom Daily Regimen | Marwari Luxe',
    description: 'Build your perfect daily skincare routine with our free routine builder tool. Get step-by-step guidance tailored to your skin type and concerns. Create morning and evening regimens for healthy, glowing skin.',
    url: 'https://marwariluxe.com/tools/beauty/skincare-routine',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Skincare Routine Builder Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Skincare Routine Builder - Custom Daily Regimen | Marwari Luxe',
    description: 'Build your perfect daily skincare routine with our free routine builder tool. Get step-by-step guidance tailored to your skin type and concerns.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/skincare-routine',
  },
};

export default function SkincareRoutineLayout({
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