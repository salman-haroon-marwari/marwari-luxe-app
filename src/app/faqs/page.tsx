import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions | Marwari Luxe',
  description: 'Find answers to common questions about our products, shipping, returns, and more.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </nav>
          
          <article className="prose prose-lg max-w-none bg-white dark:bg-black/50 p-8 rounded-2xl shadow-lg">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
              <p className="text-foreground/70 text-lg">Everything you need to know about Marwari Luxe</p>
            </header>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Product Questions</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">Are your products cruelty-free?</h3>
                    <p className="text-foreground/80">
                      Yes, all Marwari Luxe products are cruelty-free. We never test on animals and work exclusively 
                      with suppliers who share our commitment to ethical practices.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">Are your products vegan?</h3>
                    <p className="text-foreground/80">
                      Many of our products are vegan, and we clearly label vegan items. We're continuously working 
                      to expand our vegan product line while maintaining our quality standards.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">How should I store my products?</h3>
                    <p className="text-foreground/80">
                      Store products in a cool, dry place away from direct sunlight. Most products have a shelf life 
                      of 12-24 months when stored properly. Always check the expiration date on packaging.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">Can I use multiple products together?</h3>
                    <p className="text-foreground/80">
                      Yes, our products are designed to work together. However, we recommend introducing new products 
                      gradually and patch testing when combining multiple active ingredients.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Ordering & Shipping</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">How long does shipping take?</h3>
                    <p className="text-foreground/80">
                      Standard domestic shipping takes 3-7 business days. Express shipping is available for 1-3 
                      business days delivery. International shipping times vary by destination. See our 
                      <Link href="/legal/shipping" className="text-primary hover:underline ml-1">Shipping Policy</Link> for details.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">Do you ship internationally?</h3>
                    <p className="text-foreground/80">
                      Yes, we ship worldwide! International shipping costs and delivery times vary by destination. 
                      Duties and taxes may apply depending on your location.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">What payment methods do you accept?</h3>
                    <p className="text-foreground/80">
                      We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. 
                      All transactions are secured with SSL encryption.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Returns & Exchanges</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">What is your return policy?</h3>
                    <p className="text-foreground/80">
                      We offer a 30-day return policy for unused, unopened products in original packaging. 
                      See our <Link href="/legal/returns" className="text-primary hover:underline">Return Policy</Link> for complete details.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">How do I initiate a return?</h3>
                    <p className="text-foreground/80">
                      Contact us at returns@marwariluxe.com with your order number and reason for return. 
                      We'll email you a return shipping label and instructions within 1 business day.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">Can I exchange a product?</h3>
                    <p className="text-foreground/80">
                      Yes, we offer exchanges for damaged or defective items. Contact us at 
                      support@marwariluxe.com within 7 days of delivery to arrange an exchange.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Account & Support</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">How do I create an account?</h3>
                    <p className="text-foreground/80">
                      Click the "Account" link in the top right corner of any page. You can also create an 
                      account during checkout. Having an account allows you to track orders and save payment methods.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">How can I contact customer support?</h3>
                    <p className="text-foreground/80">
                      Email us at support@marwariluxe.com or use the contact form on our 
                      <Link href="/contact" className="text-primary hover:underline ml-1">Contact Page</Link>. 
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                  
                  <div className="border-b border-foreground/10 pb-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">Do you offer wholesale pricing?</h3>
                    <p className="text-foreground/80">
                      Yes, we offer wholesale pricing for qualified retailers and spas. Contact our sales team 
                      at wholesale@marwariluxe.com for more information.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}