'use client';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function HealthToolsPage() {
  // Enhanced tools data with unique features and NEW badges
  const tools = [
    {
      id: 1,
      name: 'Advanced BMI Analyzer',
      description: 'Comprehensive body composition analysis with muscle mass, fat percentage, and metabolic age calculations.',
      icon: '/tool-icons/bmi.svg',
      path: '/tools/health/bmi-calculator',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30',
      isNew: true,
      features: ['Body Fat %', 'Muscle Mass', 'Metabolic Age'],
    },
    {
      id: 2,
      name: 'Smart Calorie Intelligence',
      description: 'AI-powered nutrition tracking with macro-nutrient optimization and deficiency alerts.',
      icon: '/tool-icons/calorie.svg',
      path: '/tools/health/calorie-tracker',
      color: 'from-amber-600 to-orange-700',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30',
      isNew: true,
      features: ['Macro Tracking', 'Deficiency Alerts', 'Recipe Suggestions'],
    },
    {
      id: 3,
      name: 'Hydration Precision Monitor',
      description: 'Personalized water intake recommendations based on activity, climate, and health markers.',
      icon: '/tool-icons/water.svg',
      path: '/tools/health/water-monitor',
      color: 'from-cyan-600 to-blue-700',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30',
      isNew: false,
      features: ['Climate Adjust', 'Activity Sync', 'Electrolyte Balance'],
    },
    {
      id: 4,
      name: 'Sleep Architecture Optimizer',
      description: 'Comprehensive sleep analysis with circadian rhythm alignment and environmental recommendations.',
      icon: '/tool-icons/sleep.svg',
      path: '/tools/health/sleep-tracker',
      color: 'from-violet-600 to-purple-700',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30',
      isNew: true,
      features: ['Cycle Analysis', 'Environment Tips', 'Wake-Up Optimal'],
    },
    {
      id: 5,
      name: 'Cardiovascular Health Tracker',
      description: 'Advanced heart rate monitoring with variability analysis and cardiovascular risk assessment.',
      icon: '/tool-icons/heart.svg',
      path: '/tools/health/heart-rate',
      color: 'from-red-600 to-pink-700',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30',
      isNew: true,
      features: ['HRV Analysis', 'Risk Score', 'Recovery Metrics'],
    },
    {
      id: 6,
      name: 'Activity & Movement Analyzer',
      description: 'Comprehensive activity tracking with movement pattern analysis and fitness level assessment.',
      icon: '/tool-icons/steps.svg',
      path: '/tools/health/step-counter',
      color: 'from-emerald-600 to-green-700',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30',
      isNew: false,
      features: ['Pattern Analysis', 'Fitness Level', 'Goal Tracking'],
    },
    {
      id: 7,
      name: 'Blood Pressure Dashboard',
      description: 'Professional-grade blood pressure tracking with trend analysis and health insights.',
      icon: '/tool-icons/blood-pressure.svg',
      path: '/tools/health/blood-pressure',
      color: 'from-rose-600 to-red-700',
      bgColor: 'bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/30 dark:to-red-900/30',
      isNew: true,
      features: ['Trend Analysis', 'Risk Insights', 'Medication Tracking'],
    },
    {
      id: 8,
      name: 'Stress & Recovery Index',
      description: 'Comprehensive stress assessment with personalized recovery recommendations and coping strategies.',
      icon: '/tool-icons/stress.svg',
      path: '/tools/health/stress-assessment',
      color: 'from-purple-600 to-fuchsia-700',
      bgColor: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/30',
      isNew: true,
      features: ['Recovery Score', 'Coping Strategies', 'Biofeedback'],
    },
    {
      id: 9,
      name: 'Medication Management Pro',
      description: 'Intelligent medication tracking with refill reminders and interaction checking.',
      icon: '/tool-icons/medication.svg',
      path: '/tools/health/medication-reminder',
      color: 'from-teal-600 to-cyan-700',
      bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30',
      isNew: false,
      features: ['Interaction Check', 'Refill Alerts', 'History Tracking'],
    },
    {
      id: 10,
      name: 'Personalized Fitness Planner',
      description: 'AI-generated workout plans with progress tracking and adaptive difficulty adjustment.',
      icon: '/tool-icons/workout.svg',
      path: '/tools/health/workout-planner',
      color: 'from-amber-600 to-yellow-700',
      bgColor: 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30',
      isNew: true,
      features: ['AI Plans', 'Progress Tracking', 'Adaptive Difficulty'],
    },
  ];

  // Enhanced health tips data
  const healthTips = [
    {
      id: 1,
      title: "Optimize Your Hydration",
      description: "Drink water consistently throughout the day rather than in large quantities. Add electrolytes during intense exercise for better absorption.",
      icon: "💧",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Master Your Movement",
      description: "Incorporate both cardio and strength training. Vary your activities to prevent plateaus and reduce injury risk while keeping workouts engaging.",
      icon: "🏃",
      color: "from-emerald-500 to-green-500",
    },
    {
      id: 3,
      title: "Fuel Your Body Right",
      description: "Focus on whole foods with diverse colors. Time your meals around workouts for optimal performance and recovery. Listen to your body's hunger cues.",
      icon: "🥗",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      title: "Prioritize Quality Sleep",
      description: "Maintain consistent sleep/wake times. Create a cool, dark environment. Avoid screens 1 hour before bed. Develop a relaxing pre-sleep routine.",
      icon: "😴",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  // Enhanced health statistics
  const healthStats = [
    {
      value: "85%",
      label: "of users report improved energy with consistent tracking",
      icon: "⚡",
    },
    {
      value: "3.5x",
      label: "faster health improvements with personalized plans",
      icon: "📈",
    },
    {
      value: "92%",
      label: "of individuals achieve better sleep with optimization",
      icon: "🌙",
    },
    {
      value: "78%",
      label: "report reduced stress with regular monitoring",
      icon: "😌",
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 opacity-90"></div>
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    Precision Health Monitoring
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Transform Your Wellness With <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">Advanced Tools</span>
                  </h1>
                  <p className="text-xl mb-8 max-w-3xl opacity-90 leading-relaxed">
                    Unlock your body's potential with our comprehensive suite of health monitoring tools. 
                    From body composition analysis to sleep optimization, we provide the insights you need for optimal wellness.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#tools" 
                      className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Health Tools
                    </a>
                    <a 
                      href="#tips" 
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Wellness Tips
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Health Statistics with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {healthStats.map((stat, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Precision Health Tools</h2>
                <p className="text-foreground/70 max-w-2xl">Data-driven insights for optimizing your wellness journey</p>
              </div>
              <a href="/categories/health-wellness" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Explore Wellness Products
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
          
          {/* Enhanced Health Tips Section */}
          <section id="tips" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Evidence-Based Wellness Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthTips.map((tip) => (
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
          
          {/* Enhanced Wellness Quote */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-bold mb-6">
                "The greatest wealth is health. Take care of your body. It's the only place you have to live."
              </blockquote>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <cite className="text-lg">- Jim Rohn</cite>
                <div className="hidden md:block w-1 h-6 bg-white/30 rounded-full"></div>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Wellness Philosophy</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call to Action */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Begin Your Health Transformation</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join thousands who have unlocked their optimal health with our comprehensive wellness tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/tools/health/bmi-calculator" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Analyze Your Body Composition
              </a>
              <a 
                href="/tools/health/workout-planner" 
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Create Personalized Fitness Plan
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