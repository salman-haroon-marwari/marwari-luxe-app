import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Date Calculator - Days Between Dates & Date Arithmetic | Marwari Luxe',
  description: 'Calculate days between dates, add/subtract days from dates, and perform date arithmetic with our free date calculator tool. Perfect for project planning and event scheduling.',
  keywords: ['date calculator', 'days between dates', 'date difference', 'calendar calculator', 'date arithmetic', 'event planner', 'project timeline', 'date tool'],
  openGraph: {
    title: 'Free Date Calculator - Days Between Dates & Date Arithmetic | Marwari Luxe',
    description: 'Calculate days between dates, add/subtract days from dates, and perform date arithmetic with our free date calculator tool.',
    url: 'https://marwariluxe.com/tools/general/date-calculator',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Date Calculator Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Date Calculator - Days Between Dates & Date Arithmetic | Marwari Luxe',
    description: 'Calculate days between dates, add/subtract days from dates, and perform date arithmetic with our free tool.',
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
    canonical: 'https://marwariluxe.com/tools/general/date-calculator',
  },
};

export default function DateCalculatorLayout({
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