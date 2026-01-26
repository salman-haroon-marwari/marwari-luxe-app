'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Premium Health Supplements & Wellness Products',
      subtitle: 'Discover scientifically-backed vitamins, minerals & supplements that transform your daily wellness routine. Shop 25+ premium products.',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_1600,dpr_auto,c_fill,g_auto/v1762817015/1_pllyfb.png',
      cta: 'Shop Health Supplements',
      link: '/products',
    },
    {
      id: 2,
      title: 'Natural Anti-Aging Beauty Solutions',
      subtitle: 'Embrace your natural glow with our expert-curated collection of organic skincare, anti-aging serums & cruelty-free beauty essentials.',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_1600,dpr_auto,c_fill,g_auto/v1762817052/2_gnrg7c.png',
      cta: 'Explore Natural Beauty',
      link: '/categories/beauty',
    },
    {
      id: 3,
      title: 'Health Calculators & Wellness Tools',
      subtitle: 'Access 25+ powerful health calculators, BMI tools & fitness trackers to optimize your wellness journey with data-driven insights.',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_1600,dpr_auto,c_fill,g_auto/v1762817080/5_gifuma.png',
      cta: 'Try Wellness Tools',
      link: '/tools',
    },
    {
      id: 4,
      title: 'Expert Health & Beauty Insights Blog',
      subtitle: 'Read science-backed health advice, beauty tips & wellness guides from certified experts. 30+ comprehensive articles updated regularly.',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_1600,dpr_auto,c_fill,g_auto/v1762817098/3_x5umfy.png',
      cta: 'Read Expert Blogs',
      link: '/blogs',
    },
    {
      id: 5,
      title: 'Marwari Heritage Meets Modern Wellness',
      subtitle: 'Experience timeless Ayurvedic wisdom combined with cutting-edge health innovation. Discover our heritage-inspired wellness philosophy.',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_1600,dpr_auto,c_fill,g_auto/v1762816783/4_seitcm.png',
      cta: 'Discover Our Story',
      link: '/about',
    },
  ];

  useEffect(() => {
    setIsHydrated(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Fix: Only render floating animation elements on client after mount
  const [floatingPositions, setFloatingPositions] = useState<{left: number; top: number; duration: number; delay: number}[]>([]);

  // Generate deterministic positions based on slide index to avoid hydration mismatches
  const generateFloatingPositions = (seed: number) => {
    // Simple seeded random number generator
    let seedValue = seed;
    const seededRandom = () => {
      seedValue = (seedValue * 9301 + 49297) % 233280;
      return seedValue / 233280;
    };

    return Array.from({ length: 6 }).map((_, i) => ({
      left: seededRandom() * 100,
      top: seededRandom() * 100,
      duration: 3 + seededRandom() * 2,
      delay: seededRandom() * 2,
    }));
  };

  useEffect(() => {
    if (isHydrated) {
      // Use currentSlide as seed for deterministic positions
      const positions = generateFloatingPositions(currentSlide);
      setFloatingPositions(positions);
    }
  }, [isHydrated, currentSlide]);

  // SVG Icons
  const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  // Get current slide with defensive checks
  const currentSlideData = slides[currentSlide] || slides[0];

  // Fix for image sizing - ensure full screen display with mobile optimization
  return (
    <div className="relative w-full overflow-hidden border-0 md:border pt-[10px] md:pt-0 h-[50vh] md:h-screen w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={currentSlideData.image || ''}
          alt={currentSlideData.title || ''}
          fill
          priority={currentSlide === 0} // Ensure first slide is prioritized
          className="object-cover w-full h-full"
          sizes="100vw"
          quality={85}
          fetchPriority={currentSlide === 0 ? "high" : "auto"} // Add fetchpriority for LCP optimization
          // Optimize image delivery
          loading="eager"
          // Add blur placeholder for better perceived performance
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          // Add decoding hint for better performance
          decoding="async"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Mobile-specific version with border only */}
      <div className="absolute inset-0 border-2 border-gray-300 rounded-lg md:hidden pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white w-full mx-auto pt-4 md:pt-0">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 mobile-text-3xl">
            {currentSlideData.title || ''}
          </h1>
          <p className="text-lg sm:text-lg md:text-xl mb-4 sm:mb-6 text-gray-200 mobile-text-lg px-2">
            {currentSlideData.subtitle || ''}
          </p>
          <div className="">
            {currentSlideData.link ? (
              <Link
                href={currentSlideData.link}
                className="mobile-btn bg-white/20 hover:bg-white/30 text-white px-6 sm:px-6 py-3 sm:py-3 rounded-lg text-lg sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block backdrop-blur-sm border border-white/30"
              >
                {currentSlideData.cta || 'Learn More'}
              </Link>
            ) : (
              <button className="mobile-btn bg-white/20 hover:bg-white/30 text-white px-6 sm:px-6 py-3 sm:py-3 rounded-lg text-lg sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block backdrop-blur-sm border border-white/30">
                {currentSlideData.cta || 'Learn More'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Kept but without purple color */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 transition-colors z-20 p-2 sm:p-3 rounded-full bg-black/20 backdrop-blur-sm touch-target"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 transition-colors z-20 p-2 sm:p-3 rounded-full bg-black/20 backdrop-blur-sm touch-target"
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </button>

      {/* Floating Animation Elements (client-only) */}
      {isHydrated && floatingPositions.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={`slide-indicator-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;