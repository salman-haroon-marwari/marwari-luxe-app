import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free QR Code Generator - Create Custom QR Codes | Marwari Luxe',
  description: 'Generate custom QR codes with our free QR code generator tool. Create QR codes for websites, contacts, Wi-Fi, and more. Scan and share instantly with our easy-to-use tool.',
  keywords: ['QR code generator', 'custom QR code', 'QR code maker', 'free QR codes', 'barcode generator', 'contact QR code', 'Wi-Fi QR code', 'website QR code'],
  openGraph: {
    title: 'Free QR Code Generator - Create Custom QR Codes | Marwari Luxe',
    description: 'Generate custom QR codes with our free QR code generator tool. Create QR codes for websites, contacts, Wi-Fi, and more. Scan and share instantly with our easy-to-use tool.',
    url: 'https://marwariluxe.com/tools/general/qr-code-generator',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free QR Code Generator Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free QR Code Generator - Create Custom QR Codes | Marwari Luxe',
    description: 'Generate custom QR codes with our free QR code generator tool. Create QR codes for websites, contacts, Wi-Fi, and more.',
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
    canonical: 'https://marwariluxe.com/tools/general/qr-code-generator',
  },
};

export default function QRCodeGeneratorLayout({
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