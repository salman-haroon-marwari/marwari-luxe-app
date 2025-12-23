import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seoConfig } from "../config/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: seoConfig.title.default,
  description: seoConfig.description,
  metadataBase: seoConfig.metadataBase,
  alternates: {
    canonical: '/',
  },
  robots: seoConfig.robots,
  keywords: seoConfig.keywords,
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  verification: seoConfig.verification,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <meta name="google-site-verification" content="dzryDgptB67-84_p9NLWotI6TuhQYJC-xqTiEZsrPX0" />
        <meta name="google-adsense-account" content="ca-pub-3211943691118692" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWM9JZ6R');
          `,
        }} />
        {/* End Google Tag Manager */}
        {/* Google Analytics Verification for Search Console */}
        <script 
          async 
          src={`https://www.googletagmanager.com/gtag/js?id=G-HZ9NPP86JZ`}>
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HZ9NPP86JZ');
            `,
          }}
        />
        {/* End Google Analytics Verification */}
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3211943691118692"
          crossOrigin="anonymous"
        />
        {/* Google AdSense Auto Ads for better international targeting */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3211943691118692"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWM9JZ6R"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}