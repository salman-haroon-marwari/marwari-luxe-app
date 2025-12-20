import { products } from '../../../data/products-58';
import Link from 'next/link';
import ProductImage from '../../../components/ProductImage';
import type { Metadata } from 'next';

// Generate metadata for individual product pages
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = await params;
  const product = products.find(p => p.id === unwrappedParams.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | Marwari Luxe',
      description: 'Product not found',
      alternates: {
        canonical: 'https://www.marwariluxe.com/products/not-found',
      },
    };
  }

  return {
    title: `${product.name} | Premium ${product.category} Product | Marwari Luxe`,
    description: product.detailedDescription || product.description,
    keywords: [...product.tags, product.category, 'premium', 'luxury', 'wellness', 'beauty'],
    openGraph: {
      title: `${product.name} | Marwari Luxe`,
      description: product.detailedDescription || product.description,
      url: `https://www.marwariluxe.com/products/${product.id}`,
      siteName: 'Marwari Luxe',
      images: [
        {
          url: product.imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Marwari Luxe`,
      description: product.detailedDescription || product.description,
      images: [product.imageUrl],
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
      canonical: `https://www.marwariluxe.com/products/${product.id}`,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = await params;
  
  const product = products.find(p => p.id === unwrappedParams.id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-foreground/70 mb-8">Sorry, the product you're looking for doesn't exist.</p>
            <Link 
              href="/products" 
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
            >
              Back to Products
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Show up to 4 related products

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link 
            href="/products" 
            className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Products
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-96 flex items-center justify-center">
                  <ProductImage
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">
                      {product.category === 'Health & Wellness' ? 'Wellness' : 'Beauty'}
                    </span>
                    <h1 className="text-3xl font-bold text-foreground mt-4 mb-2">{product.name}</h1>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">${product.price.toFixed(2)}</div>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-6">{product.detailedDescription || product.description}</p>
                
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Key Benefits</h2>
                  <ul className="space-y-2">
                    {(product.detailedBenefits || product.benefits).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center bg-black/5 dark:bg-white/10 px-3 py-2 rounded-full">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="font-bold text-foreground">{product.rating}</span>
                    <span className="mx-2 text-foreground/50">•</span>
                    <span className="text-foreground/70">{product.reviewCount.toLocaleString()} reviews</span>
                  </div>
                </div>
                
                <a 
                  href={product.buyNowUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Buy Now
                </a>
                
                {/* Shipping Note */}
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Note: Shipping charges will be applied based on your country. The listed price does not include shipping fees.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-foreground mb-3">Product Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-foreground/60">Category:</span>
                      <span className="ml-2 text-foreground">{product.category}</span>
                    </div>
                    <div>
                      <span className="text-foreground/60">Availability:</span>
                      <span className="ml-2 text-foreground">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <div>
                      <span className="text-foreground/60">Rating:</span>
                      <span className="ml-2 text-foreground">{product.rating}/5 ({product.reviewCount.toLocaleString()} reviews)</span>
                    </div>
                    <div>
                      <span className="text-foreground/60">People Bought:</span>
                      <span className="ml-2 text-foreground">{(product.reviewCount * 2.7).toFixed(0).toLocaleString()} people</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* People bought this product section */}
            {relatedProducts.length > 0 && (
              <div className="mt-12 px-8 pb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">People also bought</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link 
                      key={relatedProduct.id}
                      href={`/products/${relatedProduct.id}`}
                      className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                      <div className="h-40 flex items-center justify-center">
                        <ProductImage
                          src={relatedProduct.imageUrl}
                          alt={relatedProduct.name}
                          width={150}
                          height={150}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1 truncate">
                          {relatedProduct.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                            ${relatedProduct.price.toFixed(2)}
                          </div>
                          <div className="flex items-center text-foreground/60 text-sm">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span>{relatedProduct.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}