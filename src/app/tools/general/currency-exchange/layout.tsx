import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Currency Exchange Converter - Real-Time Rates | Marwari Luxe',
  description: 'Convert currencies instantly with our free currency exchange tool. Get real-time exchange rates for 20+ global currencies. Perfect for travelers, businesses, and investors.',
  keywords: ['currency converter', 'exchange rate calculator', 'currency exchange', 'foreign exchange', 'FX converter', 'money converter', 'travel money', 'business finance'],
  openGraph: {
    title: 'Free Currency Exchange Converter - Real-Time Rates | Marwari Luxe',
    description: 'Convert currencies instantly with our free currency exchange tool. Get real-time exchange rates for 20+ global currencies.',
    url: 'https://marwariluxe.com/tools/general/currency-exchange',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Currency Exchange Converter Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Currency Exchange Converter - Real-Time Rates | Marwari Luxe',
    description: 'Convert currencies instantly with our free currency exchange tool. Get real-time exchange rates for 20+ global currencies.',
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
    canonical: 'https://marwariluxe.com/tools/general/currency-exchange',
  },
};

export default function CurrencyExchangeLayout({
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