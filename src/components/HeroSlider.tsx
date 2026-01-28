'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
}

const HeroSliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  
  const router = useRouter();

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
      link: '/blog',
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
    console.log('HeroSlider mounted');
    setIsClient(true);
    
    const interval = setInterval(() => {
      console.log('Auto advancing slide');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => {
      console.log('Cleaning up interval');
      clearInterval(interval);
    };
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isClient) {
    return (
      <div className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="h-10 bg-white/20 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded w-96 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];
  
  const handleImageError = (slideId: number) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };
  
  const getImageSrc = (slide: typeof slides[number]) => {
    if (imageErrors[slide.id]) {
      // Return a fallback image if the main image fails to load
      return '/marwari logo.png';
    }
    return slide.image;
  };

  return (
    <div className="relative w-full h-[50vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getImageSrc(currentSlideData)}
          alt={currentSlideData.title}
          fill
          priority
          className="object-cover transition-opacity duration-1000"
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZGRkIi8+PC9zdmc+"
          onLoadingComplete={(result) => {
            console.log('Image loaded successfully:', currentSlideData.image);
            console.log('Load result:', result);
          }}
          onError={(error) => {
            console.error('Image failed to load:', error, currentSlideData.image);
            handleImageError(currentSlideData.id);
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {currentSlideData.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-2 leading-relaxed">
            {currentSlideData.subtitle}
          </p>
          <div>
            {currentSlideData.link ? (
              <Link
                href={currentSlideData.link}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block backdrop-blur-sm border border-white/30 hover:shadow-lg"
              >
                {currentSlideData.cta}
              </Link>
            ) : (
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block backdrop-blur-sm border border-white/30 hover:shadow-lg">
                {currentSlideData.cta}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 transition-all duration-300 z-20 p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 transition-all duration-300 z-20 p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSlider = memo(HeroSliderComponent);

export default HeroSlider;

HeroSlider.displayName = 'HeroSlider';