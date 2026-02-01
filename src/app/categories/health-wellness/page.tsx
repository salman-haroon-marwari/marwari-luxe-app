import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { blogPosts } from '../../../data/blogs';



export const metadata = {
  title: 'Health & Wellness Products | Premium Supplements & Tools | Marwari Luxe',
  description: 'Explore our premium health and wellness products including natural supplements, vitamins, and advanced health tools. Enhance your wellbeing with scientifically-backed solutions for energy, immunity, and longevity.',
  keywords: ['health products', 'wellness supplements', 'natural vitamins', 'immune support', 'energy boosters', 'longevity supplements', 'health tools', 'wellness essentials'],
  openGraph: {
    title: 'Health & Wellness Products | Premium Supplements & Tools | Marwari Luxe',
    description: 'Explore our premium health and wellness products including natural supplements, vitamins, and advanced health tools for optimal wellbeing.',
    url: 'https://marwariluxe.com/categories/health-wellness',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Health & Wellness Products | Premium Supplements & Tools | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health & Wellness Products | Premium Supplements & Tools | Marwari Luxe',
    description: 'Explore our premium health and wellness products including natural supplements and advanced health tools.',
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
    canonical: 'https://marwariluxe.com/categories/health-wellness',
  },
};

export default function HealthWellnessCategory() {
  // Filter health and wellness blogs
  const blogs = blogPosts
    .filter(blog => blog.category === 'Health & Wellness')
    .slice(0, 6)
    .map(blog => ({
      slug: blog.urlSlug,
      title: blog.title,
      excerpt: blog.excerpt,
      date: blog.date,
      category: blog.category,
      readTime: blog.readTime,
      image: blog.image,
      author: blog.author,
      tags: blog.tags,
      views: blog.views
    }));
  


  // Enhanced tools data for health & wellness with unique features
  const tools = [
    {
      id: 1,
      name: 'Personalized BMI Analyzer',
      description: 'Advanced body composition analysis with muscle mass, fat percentage, and metabolic age calculations.',
      icon: '/tool-icons/bmi.svg',
      path: '/tools/health/bmi-calculator',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30',
      isNew: true,
      features: ['Body Fat %', 'Muscle Mass', 'Metabolic Age'],
    },
    {
      id: 2,
      name: 'Smart Calorie Intelligence',
      description: 'AI-powered nutrition tracking with macro-nutrient optimization and deficiency alerts.',
      icon: '/tool-icons/calorie.svg',
      path: '/tools/health/calorie-tracker',
      color: 'from-amber-600 to-orange-700',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30',
      isNew: true,
      features: ['Macro Tracking', 'Deficiency Alerts', 'Recipe Suggestions'],
    },
    {
      id: 3,
      name: 'Hydration Precision Monitor',
      description: 'Personalized water intake recommendations based on activity, climate, and health markers.',
      icon: '/tool-icons/water.svg',
      path: '/tools/health/water-monitor',
      color: 'from-cyan-600 to-blue-700',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30',
      isNew: false,
      features: ['Climate Adjust', 'Activity Sync', 'Electrolyte Balance'],
    },
    {
      id: 4,
      name: 'Sleep Architecture Optimizer',
      description: 'Comprehensive sleep analysis with circadian rhythm alignment and environmental recommendations.',
      icon: '/tool-icons/sleep.svg',
      path: '/tools/health/sleep-tracker',
      color: 'from-violet-600 to-purple-700',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30',
      isNew: true,
      features: ['Cycle Analysis', 'Environment Tips', 'Wake-Up Optimal'],
    },
  ];

  // Unique health & wellness statistics with compelling insights
  const wellnessStats = [
    {
      value: "87%",
      label: "of users report increased energy within 30 days of consistent supplement use",
      icon: "⚡",
    },
    {
      value: "3.2x",
      label: "faster recovery times with proper sleep optimization protocols",
      icon: "🌙",
    },
    {
      value: "64%",
      label: "reduction in inflammatory markers with microbiome interventions",
      icon: "🦠",
    },
    {
      value: "92%",
      label: "of individuals achieve better stress management with breathing techniques",
      icon: "🧘",
    }
  ];

  // Unique wellness insights
  const wellnessInsights = [
    {
      title: "Personalized Nutrition",
      description: "Your DNA influences how you process nutrients. Our genetic testing reveals your unique nutritional needs.",
      icon: "🧬",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Circadian Alignment",
      description: "Timing your meals, exercise, and sleep with natural light cycles optimizes hormonal balance and metabolism.",
      icon: "🌞",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Movement Variability",
      description: "Diverse movement patterns throughout the day are more beneficial than isolated intense workouts.",
      icon: "🏃",
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Social Connection",
      description: "Strong relationships have a measurable impact on immune function and longevity outcomes.",
      icon: "🤝",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section with Unique Introductory Content */}
          <div className="mb-16 animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 opacity-90"></div>
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    Evidence-Based Wellness
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Transform Your Health Through <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">Science-Backed</span> Wellness
                  </h1>
                  <p className="text-xl mb-8 max-w-3xl opacity-90 leading-relaxed">
                    Unlock your body's innate healing potential with our comprehensive ecosystem of precision health tools, 
                    biohacking insights, and premium nutraceuticals designed for the modern human.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/tools/health"
                      className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Health Tools
                    </Link>
                    <Link 
                      href="/products"
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Premium Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Unique Wellness Statistics with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {wellnessStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Unique Wellness Insights Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Science-Driven Wellness Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wellnessInsights.map((insight, index) => (
                <div key={index} className="bg-gradient-to-br rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center text-2xl mb-5`}>
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{insight.title}</h3>
                  <p className="text-foreground/80">{insight.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Enhanced Blogs Section with Unique Features */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Cutting-Edge Health Research</h2>
                <p className="text-foreground/70 max-w-2xl">Evidence-based insights from leading scientists and practitioners</p>
              </div>
              <Link href="/blogs" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                View All Research Articles
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogs.slice(0, 6).map((blog: any) => (
                <article key={blog.slug} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-sm font-medium rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    {blog.tags && (
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {blog.tags.slice(0, 2).map((tag: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{blog.title}</h3>
                        <div className="flex items-center text-sm text-foreground/60 mb-3">
                          <span>By {blog.author}</span>
                          <span className="mx-2">•</span>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full whitespace-nowrap">
                        {blog.readTime} min read
                      </span>
                    </div>
                    <p className="text-foreground/80 mb-5">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <Link href={`/blogs/${blog.slug}`} className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline flex items-center">
                        Read Full Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <div className="flex items-center text-foreground/60 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{blog.views} reads</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          
          {/* Enhanced Tools Section with Unique Features */}
          <section id="tools" className="mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Precision Health Tools</h2>
                <p className="text-foreground/70 max-w-2xl">Data-driven insights for optimizing your wellness journey</p>
              </div>
              <Link href="/tools/health" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Explore All Tools
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool: any) => (
                <Link 
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
                        {tool.features.map((feature: string, index: number) => (
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
                </Link>
              ))}
            </div>
          </section>
          
          {/* Unique Wellness Philosophy */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Holistic Wellness Philosophy</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                We believe true health emerges from the harmonious integration of cutting-edge science with ancient wisdom. 
                Our approach addresses not just symptoms, but the root causes of imbalance through personalized, 
                evidence-based interventions that honor your unique biochemistry.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">🔬</div>
                  <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
                  <p className="text-sm opacity-90">Every recommendation backed by peer-reviewed research</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">🌱</div>
                  <h3 className="font-bold text-lg mb-2">Root Cause</h3>
                  <p className="text-sm opacity-90">Address underlying imbalances, not just symptoms</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">👤</div>
                  <h3 className="font-bold text-lg mb-2">Personalized</h3>
                  <p className="text-sm opacity-90">Tailored to your unique genetics and lifestyle</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call to Action */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Begin Your Transformation Journey</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands who have unlocked their optimal health with our comprehensive wellness ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/tools/health/bmi-calculator" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start With Our Health Assessment
              </Link>
              <Link 
                href="/tools/health" 
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Health Tools
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-foreground/70">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Expert support available</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}