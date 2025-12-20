import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { products } from '../../data/products-58';
import Link from 'next/link';
import ProductImage from '../../components/ProductImage';
import type { Metadata } from 'next';

// Adding metadata for the products page - moved outside the client component
export const metadata: Metadata = {
  title: 'Premium Health & Beauty Products | Marwari Luxe',
  description: 'Discover our curated collection of premium health, wellness, and beauty products. Shop luxury skincare, natural supplements, and organic beauty items with worldwide shipping to Canada, UK, Australia, and Europe.',
  keywords: ['health products', 'wellness products', 'beauty products', 'luxury skincare', 'natural supplements', 'organic beauty', 'premium wellness', 'health supplements', 'skincare products', 'beauty essentials', 'wellness essentials'],
  openGraph: {
    title: 'Premium Health & Beauty Products | Marwari Luxe',
    description: 'Discover our curated collection of premium health, wellness, and beauty products. Shop luxury skincare, natural supplements, and organic beauty items.',
    url: 'https://www.marwariluxe.com/products',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://www.marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Premium Health & Beauty Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Health & Beauty Products | Marwari Luxe',
    description: 'Discover our curated collection of premium health, wellness, and beauty products.',
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
    canonical: 'https://www.marwariluxe.com/products',
  },
};

// Helper function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Server component - show all products without client-side filtering
export default function ProductsPage() {
  // Show all products initially (Server Component approach)
  const categories = ['All Products', 'Health & Wellness', 'Beauty & Cosmetics'];
  
  // Show all products without filtering
  const visibleProducts = products;
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section with Gradient Background */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 opacity-90"></div>
                <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
                  <div className="max-w-4xl">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                      Premium Collection
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                      Elevate Your Lifestyle With <span className="bg-gradient-to-r from-cyan-300 to-emerald-200 bg-clip-text text-transparent">Luxury Wellness</span>
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl opacity-90 leading-relaxed">
                      Discover our curated selection of premium health, wellness, and beauty products designed to enhance your everyday life. 
                      Each item is carefully chosen for its quality, effectiveness, and commitment to your well-being.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link 
                        href="#products"
                        className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Shop Now
                      </Link>
                      <Link 
                        href="/blogs"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      >
                        Read Our Stories
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Filters with Vibrant Colors */}
            <div className="mb-12 flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <div 
                  key={category} 
                  className="px-6 py-3 rounded-full transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg text-sm font-bold cursor-default"
                >
                  {category}
                </div>
              ))}
            </div>
            
            {/* Products Grid with Enhanced Design */}
            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col"
                >
                  <div className="relative">
                    <div className="h-72 flex items-center justify-center bg-gradient-to-r from-emerald-400 to-teal-500">
                      <ProductImage
                        src={product.imageUrl}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">
                        {product.category === 'Health & Wellness' ? 'Wellness' : 'Beauty'}
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
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-foreground">{truncateText(product.name, 40)}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">${product.price.toFixed(2)}</div>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm mb-4 flex-grow">{truncateText(product.description, 70)}</p>
                    
                    <div className="mb-4 flex-grow">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.benefits.slice(0, 3).map((benefit, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-xs text-foreground/60 mb-3">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{product.reviewCount.toLocaleString()} reviews</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/products/${product.id}`}
                      className="block w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-colors text-sm font-medium text-center mt-auto shadow-md hover:shadow-lg"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* All products are displayed by default in Server Component */}
          </div>
        </section>
      </main>
    </div>
  );
}