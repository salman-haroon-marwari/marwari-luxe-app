import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Text Formatter - Format & Transform Text Online | Marwari Luxe',
  description: 'Format and transform text with our free text formatter tool. Convert case, remove extra spaces, count words, and more. Perfect for writers, developers, and content creators.',
  keywords: ['text formatter', 'text converter', 'case converter', 'word counter', 'text tool', 'format text', 'text transformation', 'online text editor'],
  openGraph: {
    title: 'Free Text Formatter - Format & Transform Text Online | Marwari Luxe',
    description: 'Format and transform text with our free text formatter tool. Convert case, remove extra spaces, count words, and more. Perfect for writers, developers, and content creators.',
    url: 'https://marwariluxe.com/tools/general/text-formatter',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Text Formatter Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Text Formatter - Format & Transform Text Online | Marwari Luxe',
    description: 'Format and transform text with our free text formatter tool. Convert case, remove extra spaces, count words, and more.',
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
    canonical: 'https://marwariluxe.com/tools/general/text-formatter',
  },
};

export default function TextFormatterLayout({
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