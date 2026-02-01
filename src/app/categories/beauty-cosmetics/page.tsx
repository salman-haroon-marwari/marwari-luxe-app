import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { blogPosts } from '../../../data/blogs';


export const metadata = {
  title: 'Beauty & Cosmetics Products | Luxury Skincare & Makeup | Marwari Luxe',
  description: 'Explore our luxury beauty and cosmetics collection featuring premium skincare, organic makeup, and professional beauty tools. Achieve radiant skin and confidence with our curated selection of high-performance beauty products.',
  keywords: ['beauty products', 'luxury skincare', 'organic makeup', 'professional beauty tools', 'radiant skin', 'anti-aging', 'natural cosmetics', 'beauty essentials'],
  openGraph: {
    title: 'Beauty & Cosmetics Products | Luxury Skincare & Makeup | Marwari Luxe',
    description: 'Explore our luxury beauty and cosmetics collection featuring premium skincare, organic makeup, and professional beauty tools for radiant skin.',
    url: 'https://marwariluxe.com/categories/beauty-cosmetics',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beauty & Cosmetics Products | Luxury Skincare & Makeup | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty & Cosmetics Products | Luxury Skincare & Makeup | Marwari Luxe',
    description: 'Explore our luxury beauty and cosmetics collection featuring premium skincare and organic makeup.',
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
    canonical: 'https://marwariluxe.com/categories/beauty-cosmetics',
  },
};

export default function BeautyCosmeticsCategory() {
  // Enhanced beauty tools data with unique features
  const tools = [
    {
      id: 1,
      name: 'Skin Analysis Scanner',
      description: 'Advanced complexion analysis with personalized skincare recommendations based on your unique skin profile.',
      icon: '/tool-icons/skin-type.svg',
      path: '/tools/beauty/skin-analyzer',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30',
      isNew: true,
      features: ['Pore Mapping', 'Texture Analysis', 'Moisture Levels'],
    },
    {
      id: 2,
      name: 'Makeup Color Matcher',
      description: 'Find your perfect foundation shade and complementary colors using advanced color recognition technology.',
      icon: '/tool-icons/makeup-shade.svg',
      path: '/tools/beauty/color-matcher',
      color: 'from-purple-500 to-fuchsia-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/30',
      isNew: true,
      features: ['Shade Matching', 'Seasonal Palettes', 'Brand Recommendations'],
    },
    {
      id: 3,
      name: 'Hair Care Advisor',
      description: 'Personalized hair care routines based on your hair type, concerns, and styling habits.',
      icon: '/tool-icons/haircare.svg',
      path: '/tools/beauty/hair-advisor',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30',
      isNew: false,
      features: ['Scalp Analysis', 'Routine Builder', 'Product Matching'],
    },
    {
      id: 4,
      name: 'Beauty Routine Planner',
      description: 'Custom AM/PM skincare routines with seasonal adjustments and progress tracking.',
      icon: '/tool-icons/skincare-routine.svg',
      path: '/tools/beauty/routine-planner',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30',
      isNew: true,
      features: ['Step-by-Step Guide', 'Progress Photos', 'Reminders'],
    },
  ];



  // Beauty industry statistics with compelling insights
  const beautyStats = [
    {
      value: "78%",
      label: "of women report increased confidence with consistent skincare routine",
      icon: "✨",
    },
    {
      value: "3.5x",
      label: "faster results with personalized beauty regimens vs generic products",
      icon: "📈",
    },
    {
      value: "92%",
      label: "of users see improvement in skin texture with proper exfoliation",
      icon: "💫",
    },
    {
      value: "45 min",
      label: "average daily time saved with beauty routine automation",
      icon: "⏱️",
    }
  ];

  // Beauty insights and trends
  const beautyInsights = [
    {
      title: "Clean Beauty Movement",
      description: "The shift toward non-toxic, environmentally conscious beauty products with transparent ingredient sourcing.",
      icon: "🌿",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tech-Infused Skincare",
      description: "Smart devices and AI-powered diagnostics revolutionizing personal beauty care experiences.",
      icon: "📱",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Personalization Era",
      description: "DNA-based formulations and customized beauty solutions tailored to individual genetics.",
      icon: "🧬",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Sustainable Luxury",
      description: "High-end beauty brands embracing circular economy principles with refillable packaging.",
      icon: "♻️",
      color: "from-amber-500 to-orange-500",
    },
  ];

  // Filter blogs for beauty category
  const beautyBlogs = blogPosts.filter(blog => blog.category === 'Beauty & Cosmetics');

   return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section with Unique Introductory Content */}
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
                    <Link 
                      href="/tools/beauty"
                      className="px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Beauty Tools
                    </Link>
                    <Link 
                      href="/products"
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Premium Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Unique Beauty Statistics with Icons */}
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
          
          {/* Unique Beauty Insights Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Beauty Industry Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beautyInsights.map((insight, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Beauty & Skincare Insights</h2>
                <p className="text-foreground/70 max-w-2xl">Expert advice and industry trends for your beauty journey</p>
              </div>
              <Link href="/blogs" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg">
                View All Articles
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {beautyBlogs.slice(0, 6).map((blog: any) => (
                <article key={blog.slug} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-rose-700 text-sm font-medium rounded-full">
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
                      <span className="text-sm font-medium bg-pink-100 text-pink-800 px-2 py-1 rounded-full whitespace-nowrap">
                        {blog.readTime} min read
                      </span>
                    </div>
                    <p className="text-foreground/80 mb-5">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <Link href={`/blogs/${blog.slug}`} className="text-pink-600 dark:text-pink-400 font-medium hover:underline flex items-center">
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
                        <span>{blog.views || '1.2K'} reads</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Advanced Beauty Tools</h2>
                <p className="text-foreground/70 max-w-2xl">Personalized solutions for your unique beauty journey</p>
              </div>
              <Link href="/tools/beauty" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Explore All Tools
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
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
                </Link>
              ))}
            </div>
          </section>
          
          {/* Unique Beauty Philosophy */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Beauty Philosophy</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                We believe true beauty radiates from within and is enhanced by intelligent, clean formulations. 
                Our approach combines luxury ingredients with dermatological science to create products that nurture 
                your skin while respecting your values and the planet.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">💎</div>
                  <h3 className="font-bold text-lg mb-2">Luxury Ingredients</h3>
                  <p className="text-sm opacity-90">Premium actives sourced sustainably for maximum efficacy</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">🔬</div>
                  <h3 className="font-bold text-lg mb-2">Science-Backed</h3>
                  <p className="text-sm opacity-90">Formulated with proven actives and innovative delivery systems</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">🌎</div>
                  <h3 className="font-bold text-lg mb-2">Conscious Beauty</h3>
                  <p className="text-sm opacity-90">Ethically produced with environmental responsibility at heart</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call to Action */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Begin Your Beauty Transformation</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands who have discovered their most radiant selves with our premium beauty ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/tools/beauty/skin-analyzer" 
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Analyze Your Skin
              </Link>
              <Link 
                href="/tools/beauty" 
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Beauty Tools
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-foreground/70">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Free samples with every order</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>30-day satisfaction guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Beauty expert consultations</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}