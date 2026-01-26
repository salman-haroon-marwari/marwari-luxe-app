'use client';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function GeneralToolsPage() {
  // Enhanced tools data with unique features and NEW badges
  const tools = [
    {
      id: 1,
      name: 'Smart Unit Converter',
      description: 'Advanced measurement conversion with real-time currency rates and specialized units for professionals.',
      icon: '/tool-icons/unit-converter.svg',
      path: '/tools/general/unit-converter',
      color: 'from-blue-600 to-cyan-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30',
      isNew: true,
      features: ['Real-Time Rates', 'Specialized Units', 'Batch Conversion'],
    },
    {
      id: 2,
      name: 'Intelligent Currency Exchange',
      description: 'Professional-grade currency conversion with historical data and trend analysis.',
      icon: '/tool-icons/currency-exchange.svg',
      path: '/tools/general/currency-exchange',
      color: 'from-green-600 to-emerald-700',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30',
      isNew: true,
      features: ['Historical Data', 'Trend Analysis', 'Alerts'],
    },
    {
      id: 3,
      name: 'Date Calculator Pro',
      description: 'Advanced date calculations with business day counting and anniversary planning.',
      icon: '/tool-icons/date-calculator.svg',
      path: '/tools/general/date-calculator',
      color: 'from-purple-600 to-fuchsia-700',
      bgColor: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/30',
      isNew: false,
      features: ['Business Days', 'Anniversary Planning', 'Age Calculation'],
    },
    {
      id: 4,
      name: 'Intelligent Password Vault',
      description: 'Enterprise-grade password management with biometric security and breach monitoring.',
      icon: '/tool-icons/password-generator.svg',
      path: '/tools/general/password-generator',
      color: 'from-red-600 to-rose-700',
      bgColor: 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30',
      isNew: true,
      features: ['Biometric Lock', 'Breach Alerts', 'Secure Sharing'],
    },
    {
      id: 5,
      name: 'Dynamic QR Studio',
      description: 'Professional QR code generator with analytics, customization options, and bulk creation.',
      icon: '/tool-icons/qr-code.svg',
      path: '/tools/general/qr-code-generator',
      color: 'from-indigo-600 to-purple-700',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30',
      isNew: false,
      features: ['Analytics Dashboard', 'Custom Designs', 'Bulk Creation'],
    },
    {
      id: 6,
      name: 'Text Formatter Pro',
      description: 'Advanced text manipulation with formatting, encoding, and transformation tools.',
      icon: '/tool-icons/text-formatter.svg',
      path: '/tools/general/text-formatter',
      color: 'from-yellow-600 to-amber-700',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30',
      isNew: true,
      features: ['Encoding Tools', 'Regex Formatting', 'Bulk Processing'],
    },
    {
      id: 7,
      name: 'Universal File Transformer',
      description: 'Seamless file conversion across 200+ formats with batch processing and cloud integration.',
      icon: '/tool-icons/file-converter.svg',
      path: '/tools/general/file-converter',
      color: 'from-pink-600 to-rose-700',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30',
      isNew: true,
      features: ['200+ Formats', 'Batch Processing', 'Cloud Integration'],
    },
    {
      id: 8,
      name: 'Time Zone Converter Pro',
      description: 'Advanced time zone conversion with meeting scheduler and daylight saving adjustments.',
      icon: '/tool-icons/timezone-converter.svg',
      path: '/tools/general/timezone-converter',
      color: 'from-teal-600 to-cyan-700',
      bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30',
      isNew: false,
      features: ['Meeting Scheduler', 'DST Adjustments', 'World Clock'],
    },
    {
      id: 9,
      name: 'Loan Calculator Elite',
      description: 'Comprehensive loan analysis with amortization schedules and comparison tools.',
      icon: '/tool-icons/loan-calculator.svg',
      path: '/tools/general/loan-calculator',
      color: 'from-orange-600 to-amber-700',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30',
      isNew: true,
      features: ['Amortization', 'Comparison Tools', 'Extra Payment Analysis'],
    },
    {
      id: 10,
      name: 'Random Number Generator Pro',
      description: 'Advanced randomization with statistical distributions and custom range settings.',
      icon: '/tool-icons/random-number.svg',
      path: '/tools/general/random-number-generator',
      color: 'from-lime-600 to-green-700',
      bgColor: 'bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/30 dark:to-green-900/30',
      isNew: true,
      features: ['Statistical Distributions', 'Custom Ranges', 'Export Options'],
    },
  ];

  // Enhanced general tips data
  const generalTips = [
    {
      id: 1,
      title: "Master Password Security",
      description: "Use unique, complex passwords for each account. Enable two-factor authentication wherever possible. Regularly update passwords and monitor for breaches.",
      icon: "🔒",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Optimize Your Schedule",
      description: "Use time zone converters for international meetings. Plan around business days for accurate deadline calculations. Set reminders for important dates.",
      icon: "📅",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      id: 3,
      title: "Streamline File Management",
      description: "Convert files to appropriate formats for different uses. Batch process multiple files at once. Store important documents in cloud storage for accessibility.",
      icon: "📁",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Automate Repetitive Tasks",
      description: "Use text formatters for consistent document styling. Generate QR codes for quick information sharing. Utilize calculators for financial planning.",
      icon: "⚡",
      color: "from-amber-500 to-orange-500",
    },
  ];

  // Enhanced general statistics
  const generalStats = [
    {
      value: "4.2x",
      label: "increase in productivity with proper tool utilization",
      icon: "🚀",
    },
    {
      value: "73%",
      label: "of professionals save 5+ hours weekly with automation",
      icon: "⏱️",
    },
    {
      value: "89%",
      label: "report reduced stress with organized digital workflows",
      icon: "😌",
    },
    {
      value: "95%",
      label: "of users recommend productivity tools to colleagues",
      icon: "👍",
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section with Enhanced Content */}
          <div className="mb-16 animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-700 opacity-90"></div>
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    Ultimate Productivity Hub
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Maximize Efficiency With <span className="bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">Smart Solutions</span>
                  </h1>
                  <p className="text-xl mb-8 max-w-3xl opacity-90 leading-relaxed">
                    Streamline your workflow with our comprehensive suite of productivity tools and utilities. 
                    From time-saving converters to enterprise-grade security solutions, we've got everything you need to excel.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#tools" 
                      className="px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Productivity Tools
                    </a>
                    <a 
                      href="#tips" 
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Productivity Tips
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Productivity Statistics with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {generalStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Tools Grid with NEW Badges and Features */}
          <section id="tools" className="mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Smart Productivity Tools</h2>
                <p className="text-foreground/70 max-w-2xl">Intelligent solutions for modern professionals</p>
              </div>
              <a href="/categories/general" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Explore Productivity Essentials
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <a 
                  key={tool.id} 
                  href={tool.path}
                  className={`${tool.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700`}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`rounded-xl p-3 shadow-md bg-gradient-to-br ${tool.color}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-lg w-10 h-10 flex items-center justify-center">
                          <img 
                            src={tool.icon} 
                            alt={tool.name} 
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      </div>
                      {tool.isNew && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{tool.name}</h3>
                    <p className="text-foreground/80 mb-4 flex-grow">{tool.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-white/50 dark:bg-gray-700/50 text-foreground/80 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      className={`px-4 py-2 bg-gradient-to-r ${tool.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium`}
                    >
                      Launch Tool
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </section>
          
          {/* Enhanced General Tips Section */}
          <section id="tips" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Productivity Mastery Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generalTips.map((tip) => (
                <div key={tip.id} className="bg-gradient-to-br rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center text-xl mr-4`}>
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-foreground/80">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Enhanced Productivity Quote */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-bold mb-6">
                "Efficiency is doing things right; effectiveness is doing the right things. Work smarter, not harder, with the right tools for the job."
              </blockquote>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <cite className="text-lg">- Peter Drucker</cite>
                <div className="hidden md:block w-1 h-6 bg-white/30 rounded-full"></div>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Productivity Philosophy</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call to Action */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Boost Your Productivity Today</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join millions who have transformed their workflow with our productivity ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/tools/general/password-generator" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Secure Your Digital Life
              </a>
              <a 
                href="/tools/general/unit-converter" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Convert Anything Instantly
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-foreground/70">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>All tools free to use</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>No registration required</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Regular feature updates</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}