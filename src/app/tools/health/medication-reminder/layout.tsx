import type { Metadata } from 'next';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Medication Reminder - Never Miss a Dose | Marwari Luxe',
  description: 'Stay on track with your medications using our free medication reminder tool. Set custom alerts, track doses, and get notifications to ensure you never miss taking your prescribed medications.',
  keywords: ['medication reminder', 'pill reminder', 'medicine tracker', 'medication alert', 'health tool', 'medicine reminder', 'prescription tracker', 'health reminder'],
  openGraph: {
    title: 'Free Medication Reminder - Never Miss a Dose | Marwari Luxe',
    description: 'Stay on track with your medications using our free medication reminder tool. Set custom alerts, track doses, and get notifications to ensure you never miss taking your prescribed medications.',
    url: 'https://marwariluxe.com/tools/health/medication-reminder',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Medication Reminder Tool | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Medication Reminder - Never Miss a Dose | Marwari Luxe',
    description: 'Stay on track with your medications using our free medication reminder tool. Set custom alerts and track doses to ensure you never miss taking your prescribed medications.',
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
    canonical: 'https://marwariluxe.com/tools/health/medication-reminder',
  },
};

export default function MedicationReminderLayout({
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