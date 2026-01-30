'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blogs' },
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
  const [categoriesCloseTimer, setCategoriesCloseTimer] = useState<NodeJS.Timeout | null>(null);
  const [toolsCloseTimer, setToolsCloseTimer] = useState<NodeJS.Timeout | null>(null);
  
  // Debug logs
  console.log('=== NAVIGATION STATE ===');
  console.log('isCategoriesOpen:', isCategoriesOpen);
  console.log('isToolsOpen:', isToolsOpen);
  console.log('isMobile:', isMobile);
  console.log('========================');
  
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
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Check if click is outside categories dropdown
      if (!target.closest('.categories-dropdown')) {
        setIsCategoriesOpen(false);
      }
      
      // Check if click is outside tools dropdown
      if (!target.closest('.tools-dropdown')) {
        setIsToolsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-[50] transition-all duration-300 ${
        scrolled || isMobile ? 'bg-white/90 backdrop-blur-sm py-4 shadow-lg' : 'bg-white/90 backdrop-blur-sm py-6 shadow-xl'
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
            <span className="text-4xl font-bold text-gray-900">
              Marwari Luxe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {/* Home Link */}
            <Link
              href="/"
              className="font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
            >
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div 
              className={`relative categories-dropdown ${isCategoriesOpen ? 'bg-yellow-100' : ''}`}
              data-open={isCategoriesOpen}
              onMouseEnter={() => {
                console.log('Mouse entered categories');
                if (categoriesCloseTimer) {
                  clearTimeout(categoriesCloseTimer);
                  setCategoriesCloseTimer(null);
                }
                if (!isMobile) setIsCategoriesOpen(true);
              }}
              onMouseLeave={() => {
                console.log('Mouse left categories');
                if (!isMobile) {
                  const timer = setTimeout(() => {
                    setIsCategoriesOpen(false);
                    setCategoriesCloseTimer(null);
                  }, 300);
                  setCategoriesCloseTimer(timer);
                }
              }}
            >
              <button
                className="font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300 flex items-center cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Categories button clicked');
                  setIsCategoriesOpen(!isCategoriesOpen);
                }}
                aria-haspopup="true"
                aria-expanded={isCategoriesOpen}
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
                  className="dropdown-menu absolute left-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-2xl py-2 z-50 border border-gray-200 dark:border-gray-700 min-w-max animate-fadeIn"
                >
                  <Link 
                    href="/categories/health-wellness"
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 whitespace-nowrap font-medium"
                    onClick={() => {
                      setIsCategoriesOpen(false);
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Health & Wellness
                  </Link>
                  <Link 
                    href="/categories/beauty-cosmetics"
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 whitespace-nowrap font-medium"
                    onClick={() => {
                      setIsCategoriesOpen(false);
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Beauty & Cosmetics
                  </Link>
                </div>
              )}
            </div>
            
            {/* Tools Dropdown */}
            <div 
              className={`relative tools-dropdown ${isToolsOpen ? 'bg-yellow-100' : ''}`}
              data-open={isToolsOpen}
              onMouseEnter={() => {
                console.log('Mouse entered tools');
                if (toolsCloseTimer) {
                  clearTimeout(toolsCloseTimer);
                  setToolsCloseTimer(null);
                }
                if (!isMobile) setIsToolsOpen(true);
              }}
              onMouseLeave={() => {
                console.log('Mouse left tools');
                if (!isMobile) {
                  const timer = setTimeout(() => {
                    setIsToolsOpen(false);
                    setToolsCloseTimer(null);
                  }, 300);
                  setToolsCloseTimer(timer);
                }
              }}
            >
              <button
                className="font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300 flex items-center cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Tools button clicked');
                  setIsToolsOpen(!isToolsOpen);
                }}
                aria-haspopup="true"
                aria-expanded={isToolsOpen}
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
                  className="dropdown-menu absolute left-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-2xl py-2 z-50 border border-gray-200 dark:border-gray-700 min-w-max animate-fadeIn"
                >
                  <Link 
                    href="/tools/health"
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 whitespace-nowrap font-medium"
                    onClick={() => {
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Health Tools
                  </Link>
                  <Link 
                    href="/tools/beauty"
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 whitespace-nowrap font-medium"
                    onClick={() => {
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Beauty Tools
                  </Link>
                  <Link 
                    href="/tools/general"
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 whitespace-nowrap font-medium"
                    onClick={() => {
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    General Tools
                  </Link>
                </div>
              )}
            </div>
            
            {/* Blog Link */}
            <Link
              href="/blogs"
              className="font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
            >
              Blogs
            </Link>
            
            {/* Author Link */}
            <Link
              href="/author"
              className="font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
            >
              Author
            </Link>
            
            {/* Contact Link */}
            <Link
              href="/contact"
              className="font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
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
              <span className={`block w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-mt-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-white rounded-sm mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'mt-1'}`}></span>
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
              className="block py-3 font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
              onClick={() => {
                setIsMenuOpen(false);
                setIsCategoriesOpen(false);
                setIsToolsOpen(false);
              }}
              role="menuitem"
            >
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="py-2">
              <button
                className="flex justify-between items-center w-full py-3 font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
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
              
              <div className={`overflow-hidden transition-all duration-300 ${isCategoriesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 mt-2 space-y-2 bg-white/90 dark:bg-black/90 rounded-lg p-2" role="menu">
                  <Link 
                    href="/categories/health-wellness"
                    className="block py-2 text-gray-800 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap"
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
                    className="block py-2 text-gray-800 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap"
                    onClick={() => {
                      setIsCategoriesOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    Beauty & Cosmetics
                  </Link>
                </div>
              </div>
            </div>
            

            

            
            {/* Tools Dropdown */}
            <div className="py-2">
              <button
                className="flex justify-between items-center w-full py-3 font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
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
              
              <div className={`overflow-hidden transition-all duration-300 ${isToolsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 mt-2 space-y-2 bg-white/90 dark:bg-black/90 rounded-lg p-2" role="menu">
                  <Link 
                    href="/tools/health"
                    className="block py-2 text-gray-800 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap"
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
                    className="block py-2 text-gray-800 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap"
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
                    className="block py-2 text-gray-800 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap"
                    onClick={() => {
                      setIsToolsOpen(false);
                      setIsMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    General Tools
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Blog Link */}
            <Link
              href="/blogs"
              className="block py-3 font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Blogs
            </Link>
            
            {/* Author Link */}
            <Link
              href="/author"
              className="block py-3 font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Author
            </Link>
            
            {/* Contact Link */}
            <Link
              href="/contact"
              className="block py-3 font-semibold text-lg text-gray-900 hover:text-purple-600 transition-colors duration-300"
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