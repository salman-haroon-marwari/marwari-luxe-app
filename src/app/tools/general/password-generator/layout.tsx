import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Password Generator - Create Secure Passwords | Marwari Luxe',
  description: 'Generate strong, secure passwords with our free password generator tool. Customize length, characters, and complexity for maximum online security. Protect your accounts from hackers.',
  keywords: ['password generator', 'secure password', 'strong password', 'random password', 'password security', 'account security', 'online security', 'cybersecurity tool'],
  openGraph: {
    title: 'Free Password Generator - Create Secure Passwords | Marwari Luxe',
    description: 'Generate strong, secure passwords with our free password generator tool. Customize length, characters, and complexity for maximum online security. Protect your accounts from hackers.',
    url: 'https://marwariluxe.com/tools/general/password-generator',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Password Generator Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Password Generator - Create Secure Passwords | Marwari Luxe',
    description: 'Generate strong, secure passwords with our free password generator tool. Customize length, characters, and complexity for maximum online security.',
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
    canonical: 'https://marwariluxe.com/tools/general/password-generator',
  },
};

export default function PasswordGeneratorLayout({
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