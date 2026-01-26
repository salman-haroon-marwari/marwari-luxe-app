'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Author', href: '/author' },
  { name: 'Categories', href: '/categories' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for dropdown timeouts
  const categoriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toolsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Only apply scrolled effect on non-mobile devices
      if (!mobile) {
        setScrolled(window.scrollY > 10);
      } else {
        // On mobile, don't set scrolled state to prevent navbar hiding
        setScrolled(false);
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('scroll', handleResize);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleResize);
      window.removeEventListener('resize', handleResize);
      // Clear timeouts on unmount
      if (categoriesTimeoutRef.current) clearTimeout(categoriesTimeoutRef.current);
      if (toolsTimeoutRef.current) clearTimeout(toolsTimeoutRef.current);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-[50] transition-all duration-300 ${
        scrolled || isMobile ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm py-4 shadow-lg' : 'py-6'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/marwari logo.png"
              alt="Marwari Luxe Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-4xl font-bold text-black">
              Marwari Luxe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {/* Home Link */}
            <Link
              href="/"
              className="font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (categoriesTimeoutRef.current) {
                  clearTimeout(categoriesTimeoutRef.current);
                  categoriesTimeoutRef.current = null;
                }
                setIsCategoriesOpen(true);
              }}
              onMouseLeave={() => {
                categoriesTimeoutRef.current = setTimeout(() => {
                  setIsCategoriesOpen(false);
                }, 300); // 300ms delay before closing
              }}
            >
              <button
                className="font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300 flex items-center"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                Categories
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isCategoriesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-xl py-2 z-[9999] border border-gray-200 dark:border-gray-700 min-w-max"
                  onMouseEnter={() => {
                    if (categoriesTimeoutRef.current) {
                      clearTimeout(categoriesTimeoutRef.current);
                      categoriesTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={() => {
                    categoriesTimeoutRef.current = setTimeout(() => {
                      setIsCategoriesOpen(false);
                    }, 300); // 300ms delay before closing
                  }}
                >
                  <Link 
                    href="/categories/health-wellness"
                    className="block px-4 py-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    Health & Wellness
                  </Link>
                  <Link 
                    href="/categories/beauty-cosmetics"
                    className="block px-4 py-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    Beauty & Cosmetics
                  </Link>
                </div>
              )}
            </div>
            

            

            
            {/* Tools Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (toolsTimeoutRef.current) {
                  clearTimeout(toolsTimeoutRef.current);
                  toolsTimeoutRef.current = null;
                }
                setIsToolsOpen(true);
              }}
              onMouseLeave={() => {
                toolsTimeoutRef.current = setTimeout(() => {
                  setIsToolsOpen(false);
                }, 300); // 300ms delay before closing
              }}
            >
              <button
                className="font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300 flex items-center"
                onClick={() => setIsToolsOpen(!isToolsOpen)}
              >
                Tools
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isToolsOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-xl py-2 z-[9999] border border-gray-200 dark:border-gray-700 min-w-max"
                  onMouseEnter={() => {
                    if (toolsTimeoutRef.current) {
                      clearTimeout(toolsTimeoutRef.current);
                      toolsTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={() => {
                    toolsTimeoutRef.current = setTimeout(() => {
                      setIsToolsOpen(false);
                    }, 300); // 300ms delay before closing
                  }}
                >
                  <Link 
                    href="/tools/health"
                    className="block px-4 py-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
                    onClick={() => setIsToolsOpen(false)}
                  >
                    Health Tools
                  </Link>
                  <Link 
                    href="/tools/beauty"
                    className="block px-4 py-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
                    onClick={() => setIsToolsOpen(false)}
                  >
                    Beauty Tools
                  </Link>
                  <Link 
                    href="/tools/general"
                    className="block px-4 py-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
                    onClick={() => setIsToolsOpen(false)}
                  >
                    General Tools
                  </Link>
                </div>
              )}
            </div>
            
            {/* Blog Link */}
            <Link
              href="/blog"
              className="font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
            >
              Blog
            </Link>
            
            {/* Author Link */}
            <Link
              href="/author"
              className="font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
            >
              Author
            </Link>
            
            {/* Contact Link */}
            <Link
              href="/contact"
              className="font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
            
            {/* Unique Social Media Button */}
            <Link
              href="/social-media"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg 
                className="w-5 h-5 mr-2"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Social Media
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-foreground rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-mt-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground rounded-sm mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'mt-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          aria-label="Mobile Navigation"
          role="navigation"
        >
          <nav className="pb-4" role="menubar">
            {/* Home Link */}
            <Link
              href="/"
              className="block py-3 font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="py-2">
              <button
                className="flex justify-between items-center w-full py-3 font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                aria-expanded={isCategoriesOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                <span>Categories</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="pl-4 mt-2 space-y-2 bg-white/90 dark:bg-black/90 rounded-lg p-2" role="menu">
                  <Link 
                    href="/categories/health-wellness"
                    className="block py-2 text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
                    onClick={() => {
                      setIsCategoriesOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    Health & Wellness
                  </Link>
                  <Link 
                    href="/categories/beauty-cosmetics"
                    className="block py-2 text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
                    onClick={() => {
                      setIsCategoriesOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    Beauty & Cosmetics
                  </Link>
                </div>
              )}
            </div>
            

            

            
            {/* Tools Dropdown */}
            <div className="py-2">
              <button
                className="flex justify-between items-center w-full py-3 font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                aria-expanded={isToolsOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                <span>Tools</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isToolsOpen && (
                <div className="pl-4 mt-2 space-y-2 bg-white/90 dark:bg-black/90 rounded-lg p-2" role="menu">
                  <Link 
                    href="/tools/health"
                    className="block py-2 text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
                    onClick={() => {
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    Health Tools
                  </Link>
                  <Link 
                    href="/tools/beauty"
                    className="block py-2 text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
                    onClick={() => {
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    Beauty Tools
                  </Link>
                  <Link 
                    href="/tools/general"
                    className="block py-2 text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
                    onClick={() => {
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    General Tools
                  </Link>
                </div>
              )}
            </div>
            
            {/* Blog Link */}
            <Link
              href="/blog"
              className="block py-3 font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Blog
            </Link>
            
            {/* Author Link */}
            <Link
              href="/author"
              className="block py-3 font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Author
            </Link>
            
            {/* Contact Link */}
            <Link
              href="/contact"
              className="block py-3 font-semibold text-lg text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Contact
            </Link>
            
            {/* Mobile Social Media Button */}
            <Link
              href="/social-media"
              className="flex items-center px-4 py-2 my-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              <svg 
                className="w-5 h-5 mr-2"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Social Media
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}