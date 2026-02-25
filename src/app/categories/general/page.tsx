import Navigation from '../../../components/Navigation';

export const metadata = {
  title: 'General Productivity Tools & Utilities | Marwari Luxe',
  description: 'Explore our collection of practical productivity tools and utilities including unit converters, password generators, QR code creators, and more. Boost your efficiency with our free, easy-to-use digital tools.',
  keywords: ['productivity tools', 'utilities', 'unit converter', 'password generator', 'QR code generator', 'file converter', 'digital tools', 'efficiency tools'],
  openGraph: {
    title: 'General Productivity Tools & Utilities | Marwari Luxe',
    description: 'Explore our collection of practical productivity tools and utilities including unit converters, password generators, and QR code creators.',
    url: 'https://marwariluxe.com/categories/general',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'General Productivity Tools & Utilities | Marwari Luxe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'General Productivity Tools & Utilities | Marwari Luxe',
    description: 'Explore our collection of practical productivity tools and utilities including unit converters and password generators.',
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
    canonical: 'https://marwariluxe.com/categories/general',
  },
};

export default function GeneralCategory() {
  // Enhanced general tools data with unique features
  const tools = [
    {
      id: 1,
      name: 'Smart Unit Converter',
      description: 'Advanced measurement conversion with real-time currency rates and specialized units for professionals.',
      icon: '/tool-icons/unit-converter.svg',
      path: '/tools/general/unit-converter',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30',
      isNew: true,
      features: ['Real-Time Rates', 'Specialized Units', 'Batch Conversion'],
    },
    {
      id: 2,
      name: 'Intelligent Password Vault',
      description: 'Enterprise-grade password management with biometric security and breach monitoring.',
      icon: '/tool-icons/password-generator.svg',
      path: '/tools/general/password-generator',
      color: 'from-purple-500 to-fuchsia-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/30',
      isNew: true,
      features: ['Biometric Lock', 'Breach Alerts', 'Secure Sharing'],
    },
    {
      id: 3,
      name: 'Dynamic QR Studio',
      description: 'Professional QR code generator with analytics, customization options, and bulk creation.',
      icon: '/tool-icons/qr-code.svg',
      path: '/tools/general/qr-code-generator',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30',
      isNew: false,
      features: ['Analytics Dashboard', 'Custom Designs', 'Bulk Creation'],
    },
    {
      id: 4,
      name: 'Universal File Transformer',
      description: 'Seamless file conversion across 200+ formats with batch processing and cloud integration.',
      icon: '/tool-icons/file-converter.svg',
      path: '/tools/general/file-converter',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30',
      isNew: true,
      features: ['200+ Formats', 'Batch Processing', 'Cloud Integration'],
    },
  ];

  // Premium productivity products with enhanced details
  const products = [
    {
      id: 1,
      name: 'Pro Productivity Suite',
      description: 'All-in-one toolkit with 50+ premium utilities for professionals and creatives.',
      price: 99.99,
      originalPrice: 149.99,
      image: 'productivity-suite',
      benefits: ['Lifetime Updates', 'Priority Support', 'Cross-Platform'],
      rating: 4.9,
      reviews: 3245,
      badge: 'Best Value',
      sustainability: 'Digital Download',
    },
    {
      id: 2,
      name: 'Executive Desk Organizer',
      description: 'Luxury bamboo desk organizer with wireless charging and premium materials.',
      price: 79.99,
      originalPrice: 99.99,
      image: 'desk-organizer',
      benefits: ['Wireless Charging', 'Bamboo Construction', 'Modular Design'],
      rating: 4.8,
      reviews: 1876,
      badge: 'Workspace Essential',
      sustainability: 'Sustainable Bamboo',
    },
    {
      id: 3,
      name: 'Noise-Canceling Headphones',
      description: 'Professional-grade headphones with adaptive noise cancellation and 40-hour battery.',
      price: 199.99,
      originalPrice: 249.99,
      image: 'headphones',
      benefits: ['Adaptive ANC', '40hr Battery', 'Studio Quality'],
      rating: 4.9,
      reviews: 4120,
      badge: 'Editor\'s Choice',
      sustainability: 'Recyclable Materials',
    },
    {
      id: 4,
      name: 'Ergonomic Wireless Keyboard',
      description: 'Mechanical keyboard with ergonomic design and customizable RGB lighting.',
      price: 129.99,
      originalPrice: 159.99,
      image: 'keyboard',
      benefits: ['Ergonomic Design', 'Mechanical Switches', 'Wireless Connectivity'],
      rating: 4.7,
      reviews: 2568,
      badge: 'Comfort Focused',
      sustainability: 'Recycled Plastics',
    },
  ];

  // Productivity statistics with compelling insights
  const productivityStats = [
    {
      value: "4.2x",
      label: "increase in productivity with proper tool utilization",
      icon: "🚀",
    },
    {
      value: "73%",
      label: "of professionals save 5+ hours weekly with automation tools",
      icon: "⏱️",
    },
    {
      value: "89%",
      label: "report reduced stress with organized digital workflows",
      icon: "😌",
    },
    {
      value: "95%",
      label: "of users recommend productivity tools to colleagues",
      icon: "👍",
    }
  ];

  // Productivity insights and trends
  const productivityInsights = [
    {
      title: "Automation Revolution",
      description: "Smart automation tools eliminating repetitive tasks and freeing creative energy for strategic work.",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Remote Work Optimization",
      description: "Digital collaboration tools transforming how distributed teams communicate and accomplish goals.",
      icon: "🏠",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Focus Economy",
      description: "Attention management tools helping knowledge workers minimize distractions and maximize deep work.",
      icon: "🎯",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Data-Driven Decisions",
      description: "Analytics platforms empowering individuals and teams with actionable insights for continuous improvement.",
      icon: "📊",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section with Unique Introductory Content */}
          <div className="mb-16 animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-700 opacity-90"></div>
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    Ultimate Productivity Hub
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Maximize Efficiency With <span className="bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">Smart Solutions</span>
                  </h1>
                  <p className="text-xl mb-8 max-w-3xl opacity-90 leading-relaxed">
                    Streamline your workflow with our comprehensive suite of productivity tools and utilities. 
                    From time-saving converters to enterprise-grade security solutions, we've got everything you need to excel.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#tools" 
                      className="px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Productivity Tools
                    </a>
                    <a 
                      href="#products" 
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Premium Essentials
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Unique Productivity Statistics with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {productivityStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Unique Productivity Insights Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Productivity Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productivityInsights.map((insight, index) => (
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
          
          {/* Enhanced Tools Section with Unique Features */}
          <section id="tools" className="mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Smart Productivity Tools</h2>
                <p className="text-foreground/70 max-w-2xl">Intelligent solutions for modern professionals</p>
              </div>
              <a href="/tools/general" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Explore All Tools
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
          
          
          {/* Unique Productivity Philosophy */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Productivity Philosophy</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                We believe true productivity comes from working smarter, not harder. 
                Our approach combines intuitive design with powerful functionality to eliminate friction 
                and amplify your natural capabilities through technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">⚡</div>
                  <h3 className="font-bold text-lg mb-2">Intuitive Design</h3>
                  <p className="text-sm opacity-90">Tools that feel natural to use and require minimal learning curve</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">🛠️</div>
                  <h3 className="font-bold text-lg mb-2">Powerful Functionality</h3>
                  <p className="text-sm opacity-90">Robust features that handle complex tasks with simplicity</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl mb-3">🔄</div>
                  <h3 className="font-bold text-lg mb-2">Seamless Integration</h3>
                  <p className="text-sm opacity-90">Products that work together to create unified workflows</p>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </main>
    </div>
  );
}