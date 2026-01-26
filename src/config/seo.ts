// SEO Configuration for Marwari Luxe
export const siteConfig = {
  name: "Marwari Luxe",
  description: "Premium health, wellness, and beauty platform with tools and resources for a luxurious lifestyle. Available worldwide including Canada, UK, Australia, and Europe.",
  url: "https://marwariluxe.com",
  ogImage: "https://marwariluxe.com/marwari%20logo.png",
  links: {
    twitter: "https://twitter.com/marwariluxe",
    instagram: "https://instagram.com/marwariluxe",
    facebook: "https://facebook.com/marwariluxe",
  },
};

export const seoConfig = {
  metadataBase: new URL("https://marwariluxe.com"),
  title: {
    default: "Marwari Luxe - Premium Health, Wellness & Beauty Platform | Worldwide Resources",
    template: "%s | Marwari Luxe",
  },
  description: siteConfig.description,
  keywords: [
    "health",
    "wellness",
    "beauty",
    "luxury skincare",
    "wellness lifestyle",
    "organic beauty",
    "international shipping",
    "worldwide delivery",
    "global wellness",
    "cosmetics canada",
    "wellness tools",
    "beauty resources",
    "wellness europe"
  ],
  authors: [
    {
      name: "Marwari Luxe",
      url: "https://marwariluxe.com",
    },
  ],
  creator: "Marwari Luxe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@marwariluxe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE",
    yandex: "",
  },
};

// Content Security Policy for AdSense compatibility
export const cspConfig = {
  directives: {
    "script-src": [
      "'self'",
      "'unsafe-inline'",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://pagead2.googlesyndication.com",
      "https://www.googletagservices.com",
      "https://adservice.google.com",
      "https://securepubads.g.doubleclick.net"
    ],
    "img-src": [
      "'self'",
      "data:",
      "https:",
      "https://res.cloudinary.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://stats.g.doubleclick.net"
    ],
    "frame-src": [
      "'self'",
      "https://www.googletagmanager.com",
      "https://googleads.g.doubleclick.net",
      "https://bid.g.doubleclick.net"
    ],
    "connect-src": [
      "'self'",
      "https://www.google-analytics.com",
      "https://res.cloudinary.com",
      "https://stats.g.doubleclick.net"
    ],
    "style-src": [
      "'self'",
      "'unsafe-inline'"
    ],
    "font-src": [
      "'self'",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com"
    ]
  }
};

// Structured Data Configuration
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marwari Luxe",
    "url": "https://marwariluxe.com",
    "logo": "https://marwariluxe.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/marwariluxe",
      "https://www.instagram.com/marwariluxe",
      "https://www.twitter.com/marwariluxe"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "Country",
        "name": "Italy"
      },
      {
        "@type": "Country",
        "name": "Spain"
      }
    ]
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Marwari Luxe",
    "url": "https://marwariluxe.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://marwariluxe.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
};