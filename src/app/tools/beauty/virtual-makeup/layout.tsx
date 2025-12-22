import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Virtual Makeup Try-On - Test Looks Online | Marwari Luxe',
  description: 'Try on makeup virtually with our free virtual makeup tool. Test different looks, colors, and styles without applying any products. Perfect for experimenting with new makeup trends and finding your signature look.',
  keywords: ['virtual makeup', 'makeup try-on', 'virtual try-on', 'makeup simulator', 'beauty tool', 'makeup app', 'virtual beauty', 'online makeup'],
  openGraph: {
    title: 'Free Virtual Makeup Try-On - Test Looks Online | Marwari Luxe',
    description: 'Try on makeup virtually with our free virtual makeup tool. Test different looks, colors, and styles without applying any products. Perfect for experimenting with new makeup trends and finding your signature look.',
    url: 'https://marwariluxe.com/tools/beauty/virtual-makeup',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Virtual Makeup Try-On Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Virtual Makeup Try-On - Test Looks Online | Marwari Luxe',
    description: 'Try on makeup virtually with our free virtual makeup tool. Test different looks, colors, and styles without applying any products.',
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
    canonical: 'https://marwariluxe.com/tools/beauty/virtual-makeup',
  },
};

export default function VirtualMakeupLayout({
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