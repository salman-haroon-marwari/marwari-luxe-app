'use client';

import Link from 'next/link';

const BeautyToolsSection = () => {
  // Beauty tools data
  const beautyTools = [
    {
      id: 'skincare-routine',
      title: 'Skincare Routine Builder',
      description: 'Create your personalized skincare routine based on your skin type and concerns',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867399/hpd-1_hk8fvr.jpg',
      category: 'Skincare',
      date: '2025',
      href: '/tools/beauty/skincare-routine'
    },
    {
      id: 'skin-analyzer',
      title: 'AI Skin Analyzer',
      description: 'Analyze your skin condition and get personalized recommendations',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867399/hpd-2_hk8fvr.jpg',
      category: 'Analysis',
      date: '2025',
      href: '/tools/beauty/skin-analyzer'
    },
    {
      id: 'makeup-shade-finder',
      title: 'Makeup Shade Finder',
      description: 'Find your perfect makeup match with our shade matching tool',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867399/hpd-3_hk8fvr.jpg',
      category: 'Makeup',
      date: '2025',
      href: '/tools/beauty/makeup-shade-finder'
    },
    {
      id: 'hair-care-calculator',
      title: 'Hair Care Calculator',
      description: 'Get personalized hair care recommendations based on your hair type',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867399/hpd-4_hk8fvr.jpg',
      category: 'Hair Care',
      date: '2025',
      href: '/tools/beauty/hair-care'
    },
    {
      id: 'ingredient-checker',
      title: 'Ingredient Checker',
      description: 'Check product ingredients for allergies and skin compatibility',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867399/hpd-5_hk8fvr.jpg',
      category: 'Safety',
      date: '2025',
      href: '/tools/beauty/ingredient-checker'
    },
    {
      id: 'virtual-makeup',
      title: 'Virtual Makeup',
      description: 'Try makeup looks virtually before purchasing products',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867399/hpd-6_hk8fvr.jpg',
      category: 'Virtual Try-On',
      date: '2025',
      href: '/tools/beauty/virtual-makeup'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Beauty Tools</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our collection of beauty tools and calculators
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beautyTools.map((tool) => (
            <Link 
              key={tool.id} 
              href={tool.href}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <img 
                    src={tool.image} 
                    alt={tool.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{tool.title}</h3>
                <p className="text-foreground/80 mb-4 flex-grow">{tool.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-foreground/60">{tool.date}</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full">
                    {tool.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/tools/beauty" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 hover-lift focus-ring"
          >
            View All Beauty Tools
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeautyToolsSection;