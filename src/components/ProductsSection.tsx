'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '../data/products-58';

export default function ProductsSection() {
  // Filter to only show beauty products
  const beautyProducts = products.filter(product => product.category === 'Beauty & Cosmetics');
  // Select the first 10 beauty products for display
  const displayedProducts = beautyProducts.slice(0, 10);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-neutral to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Beauty Products</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Premium beauty essentials curated for radiant skin and healthy hair
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {displayedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 50}ms`}}
            >
              <div className="relative h-48">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-foreground/80 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                  <a 
                    href={product.buyNowUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Link 
            href="/products" 
            className="inline-block px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}