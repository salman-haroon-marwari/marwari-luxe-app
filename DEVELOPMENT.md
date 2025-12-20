# Marwari Luxe Development Documentation

## Project Overview

This is a premium e-commerce platform for health, wellness, and beauty products built with Next.js 16, React 19, and TypeScript.

## Tech Stack

- **Framework**: Next.js 16.0.8 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Image Management**: Cloudinary integration via `next-cloudinary`
- **Analytics & Ads**: Google Analytics, Google Tag Manager, and AdSense ready

## Project Structure

```
marwari-luxe-app/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── api/             # API routes
│   │   ├── categories/      # Category pages
│   │   ├── products/        # Product pages
│   │   ├── blogs/           # Blog pages
│   │   ├── tools/           # Tool pages
│   │   ├── contact/         # Contact page
│   │   ├── social-media/    # Social media page
│   │   ├── legal/           # Legal pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── not-found.tsx    # 404 page
│   ├── components/          # Reusable components
│   └── styles/              # Global styles
├── public/                  # Static assets
├── scripts/                 # Utility scripts
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Features Implemented

### 1. Responsive Navigation
- Mobile-first design with hamburger menu
- Smooth scrolling and sticky header
- Animated transitions

### 2. Animated UI Components
- Fade-in animations for content
- Slide-up animations with delays
- Hover effects with lift and shadow transitions
- Pulse animations for interactive elements

### 3. Color Scheme
- Primary: SaddleBrown (#8B4513)
- Secondary: Goldenrod (#DAA520)
- Accent: Tomato (#FF6347)
- Neutral: Light Gray (#F5F5F5)
- Dark: Nearly Black (#1A1A1A)

### 4. Typography
- Geist font family from Google Fonts
- Responsive font sizing
- Clear hierarchy with bold headings

### 5. Page Structure
All pages include:
- Consistent navigation header
- Main content area
- Comprehensive footer
- Proper metadata for SEO

## Custom Components

### Navigation
Located at `src/components/Navigation.tsx`
- Responsive design (mobile hamburger menu)
- Scroll-aware styling
- Smooth animations

### Footer
Located at `src/components/Footer.tsx`
- Multi-column layout
- Social media links
- Legal document links
- Copyright information

### CloudinaryImage
Located at `src/components/CloudinaryImage.tsx`
- Optimized image loading
- Automatic format and quality detection
- Responsive sizing

## Environment Variables

The following environment variables are configured:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_ADSENSE_CLIENT_ID=
```

## Scripts

Utility scripts located in the `scripts/` directory:

1. `generate-sitemap.js` - Generates dynamic sitemap.xml
2. `check-broken-links.js` - Validates internal links
3. `optimize-images.js` - Processes and optimizes images

## SEO Implementation

- Dynamic metadata for each page
- Canonical URLs
- Robots.txt configuration
- Sitemap.xml generation
- Semantic HTML structure
- Proper heading hierarchy

## Performance Optimizations

- Lazy loading for below-fold content
- Preconnect to Cloudinary and font providers
- Minimal JavaScript bundle
- Optimized CSS with Tailwind
- Image optimization through Cloudinary

## Deployment

The project is configured for Vercel deployment with:
- Proper Cloudinary remotePatterns configuration
- Metadata base URL setup
- Clean routing
- Vercel-compatible image loader

## SEO Implementation

- Comprehensive metadata configuration
- Structured data markup for rich snippets
- XML sitemap generation
- robots.txt optimization
- Content Security Policy for AdSense compatibility
- Performance optimization for Core Web Vitals

## Next Steps

1. Implement actual blog content (30 full blogs)
2. Create product listings (50 products)
3. Develop interactive tools (30 tools)
4. Upload images to Cloudinary
5. Configure analytics and ads
6. Final testing and optimization