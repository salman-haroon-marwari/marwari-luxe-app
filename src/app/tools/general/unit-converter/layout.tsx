import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Unit Converter - Instant Measurement Conversion | Marwari Luxe',
  description: 'Convert measurements instantly! Support for length, weight, volume & temperature. Used by 10K+ professionals daily. Accurate conversions for cooking, travel & work.',
  keywords: ['unit converter', 'measurement converter', 'length converter', 'weight converter', 'volume converter', 'temperature converter', 'online converter'],
  openGraph: {
    title: 'Free Unit Converter - Instant Measurement Conversion | Marwari Luxe',
    description: 'Convert measurements instantly! Support for length, weight, volume & temperature. Used by 10K+ professionals daily. Accurate conversions for cooking, travel & work.',
    url: 'https://marwariluxe.com/tools/general/unit-converter',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Unit Converter Tool | Measurement Conversion | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Unit Converter - Instant Measurement Conversion | Marwari Luxe',
    description: 'Convert measurements instantly! Support for length, weight, volume & temperature. Used by 10K+ professionals daily.',
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
    canonical: 'https://marwariluxe.com/tools/general/unit-converter',
  },
};

export default function UnitConverterLayout({
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