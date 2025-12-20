import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Return Policy | Marwari Luxe',
  description: 'Our hassle-free return policy for your peace of mind when shopping with us.',
};

export default function ReturnsPage() {
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
                <h1 className="text-4xl font-bold text-foreground mb-4">Return Policy</h1>
                <p className="text-foreground/70 text-lg">Last updated: December 15, 2025</p>
              </header>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Eligibility</h2>
                  <p className="text-foreground/80 mb-4">
                    We accept returns within 30 days of purchase for unused, unopened products in their original packaging.
                  </p>
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-foreground mb-2">To be eligible for a return, your item must:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Be unused and in the same condition that you received it</li>
                      <li>Be in the original packaging</li>
                      <li>Include all accessories and documentation</li>
                      <li>Not be a final sale item (clearly marked)</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Returnable Items</h2>
                  <p className="text-foreground/80 mb-4">
                    Certain types of items cannot be returned:
                  </p>
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Opened beauty or personal care products</li>
                      <li>Digital downloads or gift cards</li>
                      <li>Final sale items (clearly marked)</li>
                      <li>Perishable goods</li>
                      <li>Intimate or sanitary goods</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Refunds</h2>
                  <p className="text-foreground/80 mb-4">
                    Once we receive your item, we will inspect it and notify you of the approval or rejection of your refund.
                  </p>
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>If approved, your refund will be processed within 5 business days</li>
                      <li>Refunds will be issued to the original payment method</li>
                      <li>Shipping costs are non-refundable</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Return Process</h2>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground">Contact Us</h3>
                        <p className="text-foreground/80">Email us at returns@marwariluxe.com with your order number and reason for return</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground">Receive Return Instructions</h3>
                        <p className="text-foreground/80">We'll email you a return shipping label and instructions within 1 business day</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground">Ship Your Item</h3>
                        <p className="text-foreground/80">Package your item securely and ship it using the provided label</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground">Receive Refund</h3>
                        <p className="text-foreground/80">Once we receive and inspect your item, we'll process your refund</p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Damaged or Defective Items</h2>
                  <p className="text-foreground/80">
                    If you receive a damaged or defective item, please contact us within 7 days of delivery at 
                    <a href="mailto:support@marwariluxe.com" className="text-primary hover:underline ml-1">support@marwariluxe.com</a>. 
                    We'll arrange for a replacement or refund at no additional cost.
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