import Link from 'next/link';
import type { Metadata } from 'next';

// Adding metadata for the categories page - moved outside the client component
export const metadata: Metadata = {
  title: 'Shop by Category | Health, Wellness & Beauty Products | Marwari Luxe',
  description: 'Browse our premium products organized by category. Find health supplements, wellness tools, luxury skincare, and beauty essentials. Shop with worldwide shipping to Canada, UK, Australia, and Europe.',
  keywords: ['shop by category', 'health products', 'wellness products', 'beauty products', 'luxury skincare', 'natural supplements', 'organic beauty', 'wellness essentials', 'beauty essentials', 'health supplements'],
  openGraph: {
    title: 'Shop by Category | Health, Wellness & Beauty Products | Marwari Luxe',
    description: 'Browse our premium products organized by category. Find health supplements, wellness tools, luxury skincare, and beauty essentials.',
    url: 'https://marwariluxe.com/categories',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Shop by Category',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop by Category | Health, Wellness & Beauty Products | Marwari Luxe',
    description: 'Browse our premium products organized by category. Find health supplements, wellness tools, luxury skincare, and beauty essentials.',
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
    canonical: 'https://marwariluxe.com/categories',
  },
};

// Client component starts here
export default function CategoriesPage() {
  // Enhanced categories data with descriptions and unique features
  const categories = [
    {
      id: 1,
      name: 'Health & Wellness',
      description: 'Premium supplements, health tools, and wellness resources for optimal vitality and longevity.',
      icon: '💊',
      path: '/categories/health-wellness',
      color: 'from-blue-500 to-purple-600',
      itemCount: '250+ products',
      features: ['Personalized Plans', 'Health Tracking', 'Expert Consultations'],
    },
    {
      id: 2,
      name: 'Beauty & Cosmetics',
      description: 'Luxury skincare, makeup, and beauty tools for radiant skin and confidence.',
      icon: '💄',
      path: '/categories/beauty-cosmetics',
      color: 'from-pink-500 to-rose-600',
      itemCount: '180+ products',
      features: ['Skin Analysis', 'Custom Formulations', 'Beauty Tech'],
    },
    {
      id: 3,
      name: 'General Tools & Utilities',
      description: 'Essential productivity tools, converters, and utilities for everyday efficiency.',
      icon: '🔧',
      path: '/categories/general',
      color: 'from-cyan-500 to-blue-600',
      itemCount: '50+ tools',
      features: ['Free to Use', 'No Registration', 'Regular Updates'],
    },
  ];

  // Enhanced category statistics
  const categoryStats = [
    {
      value: "500+",
      label: "Premium products across all categories",
      icon: "📦",
    },
    {
      value: "50+",
      label: "Specialized tools for enhanced productivity",
      icon: "⚙️",
    },
    {
      value: "99%",
      label: "Customer satisfaction rate",
      icon: "😊",
    },
    {
      value: "24/7",
      label: "Support availability",
      icon: "🕒",
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Explore Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Premium Collections</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
              Discover carefully curated selections of luxury products, advanced tools, and expert resources 
              designed to elevate every aspect of your lifestyle.
            </p>
            
            {/* Category Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {categoryStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={category.path}
                className="group rounded-2xl overflow-hidden hover-lift animate-slide-up border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 ${category.color} bg-gradient-to-r`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`text-4xl mr-4 ${category.color.includes('blue') ? 'text-blue-500' : category.color.includes('pink') ? 'text-pink-500' : 'text-cyan-500'}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-sm text-foreground/60">{category.itemCount}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    className={`w-full py-3 bg-gradient-to-r ${category.color} text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300`}
                  >
                    Explore Collection
                  </button>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Category Insights */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Our Categories Stand Out</h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Each category represents years of research, expert curation, and relentless pursuit of excellence. 
                We don't just sell products - we provide comprehensive ecosystems that empower your journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="text-3xl mb-4">🔬</div>
                  <h3 className="font-bold text-xl mb-3">Expert Curated</h3>
                  <p className="opacity-90">Every item selected by industry professionals and verified for quality</p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="text-3xl mb-4">🔄</div>
                  <h3 className="font-bold text-xl mb-3">Continuously Updated</h3>
                  <p className="opacity-90">Regular additions of cutting-edge products and tools based on trends</p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h3 className="font-bold text-xl mb-3">Quality Guaranteed</h3>
                  <p className="opacity-90">Rigorous testing and quality assurance for every product and tool</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Explore?</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Begin your journey with our premium collections and discover products and tools designed for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/categories/health-wellness" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start with Health & Wellness
              </Link>
              <Link 
                href="/categories" 
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}