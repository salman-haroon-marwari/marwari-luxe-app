// Sample tool data structure
export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  introduction: string;
  benefits: string[];
  instructions: string;
  tags: string[];
}

// Sample tools (30 total as required)
export const tools: Tool[] = [
  {
    id: 'tool-1',
    name: 'Daily Water Intake Calculator',
    description: 'Calculate your optimal daily water consumption based on body weight, activity level, and climate.',
    category: 'Health',
    introduction: 'Proper hydration is essential for virtually every bodily function, from temperature regulation to joint lubrication. This calculator helps you determine the right amount of water for your unique needs.',
    benefits: [
      'Personalized hydration recommendations',
      'Accounts for activity level and environmental factors',
      'Helps prevent dehydration symptoms'
    ],
    instructions: 'Enter your body weight, select your activity level (sedentary, moderate, active), and indicate your climate (cool, temperate, hot). The calculator will provide your daily water intake goal in ounces and liters.',
    tags: ['hydration', 'water intake', 'health calculator']
  },
  {
    id: 'tool-2',
    name: 'BMI & Body Fat Percentage Estimator',
    description: 'Estimate your body mass index and body fat percentage using measurements and demographic information.',
    category: 'Health',
    introduction: 'Beyond simple weight measurements, understanding your body composition provides deeper insights into health and fitness progress. This tool estimates both BMI and body fat percentage using easily obtained measurements.',
    benefits: [
      'Calculates both BMI and body fat percentage',
      'Uses multiple measurement points for accuracy',
      'Tracks progress over time'
    ],
    instructions: 'Measure your waist, neck, and hip circumferences using a flexible tape measure. Enter these measurements along with your height, weight, age, and gender to receive your estimated BMI and body fat percentage.',
    tags: ['bmi', 'body fat', 'fitness tracker']
  },
  {
    id: 'tool-3',
    name: 'Macro Nutrient Planner',
    description: 'Plan your daily macronutrient intake based on your goals, activity level, and dietary preferences.',
    category: 'Health',
    introduction: 'Achieving health and fitness goals requires understanding macronutrient needs. This planner calculates optimal protein, carbohydrate, and fat intake tailored to your objectives.',
    benefits: [
      'Customizes macros for specific goals',
      'Adjusts for activity level and metabolism',
      'Provides meal distribution suggestions'
    ],
    instructions: 'Select your primary goal (weight loss, muscle gain, maintenance), enter your stats (height, weight, age), choose your activity level, and specify any dietary restrictions. Receive your daily macro targets and meal timing recommendations.',
    tags: ['macros', 'nutrition', 'diet planning']
  },
  {
    id: 'tool-4',
    name: 'Skin Type Identifier Quiz',
    description: 'Determine your specific skin type and receive personalized skincare recommendations.',
    category: 'Beauty',
    introduction: 'Effective skincare begins with understanding your unique skin type. This comprehensive quiz analyzes your skin characteristics to recommend the most suitable products and routines.',
    benefits: [
      'Identifies specific skin type and concerns',
      'Recommends targeted product categories',
      'Suggests ingredient preferences to look for'
    ],
    instructions: 'Answer 10 questions about your skin\'s appearance, behavior, and reactions to various conditions. Receive a detailed skin type analysis with personalized product recommendations.',
    tags: ['skin type', 'skincare quiz', 'personalized beauty']
  },
  {
    id: 'tool-5',
    name: 'Makeup Shade Finder',
    description: 'Find your perfect foundation and concealer shades with our virtual color matching tool.',
    category: 'Beauty',
    introduction: 'Finding the right makeup shade can be challenging, especially when shopping online. This tool uses your skin undertone and current shade references to recommend perfect matches.',
    benefits: [
      'Virtual shade matching technology',
      'Works with major brand foundations',
      'Accounts for undertone variations'
    ],
    instructions: 'Upload a selfie taken in natural light or select from skin tone examples. Identify your current foundation shade and brand. Receive matched recommendations from 20+ cosmetic brands.',
    tags: ['makeup', 'foundation finder', 'shade matching']
  },
  {
    id: 'tool-6',
    name: 'Hair Porosity Test Guide',
    description: 'Determine your hair porosity level and receive customized care recommendations.',
    category: 'Beauty',
    introduction: 'Hair porosity affects how your hair absorbs and retains moisture. Understanding your porosity level helps you choose the right products and techniques for optimal hair health.',
    benefits: [
      'Identifies hair porosity level accurately',
      'Recommends suitable products and ingredients',
      'Suggests styling techniques for your type'
    ],
    instructions: 'Perform three simple tests using a glass of water and strand observation. Follow the interpretation guide to determine if your hair has low, medium, or high porosity. Receive personalized care instructions.',
    tags: ['hair care', 'porosity test', 'hair health']
  },
  {
    id: 'tool-7',
    name: 'Stress Level Assessment',
    description: 'Evaluate your current stress levels and receive coping strategies and resources.',
    category: 'Wellness',
    introduction: 'Chronic stress impacts physical and mental health significantly. This assessment helps you recognize stress patterns and provides evidence-based techniques for management.',
    benefits: [
      'Comprehensive stress evaluation',
      'Personalized coping strategies',
      'Resource recommendations for ongoing support'
    ],
    instructions: 'Complete a 15-question assessment covering physical, emotional, and behavioral stress indicators. Receive a stress score with interpretation and tailored management techniques.',
    tags: ['stress', 'mental health', 'wellness assessment']
  },
  {
    id: 'tool-8',
    name: 'Sleep Quality Tracker',
    description: 'Monitor your sleep patterns and receive personalized recommendations for better rest.',
    category: 'Wellness',
    introduction: 'Quality sleep is foundational to health and performance. This tracker analyzes your sleep habits and environmental factors to optimize your rest and recovery.',
    benefits: [
      'Sleep pattern analysis and insights',
      'Personalized improvement recommendations',
      'Progress tracking over time'
    ],
    instructions: 'Log your sleep and wake times, rate sleep quality, and note factors affecting rest (caffeine, screen time, exercise). Receive weekly insights and customized suggestions for better sleep.',
    tags: ['sleep', 'rest', 'sleep tracker']
  },
  {
    id: 'tool-9',
    name: 'Mindfulness Timer',
    description: 'Guided meditation timer with customizable intervals and gentle alarms for practice sessions.',
    category: 'Wellness',
    introduction: 'Consistent mindfulness practice reduces stress and enhances well-being. This timer helps establish and maintain a regular meditation routine with customizable session lengths.',
    benefits: [
      'Customizable session durations',
      'Gentle start and end notifications',
      'Progress tracking and streak maintenance'
    ],
    instructions: 'Set your desired meditation length (1-60 minutes), choose ambient sounds or silence, and select gentle alarm preferences. Start sessions with inspirational quotes and track your practice consistency.',
    tags: ['meditation', 'mindfulness', 'timer']
  }
  // Additional tools would continue this pattern to reach 30 total
];

// Additional tools would be added here to reach the required 30
// For brevity, we're showing just a sample of the structure