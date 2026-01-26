'use client';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function BeautyToolsPage() {
  // Enhanced tools data with unique features and NEW badges
  const tools = [
    {
      id: 1,
      name: 'Skin Analysis Scanner',
      description: 'Advanced complexion analysis with personalized skincare recommendations based on your unique skin profile.',
      icon: '/tool-icons/skin-type.svg',
      path: '/tools/beauty/skin-analyzer',
      color: 'from-pink-600 to-rose-700',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30',
      isNew: true,
      features: ['Pore Mapping', 'Texture Analysis', 'Moisture Levels'],
    },
    {
      id: 2,
      name: 'Makeup Color Matcher',
      description: 'Find your perfect foundation shade and complementary colors using advanced color recognition technology.',
      icon: '/tool-icons/makeup-shade.svg',
      path: '/tools/beauty/makeup-shade-finder',
      color: 'from-purple-600 to-fuchsia-700',
      bgColor: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/30',
      isNew: true,
      features: ['Shade Matching', 'Seasonal Palettes', 'Brand Recommendations'],
    },
    {
      id: 3,
      name: 'Skincare Routine Builder',
      description: 'Create a customized skincare routine based on your specific needs and concerns.',
      icon: '/tool-icons/skincare-routine.svg',
      path: '/tools/beauty/skincare-routine',
      color: 'from-emerald-600 to-green-700',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30',
      isNew: false,
      features: ['Concern Targeting', 'Seasonal Adjustments', 'Progress Tracking'],
    },
    {
      id: 4,
      name: 'Beauty Product Comparator',
      description: 'Compare different beauty products to find the best options for your skin type and budget.',
      icon: '/tool-icons/product-comparator.svg',
      path: '/tools/beauty/product-comparator',
      color: 'from-amber-600 to-orange-700',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30',
      isNew: true,
      features: ['Ingredient Analysis', 'Price Comparison', 'Review Aggregation'],
    },
    {
      id: 5,
      name: 'Hair Care Advisor',
      description: 'Get personalized hair care recommendations based on your hair type, concerns, and styling habits.',
      icon: '/tool-icons/haircare.svg',
      path: '/tools/beauty/hair-care',
      color: 'from-violet-600 to-purple-700',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30',
      isNew: false,
      features: ['Scalp Analysis', 'Routine Builder', 'Product Matching'],
    },
    {
      id: 6,
      name: 'Nail Design Studio',
      description: 'Design and visualize nail art ideas with our virtual studio and trend recommendations.',
      icon: '/tool-icons/nail-care.svg',
      path: '/tools/beauty/nail-design',
      color: 'from-yellow-600 to-amber-700',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30',
      isNew: true,
      features: ['Trend Library', 'Virtual Try-On', 'Tutorial Guides'],
    },
    {
      id: 7,
      name: 'Virtual Makeup Try-On',
      description: 'Try different makeup looks virtually before purchasing products with AR technology.',
      icon: '/tool-icons/makeup-try-on.svg',
      path: '/tools/beauty/virtual-makeup',
      color: 'from-rose-600 to-pink-700',
      bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30',
      isNew: true,
      features: ['AR Technology', 'Look Library', 'Product Links'],
    },
    {
      id: 8,
      name: 'Skincare Quiz Master',
      description: 'Take our comprehensive quiz to discover the best skincare products for your specific concerns.',
      icon: '/tool-icons/skincare-quiz.svg',
      path: '/tools/beauty/skincare-quiz',
      color: 'from-green-600 to-emerald-700',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30',
      isNew: false,
      features: ['Concern Diagnosis', 'Product Matching', 'Routine Suggestions'],
    },
    {
      id: 9,
      name: 'Beauty Calendar Pro',
      description: 'Plan and track your beauty treatments, appointments, and product usage schedules.',
      icon: '/tool-icons/beauty-calendar.svg',
      path: '/tools/beauty/beauty-calendar',
      color: 'from-indigo-600 to-purple-700',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30',
      isNew: true,
      features: ['Treatment Planning', 'Reminders', 'Progress Photos'],
    },
    {
      id: 10,
      name: 'Ingredient Safety Checker',
      description: 'Check product ingredients for allergens, harmful substances, and comedogenic ratings.',
      icon: '/tool-icons/ingredient-checker.svg',
      path: '/tools/beauty/ingredient-checker',
      color: 'from-orange-600 to-amber-700',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30',
      isNew: true,
      features: ['Allergen Alerts', 'Safety Ratings', 'Alternative Suggestions'],
    },
  ];

  // Enhanced beauty tips data
  const beautyTips = [
    {
      id: 1,
      title: "Customize Your Skincare",
      description: "Tailor your routine to your specific skin type and concerns. What works for others may not work for you. Patch test new products and introduce them gradually.",
      icon: "✨",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      name: "Embrace Sun Protection",
      description: "Apply broad-spectrum SPF 30+ daily, even indoors. UV rays penetrate windows and cause premature aging. Reapply every 2 hours during sun exposure.",
      icon: "☀️",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 3,
      title: "Invest in Quality Tools",
      description: "Quality brushes, derma rollers, and cleansing devices enhance product effectiveness. Clean tools regularly to prevent breakouts and maintain hygiene.",
      icon: "🖌️",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      id: 4,
      title: "Listen to Your Skin",
      description: "Pay attention to how your skin responds to products and environmental factors. Adjust your routine seasonally and when your skin's needs change.",
      icon: "👂",
      color: "from-emerald-500 to-green-500",
    },
  ];

  // Enhanced beauty statistics
  const beautyStats = [
    {
      value: "78%",
      label: "of users report increased confidence with consistent skincare",
      icon: "✨",
    },
    {
      value: "3.5x",
      label: "faster results with personalized beauty regimens",
      icon: "📈",
    },
    {
      value: "92%",
      label: "of individuals see improvement with proper sun protection",
      icon: "☀️",
    },
    {
      value: "45 min",
      label: "average daily time saved with beauty routine automation",
      icon: "⏱️",
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section with Enhanced Content */}
          <div className="mb-16 animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 opacity-90"></div>
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    Luxury Beauty Experience
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Unlock Your <span className="bg-gradient-to-r from-pink-300 to-purple-200 bg-clip-text text-transparent">Natural Radiance</span> With Science
                  </h1>
                  <p className="text-xl mb-8 max-w-3xl opacity-90 leading-relaxed">
                    Discover the perfect fusion of luxury ingredients and cutting-edge beauty technology. 
                    Our curated collection empowers you to achieve flawless skin, stunning hair, and unwavering confidence.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#tools" 
                      className="px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Beauty Tools
                    </a>
                    <a 
                      href="#tips" 
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Beauty Tips
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Beauty Statistics with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {beautyStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Tools Grid with NEW Badges and Features */}
          <section id="tools" className="mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Advanced Beauty Tools</h2>
                <p className="text-foreground/70 max-w-2xl">Personalized solutions for your unique beauty journey</p>
              </div>
              <a href="/categories/beauty-cosmetics" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Explore Beauty Products
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <a 
                  key={tool.id} 
                  href={tool.path}
                  className={`${tool.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700`}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`rounded-xl p-3 shadow-md bg-gradient-to-br ${tool.color}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-lg w-10 h-10 flex items-center justify-center">
                          <img 
                            src={tool.icon} 
                            alt={tool.name} 
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      </div>
                      {tool.isNew && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{tool.name}</h3>
                    <p className="text-foreground/80 mb-4 flex-grow">{tool.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-white/50 dark:bg-gray-700/50 text-foreground/80 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      className={`px-4 py-2 bg-gradient-to-r ${tool.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium`}
                    >
                      Launch Tool
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </section>
          
          {/* Enhanced Beauty Tips Section */}
          <section id="tips" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Expert Beauty Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beautyTips.map((tip) => (
                <div key={tip.id} className="bg-gradient-to-br rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center text-xl mr-4`}>
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-foreground/80">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Enhanced Beauty Quote */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-bold mb-6">
                "Beauty begins the moment you decide to be yourself. True beauty radiates from within and is enhanced by intelligent, clean formulations."
              </blockquote>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <cite className="text-lg">- Coco Chanel</cite>
                <div className="hidden md:block w-1 h-6 bg-white/30 rounded-full"></div>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Beauty Philosophy</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call to Action */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Begin Your Beauty Transformation</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands who have discovered their most radiant selves with our premium beauty tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/tools/beauty/skin-analyzer" 
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Analyze Your Skin
              </a>
              <a 
                href="/tools/beauty/virtual-makeup" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Try Virtual Makeup
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-foreground/70">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>All tools free to use</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>No registration required</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Regular feature updates</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}