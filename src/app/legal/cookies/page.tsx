import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy | Marwari Luxe',
  description: 'Learn how we use cookies and similar technologies to enhance your browsing experience.',
};

export default function CookiesPage() {
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
                <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
                <p className="text-foreground/70 text-lg">Last updated: December 15, 2025</p>
              </header>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
                  <p className="text-foreground/80 mb-4">
                    Cookies are small text files that are stored on your device when you visit websites. They help websites 
                    function properly, enhance user experience, and provide information to website owners.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
                  <div className="space-y-6">
                    <div className="bg-foreground/5 p-6 rounded-xl">
                      <h3 className="text-xl font-medium text-foreground mb-2">Essential Cookies</h3>
                      <p className="text-foreground/80 mb-2">
                        These cookies are necessary for the website to function and cannot be switched off. They are usually 
                        only set in response to actions made by you which amount to a request for services.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                        <li>Authentication cookies</li>
                        <li>Shopping cart functionality</li>
                        <li>Load balancing</li>
                      </ul>
                    </div>
                    
                    <div className="bg-foreground/5 p-6 rounded-xl">
                      <h3 className="text-xl font-medium text-foreground mb-2">Performance Cookies</h3>
                      <p className="text-foreground/80 mb-2">
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance 
                        of our site. They help us to know which pages are the most and least popular.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                        <li>Google Analytics</li>
                        <li>Site performance monitoring</li>
                        <li>Traffic analysis</li>
                      </ul>
                    </div>
                    
                    <div className="bg-foreground/5 p-6 rounded-xl">
                      <h3 className="text-xl font-medium text-foreground mb-2">Functionality Cookies</h3>
                      <p className="text-foreground/80 mb-2">
                        These cookies enable the website to provide enhanced functionality and personalization. They may be 
                        set by us or by third party providers whose services we have added to our pages.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                        <li>User preferences</li>
                        <li>Social media features</li>
                        <li>Video embedding</li>
                      </ul>
                    </div>
                    
                    <div className="bg-foreground/5 p-6 rounded-xl">
                      <h3 className="text-xl font-medium text-foreground mb-2">Targeting Cookies</h3>
                      <p className="text-foreground/80 mb-2">
                        These cookies may be set through our site by our advertising partners. They may be used by those 
                        companies to build a profile of your interests and show you relevant adverts.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                        <li>Ad personalization</li>
                        <li>Retargeting campaigns</li>
                        <li>Conversion tracking</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Third Party Cookies</h2>
                  <p className="text-foreground/80 mb-4">
                    In some special cases we also use cookies provided by trusted third parties. The following section 
                    details which third party cookies you might encounter through this site.
                  </p>
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Google Analytics cookies for tracking visitor behavior</li>
                      <li>Social media platform cookies for sharing functionality</li>
                      <li>Advertising network cookies for personalized ads</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                  <p className="text-foreground/80 mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                    computer and you can set most browsers to prevent them from being placed.
                  </p>
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-foreground mb-2">How to Manage Cookies:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Browser settings: Most browsers allow you to refuse to accept cookies</li>
                      <li>Cookie consent banner: Use our cookie preference center</li>
                      <li>Third-party tools: Browser extensions for cookie management</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                  <p className="text-foreground/80">
                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting the 
                    new Cookie Policy on this page and updating the "Last updated" date.
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