import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Loan Calculator - Calculate EMIs & Interest | Marwari Luxe',
  description: 'Calculate loan EMIs, interest, and total repayment amounts with our free loan calculator tool. Compare different loan options and make informed financial decisions.',
  keywords: ['loan calculator', 'EMI calculator', 'interest calculator', 'loan EMI', 'mortgage calculator', 'car loan calculator', 'personal loan', 'financial calculator'],
  openGraph: {
    title: 'Free Loan Calculator - Calculate EMIs & Interest | Marwari Luxe',
    description: 'Calculate loan EMIs, interest, and total repayment amounts with our free loan calculator tool. Compare different loan options and make informed financial decisions.',
    url: 'https://marwariluxe.com/tools/general/loan-calculator',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Loan Calculator Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Loan Calculator - Calculate EMIs & Interest | Marwari Luxe',
    description: 'Calculate loan EMIs, interest, and total repayment amounts with our free loan calculator tool. Compare different loan options.',
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
    canonical: 'https://marwariluxe.com/tools/general/loan-calculator',
  },
};

export default function LoanCalculatorLayout({
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