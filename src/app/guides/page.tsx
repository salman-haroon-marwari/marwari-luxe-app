import Link from 'next/link';

export const metadata = {
  title: 'Product Guides | Marwari Luxe',
  description: 'Expert guides and tutorials to help you get the most from our health, wellness, and beauty products.',
};

export default function GuidesPage() {
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
              <h1 className="text-4xl font-bold text-foreground mb-4">Product Guides & Tutorials</h1>
              <p className="text-foreground/70 text-lg">Maximize your wellness journey with our expert guidance</p>
            </header>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Beauty Guides</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Skincare Routine Basics</h3>
                    <p className="text-foreground/80 mb-4">
                      Learn the fundamental steps of an effective skincare routine and how to customize it for your skin type.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Makeup Application Tips</h3>
                    <p className="text-foreground/80 mb-4">
                      Master the art of makeup application with our step-by-step tutorials and professional techniques.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Hair Care Essentials</h3>
                    <p className="text-foreground/80 mb-4">
                      Discover the best practices for healthy, vibrant hair with our comprehensive hair care guide.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Ingredient Spotlight</h3>
                    <p className="text-foreground/80 mb-4">
                      Understand the key ingredients in our products and how they benefit your skin and hair.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Health & Wellness Guides</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Supplement Guide</h3>
                    <p className="text-foreground/80 mb-4">
                      Navigate the world of supplements with our comprehensive guide to choosing the right products for your needs.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Wellness Routine Setup</h3>
                    <p className="text-foreground/80 mb-4">
                      Create a personalized wellness routine that fits your lifestyle and supports your health goals.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Mindfulness Practices</h3>
                    <p className="text-foreground/80 mb-4">
                      Incorporate mindfulness and stress-reduction techniques into your daily routine for better mental health.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Fitness Integration</h3>
                    <p className="text-foreground/80 mb-4">
                      Learn how to complement your fitness routine with the right nutrition and recovery strategies.
                    </p>
                    <Link href="/blogs" className="text-primary hover:underline">Read Guide →</Link>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Product-Specific Tutorials</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Device Usage Guides</h3>
                    <p className="text-foreground/80 mb-4">
                      Step-by-step instructions for using our health and beauty devices safely and effectively.
                    </p>
                    <Link href="/products" className="text-primary hover:underline">View Products →</Link>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium text-foreground mb-2">Custom Routine Builder</h3>
                    <p className="text-foreground/80 mb-4">
                      Use our interactive tool to create a personalized routine based on your specific needs and goals.
                    </p>
                    <Link href="/tools" className="text-primary hover:underline">Try Tool →</Link>
                  </div>
                </div>
              </section>
              
              <section className="bg-primary/5 p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Need Personalized Guidance?</h2>
                <p className="text-foreground/80 mb-4">
                  Our wellness experts are here to help you create a customized plan that works for your unique needs.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book a Consultation
                </Link>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}