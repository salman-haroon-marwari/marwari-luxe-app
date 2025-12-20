import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Shipping Policy | Marwari Luxe',
  description: 'Learn about our shipping policies, delivery times, and international shipping options to Canada, UK, Australia, and Europe.',
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 pt-20">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/legal" className="text-primary hover:underline">
                ← Back to Legal Center
              </Link>
            </nav>
            
            <article className="prose prose-lg max-w-none bg-white dark:bg-black/50 p-8 rounded-2xl shadow-lg">
              <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Policy</h1>
                <p className="text-foreground/70 text-lg">Last updated: December 15, 2025</p>
              </header>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Order Processing</h2>
                  <p className="text-foreground/80 mb-4">
                    All orders are processed within 1-2 business days. Orders placed on weekends or holidays 
                    will be processed on the next business day.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Domestic Shipping</h2>
                  <div className="bg-foreground/5 p-6 rounded-xl mb-4">
                    <h3 className="text-xl font-medium text-foreground mb-2">Standard Shipping</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Delivery time: 3-7 business days</li>
                      <li>Cost: Free for orders over $50, $5.99 for orders under $50</li>
                    </ul>
                  </div>
                  
                  <div className="bg-foreground/5 p-6 rounded-xl mb-4">
                    <h3 className="text-xl font-medium text-foreground mb-2">Express Shipping</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Delivery time: 1-3 business days</li>
                      <li>Cost: $12.99</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">International Shipping</h2>
                  <p className="text-foreground/80 mb-4">
                    We proudly ship worldwide to customers in Canada, United Kingdom, Australia, and throughout Europe! 
                    International shipping costs and delivery times vary by destination.
                  </p>
                  <div className="bg-foreground/5 p-6 rounded-xl mb-4">
                    <h3 className="text-xl font-medium text-foreground mb-2">Major International Destinations</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li><strong>Canada:</strong> 5-10 business days, $15.99</li>
                      <li><strong>United Kingdom:</strong> 7-12 business days, $18.99</li>
                      <li><strong>Australia:</strong> 10-15 business days, $22.99</li>
                      <li><strong>Germany, France, Italy, Spain:</strong> 7-14 business days, $20.99</li>
                    </ul>
                  </div>
                  
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-foreground mb-2">Estimated Delivery Times</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Canada & Mexico: 5-10 business days</li>
                      <li>Europe: 7-14 business days</li>
                      <li>UK: 7-12 business days</li>
                      <li>Australia & New Zealand: 10-15 business days</li>
                      <li>Asia: 10-20 business days</li>
                      <li>Rest of World: 10-25 business days</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Customs and Duties</h2>
                  <p className="text-foreground/80 mb-4">
                    International shipments may be subject to customs duties and taxes upon arrival in your country. 
                    These charges are the responsibility of the recipient and are not included in the shipping cost. 
                    Please check with your local customs office for more information.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Restrictions</h2>
                  <p className="text-foreground/80 mb-4">
                    Some products may have shipping restrictions based on destination country regulations. 
                    We'll notify you if any items in your order cannot be shipped to your location.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Lost or Delayed Packages</h2>
                  <p className="text-foreground/80">
                    If your package appears to be lost or significantly delayed, please contact our customer 
                    service team at <a href="mailto:shipping@marwariluxe.com" className="text-primary hover:underline">shipping@marwariluxe.com</a>.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}