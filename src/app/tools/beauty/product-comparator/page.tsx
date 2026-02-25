'use client';

import Navigation from '../../../../components/Navigation';

export default function ProductComparatorPage() {
  const compareProducts = () => {
    // Get input values
    const product1 = (document.getElementById('product1') as HTMLInputElement).value;
    const product2 = (document.getElementById('product2') as HTMLInputElement).value;
    
    if (!product1 || !product2) {
      alert('Please enter both product names');
      return;
    }
    
    // Generate comparison data (in a real app, this would come from a database)
    const comparisonData = {
      product1: {
        name: product1,
        price: Math.floor(Math.random() * 50) + 10,
        rating: (Math.random() * 4 + 1).toFixed(1),
        ingredients: ['Water', 'Glycerin', 'Niacinamide', 'Hyaluronic Acid'],
        benefits: ['Hydration', 'Brightening', 'Anti-aging']
      },
      product2: {
        name: product2,
        price: Math.floor(Math.random() * 50) + 10,
        rating: (Math.random() * 4 + 1).toFixed(1),
        ingredients: ['Water', 'Glycerin', 'Retinol', 'Vitamin C'],
        benefits: ['Anti-aging', 'Brightening', 'Texture improvement']
      }
    };
    
    // Display results
    const productName1 = document.querySelector('.product1-name');
    const productPrice1 = document.querySelector('.product1-price');
    const productRating1 = document.querySelector('.product1-rating');
    const productIngredients1 = document.querySelector('.product1-ingredients');
    const productBenefits1 = document.querySelector('.product1-benefits');
    
    const productName2 = document.querySelector('.product2-name');
    const productPrice2 = document.querySelector('.product2-price');
    const productRating2 = document.querySelector('.product2-rating');
    const productIngredients2 = document.querySelector('.product2-ingredients');
    const productBenefits2 = document.querySelector('.product2-benefits');
    
    if (productName1 && productPrice1 && productRating1 && productIngredients1 && productBenefits1 &&
        productName2 && productPrice2 && productRating2 && productIngredients2 && productBenefits2) {
      
      productName1.textContent = comparisonData.product1.name;
      productPrice1.textContent = `$${comparisonData.product1.price}`;
      productRating1.textContent = comparisonData.product1.rating;
      productIngredients1.innerHTML = comparisonData.product1.ingredients.map(ing => 
        `<div class="px-3 py-1 bg-amber-100 dark:bg-amber-900 rounded-full text-sm">${ing}</div>`
      ).join('');
      productBenefits1.innerHTML = comparisonData.product1.benefits.map(benefit => 
        `<div class="px-3 py-1 bg-amber-500 text-white rounded-full text-sm">${benefit}</div>`
      ).join('');
      
      productName2.textContent = comparisonData.product2.name;
      productPrice2.textContent = `$${comparisonData.product2.price}`;
      productRating2.textContent = comparisonData.product2.rating;
      productIngredients2.innerHTML = comparisonData.product2.ingredients.map(ing => 
        `<div class="px-3 py-1 bg-amber-100 dark:bg-amber-900 rounded-full text-sm">${ing}</div>`
      ).join('');
      productBenefits2.innerHTML = comparisonData.product2.benefits.map(benefit => 
        `<div class="px-3 py-1 bg-amber-500 text-white rounded-full text-sm">${benefit}</div>`
      ).join('');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Beauty Product Comparator</h1>
            <p className="text-xl text-foreground/70">
              Compare different beauty products to find the best options for you.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/product-comparator.svg" 
                        alt="Product Comparator" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Compare Products</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="product1" className="block text-lg font-medium text-foreground mb-2">
                      First Product Name
                    </label>
                    <input
                      type="text"
                      id="product1"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="e.g., Brand A Vitamin C Serum"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="product2" className="block text-lg font-medium text-foreground mb-2">
                      Second Product Name
                    </label>
                    <input
                      type="text"
                      id="product2"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="e.g., Brand B Vitamin C Serum"
                    />
                  </div>
                  
                  <button 
                    onClick={compareProducts}
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Compare Products
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/product-comparator.svg" 
                          alt="Comparison" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Product Comparison</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product 1 */}
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-5">
                      <h4 className="font-bold text-lg mb-3 text-amber-600 dark:text-amber-400 product1-name">Product 1</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Price:</span>
                          <span className="product1-price">$--</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Rating:</span>
                          <span className="product1-rating">-.-</span>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Key Ingredients:</div>
                          <div className="flex flex-wrap gap-2 product1-ingredients">
                            <div className="text-foreground/80">Enter product names to compare</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Benefits:</div>
                          <div className="flex flex-wrap gap-2 product1-benefits">
                            <div className="text-foreground/80">Enter product names to compare</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product 2 */}
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-5">
                      <h4 className="font-bold text-lg mb-3 text-amber-600 dark:text-amber-400 product2-name">Product 2</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Price:</span>
                          <span className="product2-price">$--</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Rating:</span>
                          <span className="product2-rating">-.-</span>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Key Ingredients:</div>
                          <div className="flex flex-wrap gap-2 product2-ingredients">
                            <div className="text-foreground/80">Enter product names to compare</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Benefits:</div>
                          <div className="flex flex-wrap gap-2 product2-benefits">
                            <div className="text-foreground/80">Enter product names to compare</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Comparison Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Compare similar product types for accurate results</li>
                      <li>• Look for ingredient overlap for synergy</li>
                      <li>• Consider price-to-performance ratio</li>
                      <li>• Read reviews from users with similar skin types</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}