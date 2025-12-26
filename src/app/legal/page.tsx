import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Legal | Marwari Luxe',
  description: 'Legal information, terms of service, and privacy policy for Marwari Luxe.',
  alternates: {
    canonical: 'https://marwariluxe.com/legal',
  },
};

export default function LegalPage() {
  const legalPages = [
    {
      id: 1,
      title: 'Terms of Service',
      description: 'Our terms and conditions for using the Marwari Luxe website and services.',
      url: '/legal/terms',
    },
    {
      id: 2,
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information.',
      url: '/legal/privacy-policy',
    },
    {
      id: 3,
      title: 'Refund Policy',
      description: 'Information about our refund and return policies.',
      url: '/legal/refund-policy',
    },
    {
      id: 4,
      title: 'Cookie Policy',
      description: 'How we use cookies and tracking technologies on our website.',
      url: '/legal/cookies',
    },
    {
      id: 5,
      title: 'Disclaimer',
      description: 'Important disclaimer regarding the use of our website, products, and services.',
      url: '/legal/disclaimer',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-52 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Legal Information</h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Review our policies and legal agreements to understand your rights and responsibilities
              </p>
            </div>
            
            {/* Legal Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalPages.map((page) => (
                <div key={page.id} className="bg-white dark:bg-black/50 rounded-2xl overflow-hidden shadow-lg hover-lift animate-slide-up" 
                     style={{animationDelay: `${(page.id % 3) * 100}ms`}}>
                  <div className="p-6">
                    <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{page.title}</h3>
                    <p className="text-foreground/70 mb-4">{page.description}</p>
                    <a 
                      href={page.url}
                      className="text-primary font-medium hover:underline"
                    >
                      Read Document →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact for Legal Inquiries */}
            <div className="mt-20 bg-neutral rounded-2xl p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Have Legal Questions?</h2>
                  <p className="text-foreground/70">
                    If you have any questions about our legal documents or need clarification on any of our policies, 
                    please don't hesitate to contact our legal team.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <a 
                    href="/contact" 
                    className="block w-full py-3 bg-primary text-white font-medium rounded-lg text-center hover:bg-primary/90 transition-colors duration-300 focus-ring"
                  >
                    Contact Legal Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}