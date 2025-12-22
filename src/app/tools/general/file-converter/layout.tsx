import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free File Converter - Convert Documents & Media Files | Marwari Luxe',
  description: 'Convert between different file formats with our free file converter tool. Support for documents, images, audio, and video files. Fast and secure file conversion online.',
  keywords: ['file converter', 'document converter', 'media converter', 'file format converter', 'PDF converter', 'image converter', 'audio converter', 'video converter'],
  openGraph: {
    title: 'Free File Converter - Convert Documents & Media Files | Marwari Luxe',
    description: 'Convert between different file formats with our free file converter tool. Support for documents, images, audio, and video files. Fast and secure file conversion online.',
    url: 'https://marwariluxe.com/tools/general/file-converter',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free File Converter Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free File Converter - Convert Documents & Media Files | Marwari Luxe',
    description: 'Convert between different file formats with our free file converter tool. Support for documents, images, audio, and video files.',
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
    canonical: 'https://marwariluxe.com/tools/general/file-converter',
  },
};

export default function FileConverterLayout({
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