import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Health & Wellness Blog | Expert Articles & Beauty Tips | Marwari Luxe',
  description: 'Explore our expert blog for the latest health research, wellness tips, beauty advice, and evidence-based articles. Stay informed with our comprehensive guides and product insights.',
  keywords: ['health blog', 'wellness blog', 'beauty blog', 'health tips', 'wellness advice', 'beauty tips', 'skincare advice', 'nutrition tips', 'wellness guides', 'beauty tutorials', 'health research'],
  openGraph: {
    title: 'Health & Wellness Blog | Expert Articles & Beauty Tips | Marwari Luxe',
    description: 'Explore our expert blog for the latest health research, wellness tips, beauty advice, and evidence-based articles.',
    url: 'https://marwariluxe.com/blogs',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Health & Wellness Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health & Wellness Blog | Expert Articles & Beauty Tips | Marwari Luxe',
    description: 'Explore our expert blog for the latest health research, wellness tips, beauty advice, and evidence-based articles.',
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
    canonical: 'https://marwariluxe.com/blogs',
  },
};

export default function BlogsLayout({
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