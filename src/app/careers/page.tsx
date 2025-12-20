import Link from 'next/link';

export const metadata = {
  title: 'Careers | Marwari Luxe',
  description: 'Join our team and help us redefine luxury in health, wellness, and beauty.',
};

export default function CareersPage() {
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
              <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Team</h1>
              <p className="text-foreground/70 text-lg">Help us redefine luxury in health, wellness, and beauty</p>
            </header>
            
            <div className="space-y-8">
              <section className="text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Why Marwari Luxe?</h2>
                <p className="text-foreground/80 mb-6">
                  At Marwari Luxe, we're more than just a company—we're a movement. We're passionate about 
                  creating premium products that enhance people's lives while maintaining our commitment to 
                  sustainability and ethical practices.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Our Culture</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-foreground mb-2">Innovation First</h3>
                    <p className="text-foreground/80">
                      We encourage creative thinking and experimentation. Every team member is empowered to 
                      contribute ideas that can shape our products and company direction.
                    </p>
                  </div>
                  
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-foreground mb-2">Sustainability Focus</h3>
                    <p className="text-foreground/80">
                      Environmental responsibility is at our core. We're constantly seeking ways to reduce 
                      our impact and create products that benefit both people and planet.
                    </p>
                  </div>
                  
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-foreground mb-2">Collaborative Environment</h3>
                    <p className="text-foreground/80">
                      We believe the best results come from teamwork. Our open culture fosters communication, 
                      knowledge sharing, and mutual support across all departments.
                    </p>
                  </div>
                  
                  <div className="bg-foreground/5 p-6 rounded-xl">
                    <h3 className="text-xl font-medium text-foreground mb-2">Work-Life Balance</h3>
                    <p className="text-foreground/80">
                      We understand that happy employees create better products. We offer flexible schedules, 
                      remote work options, and comprehensive benefits to support your well-being.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Current Openings</h2>
                
                <div className="space-y-4">
                  <div className="border border-foreground/10 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-medium text-foreground mb-1">Senior Product Developer</h3>
                        <p className="text-foreground/80 mb-2">New York, NY (Hybrid)</p>
                        <p className="text-foreground/80">
                          Lead the development of innovative health and beauty products, working closely with 
                          our research team to bring cutting-edge formulations to market.
                        </p>
                      </div>
                      <Link 
                        href="mailto:careers@marwariluxe.com?subject=Senior Product Developer Application" 
                        className="mt-4 md:mt-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-medium text-foreground mb-1">Digital Marketing Manager</h3>
                        <p className="text-foreground/80 mb-2">Remote</p>
                        <p className="text-foreground/80">
                          Develop and execute digital marketing strategies to grow our brand presence and 
                          drive engagement across all online channels.
                        </p>
                      </div>
                      <Link 
                        href="mailto:careers@marwariluxe.com?subject=Digital Marketing Manager Application" 
                        className="mt-4 md:mt-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-medium text-foreground mb-1">Customer Experience Specialist</h3>
                        <p className="text-foreground/80 mb-2">Chicago, IL (Hybrid)</p>
                        <p className="text-foreground/80">
                          Provide exceptional support to our customers while gathering valuable feedback 
                          to improve our products and services.
                        </p>
                      </div>
                      <Link 
                        href="mailto:careers@marwariluxe.com?subject=Customer Experience Specialist Application" 
                        className="mt-4 md:mt-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-medium text-foreground mb-1">Supply Chain Coordinator</h3>
                        <p className="text-foreground/80 mb-2">Los Angeles, CA (On-site)</p>
                        <p className="text-foreground/80">
                          Manage our ethical supply chain operations, ensuring all partners meet our high 
                          standards for quality and sustainability.
                        </p>
                      </div>
                      <Link 
                        href="mailto:careers@marwariluxe.com?subject=Supply Chain Coordinator Application" 
                        className="mt-4 md:mt-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="bg-primary/5 p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Not Seeing the Right Role?</h2>
                <p className="text-foreground/80 mb-6">
                  We're always looking for talented individuals who share our passion for quality and innovation. 
                  Send us your resume and a note about what you'd like to contribute to our mission.
                </p>
                <Link 
                  href="mailto:careers@marwariluxe.com" 
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Our HR Team
                </Link>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Benefits & Perks</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Competitive Salary</h3>
                    <p className="text-foreground/80">Comprehensive compensation packages with performance bonuses</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Health & Wellness</h3>
                    <p className="text-foreground/80">Comprehensive medical, dental, and vision insurance with wellness stipends</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Flexible Schedule</h3>
                    <p className="text-foreground/80">Work-life balance with flexible hours and remote work options</p>
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