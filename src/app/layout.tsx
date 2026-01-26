import type { Metadata } from "next";
import "./globals.css";
import { seoConfig } from "../config/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
        
        {/* Organization Schema for Google Logo Display */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Marwari Luxe",
              "url": "https://marwariluxe.com",
              "logo": "https://marwariluxe.com/marwari%20logo.png",
              "sameAs": [
                "https://www.facebook.com/marwariluxe",
                "https://www.instagram.com/marwariluxe",
                "https://twitter.com/marwariluxe",
                "https://www.pinterest.com/marwariluxe",
                "https://www.youtube.com/marwariluxe"
              ],
              "description": "Premium luxury health, beauty, wellness, tools, and blogs platform"
            })
          }}
        />
        
        {/* Website Schema for Search Action */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Marwari Luxe",
              "url": "https://marwariluxe.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://marwariluxe.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`antialiased`}
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