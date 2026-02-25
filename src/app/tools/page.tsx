import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import { tools } from '../../data/tools';
import { getToolUrl } from '../../utils/toolUtils';

// Adding metadata for the tools page
export const metadata: Metadata = {
  title: 'Free Health, Wellness & Beauty Tools | Marwari Luxe',
  description: 'Access our collection of free interactive tools for health tracking, beauty assessments, and wellness planning. Calculate BMI, track water intake, analyze your skin, and more with our expert-designed tools.',
  keywords: ['free tools', 'health tools', 'wellness tools', 'beauty tools', 'BMI calculator', 'skin analyzer', 'water tracker', 'health calculator', 'beauty assessment', 'wellness planner', 'fitness tools'],
  openGraph: {
    title: 'Free Health, Wellness & Beauty Tools | Marwari Luxe',
    description: 'Access our collection of free interactive tools for health tracking, beauty assessments, and wellness planning.',
    url: 'https://marwariluxe.com/tools',
    siteName: 'Marwari Luxe',
    images: [
      {
        url: 'https://marwariluxe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marwari Luxe Free Health, Wellness & Beauty Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Health, Wellness & Beauty Tools | Marwari Luxe',
    description: 'Access our collection of free interactive tools for health tracking, beauty assessments, and wellness planning.',
    images: ['https://marwariluxe.com/og-image.jpg'],
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
    canonical: 'https://marwariluxe.com/tools'
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Tools</h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Interactive tools to help you on your health, wellness, and beauty journey
              </p>
            </div>
            
            {/* Tools Filters */}
            <div className="mb-12 flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                All Tools
              </button>
              <button className="px-6 py-2 bg-neutral text-foreground rounded-full hover:bg-neutral/80 transition-colors">
                Health Calculators
              </button>
              <button className="px-6 py-2 bg-neutral text-foreground rounded-full hover:bg-neutral/80 transition-colors">
                Beauty Assessments
              </button>
              <button className="px-6 py-2 bg-neutral text-foreground rounded-full hover:bg-neutral/80 transition-colors">
                Wellness Trackers
              </button>
            </div>
            
            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <div key={tool.id} className="bg-white dark:bg-black/50 rounded-2xl overflow-hidden shadow-lg hover-lift animate-slide-up" 
                     style={{animationDelay: `${(tools.indexOf(tool) % 3) * 100}ms`}}>
                  <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center text-gray-500">
                    <img 
                      src={`/tool-icons/${tool.id.replace('tool-', '')}.svg`} 
                      alt={tool.name}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `${tool.name} Icon`;
                        }
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{tool.name}</h3>
                    <p className="text-foreground/70 mb-6">{tool.description}</p>
                    <a href={getToolUrl(tool.id, tool.name, tool.category)} className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 focus-ring">
                      Start Tool
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12 animate-fade-in">
              <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift focus-ring">
                Load More Tools
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}