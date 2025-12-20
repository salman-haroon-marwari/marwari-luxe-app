import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { products as allProducts } from '../../../data/products-58';

export const metadata = {
  title: 'Beauty & Cosmetics Products | Luxury Skincare & Makeup | Marwari Luxe',
  description: 'Explore our luxury beauty and cosmetics collection featuring premium skincare, organic makeup, and professional beauty tools. Achieve radiant skin and confidence with our curated selection of high-performance beauty products.',
  keywords: ['beauty products', 'luxury skincare', 'organic makeup', 'professional beauty tools', 'radiant skin', 'anti-aging', 'natural cosmetics', 'beauty essentials'],
  openGraph: {
    title: 'Beauty & Cosmetics Products | Luxury Skincare & Makeup | Marwari Luxe',
    description: 'Explore our luxury beauty and cosmetics collection featuring premium skincare, organic makeup, and professional beauty tools for radiant skin.',
    url: 'https://www.marwariluxe.com/categories/beauty-cosmetics',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://www.marwariluxe.com/og-image.jpg',
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
    images: ['https://www.marwariluxe.com/og-image.jpg'],
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
    canonical: 'https://www.marwariluxe.com/categories/beauty-cosmetics',
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

  // Filter beauty products (first 4 beauty products)
  const beautyProducts = allProducts
    .filter(product => product.id.startsWith('beauty-'))
    .slice(0, 4);

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

  // Enhanced beauty blog data with engaging content
  const blogs = [
    {
      id: 'custom-beauty-001',
      title: 'Waterless Skincare & Minimalist Beauty ',
      excerpt: "Discover the future of beauty with waterless skincare and minimalist routines. Learn how concentrated, eco-friendly products simplify your regimen, nourish your skin, and support sustainability. Try 7 must-have products in 2026 for radiant, healthy skin with minimal effort and maximum impact.",
      date: 'April 15, 2025',
      category: 'Sustainability',
      readTime: '12 min read',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762857789/blogb-1_utllwn.png',
      author: 'Beauty Editorial Team',
      tags: ['Waterless', 'Minimalist', 'Sustainability'],
      views: '2.5K'
    },
    {
      id: 'custom-beauty-002',
      title: 'Monochrome Makeup Looks',
      excerpt: "Discover the simplicity of monochrome makeup—one color, endless possibilities. Learn how to choose the right shade for your skin tone, master daily looks, and find top 2026 product picks that simplify your beauty routine while keeping it modern, radiant, and naturally effortless.",
      date: 'April 10, 2025',
      category: 'Makeup Trends',
      readTime: '9 min read',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762858256/blogb-2_qnyvv6.png',
      author: 'Makeup Artist Collective',
      tags: ['Monochrome', 'Makeup', 'Trends'],
      views: '1.8K'
    },
    {
      id: 'custom-beauty-003',
      title: 'Sustainable & Eco-Friendly Beauty',
      excerpt: "Discover the top 10 sustainable beauty brands of 2025 revolutionizing skincare and makeup. Learn how to make eco-conscious swaps, choose ethical products, and embrace a cleaner, greener beauty routine that supports your skin and the planet effortlessly.",
      date: 'April 5, 2025',
      category: 'Eco Beauty',
      readTime: '11 min read',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762858786/blogb-3_bq9zlh.png',
      author: 'Green Beauty Experts',
      tags: ['Sustainable', 'Eco-Friendly', 'Brands'],
      views: '3.1K'
    },
    {
      id: 'custom-beauty-004',
      title: 'Hair Colour & Texture Trands 2026',
      excerpt: "Discover 2026’s most exciting hair trends—from AI-inspired color blends to eco-friendly dyes and natural textures. Learn how futuristic styles redefine beauty with individuality, sustainability, and effortless confidence for every hair type and tone.",
      date: 'March 28, 2025',
      category: 'Hair Trends',
      readTime: '10 min read',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762859782/blogb-4_rytecg.png',
      author: 'Hair Styling Experts',
      tags: ['Hair Color', 'Texture', 'Trends'],
      views: '2.7K'
    },
    {
      id: 'custom-beauty-005',
      title: 'Tech-Powered Beauty (AI, AR, Smart Devices)',
      excerpt: "Explore how AI, AR, and smart devices are transforming skincare and beauty in 2026. Learn how technology-driven tools personalize routines, improve results, and make sustainable self-care easier than ever.",
      date: 'March 22, 2025',
      category: 'Beauty Tech',
      readTime: '13 min read',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762860104/blogb-5_pmytov.png',
      author: 'Tech Beauty Innovators',
      tags: ['AI', 'AR', 'Smart Devices'],
      views: '2.9K'
    },
    {
      id: 'custom-beauty-006',
      title: 'Playful & Statement Beauty Looks',
      excerpt: "Explore 2026’s most exciting beauty trends—duck nails, bold lips, glitter finishes, and more. Discover how to express your personality with confidence and color through playful, statement-making looks that redefine modern beauty.",
      date: 'March 18, 2025',
      category: 'Beauty Trends',
      readTime: '8 min read',
      image: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762860508/blogb-6_sz2n1w.png',
      author: 'Trend Forecasters',
      tags: ['Statement Looks', 'Trends', 'Playful'],
      views: '2.4K'
    },
  ];

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
              {blogs.map((blog) => (
                <article key={blog.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative">
                    <img 
                      src={blog.image.startsWith('http') ? blog.image : `https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto:good,dpr_auto,c_fill,g_auto,w_auto/v17628${blog.id === 'custom-beauty-001' ? '57789' : blog.id === 'custom-beauty-002' ? '58256' : blog.id === 'custom-beauty-003' ? '58786' : blog.id === 'custom-beauty-004' ? '59782' : blog.id === 'custom-beauty-005' ? '60104' : '60508'}.png`} 
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
                        {blog.tags.slice(0, 2).map((tag, index) => (
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
                        {blog.readTime}
                      </span>
                    </div>
                    <p className="text-foreground/80 mb-5">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <Link href={`/blogs/${blog.id}`} className="text-pink-600 dark:text-pink-400 font-medium hover:underline flex items-center">
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
          
          {/* Enhanced Products Section with Unique Features */}
          <section id="products" className="mb-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Luxury Beauty Collection</h2>
                <p className="text-foreground/70 max-w-2xl">Premium formulations crafted for exceptional results</p>
              </div>
              <Link href="/products" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Browse All Products
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beautyProducts.map((product) => (
                <div key={product.id} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col h-full">
                  <div className="relative flex-shrink-0">
                    <div className="h-52 relative">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="text-white text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2 flex-shrink-0">
                      <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">${product.price.toFixed(2)}</div>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm mb-4 flex-grow-0 flex-shrink-0">{product.description}</p>
                    
                    <div className="mb-4 flex-grow">
                      <div className="flex flex-wrap gap-1 mb-3 flex-shrink-0">
                        {product.benefits.slice(0, 3).map((benefit: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-xs text-foreground/60 mb-3 flex-shrink-0">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{product.reviewCount.toLocaleString()} reviews</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <a 
                        href={product.buyNowUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-colors text-sm font-medium text-center block"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
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
                href="/products" 
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Luxury Collection
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