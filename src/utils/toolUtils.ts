export const getToolUrl = (toolId: string, toolName: string, category: string) => {
  // Map tool IDs to actual folder names
  const toolIdMap: Record<string, string> = {
    'tool-1': 'water-monitor', // Daily Water Intake Calculator
    'tool-2': 'bmi-calculator', // BMI & Body Fat Percentage Estimator
    'tool-3': 'calorie-tracker', // Macro Nutrient Planner
    'tool-4': 'skincare-quiz', // Skin Type Identifier Quiz
    'tool-5': 'makeup-shade-finder', // Makeup Shade Finder
    'tool-6': 'hair-care', // Hair Porosity Test Guide
    'tool-7': 'stress-assessment', // Stress Level Assessment
    'tool-8': 'sleep-tracker', // Sleep Quality Tracker
    'tool-9': 'workout-planner', // Mindfulness Timer (using workout-planner as placeholder)
    'tool-10': 'skincare-routine', // Skincare Routine Builder
    'tool-11': 'calorie-tracker', // Calorie Burn Calculator
    'tool-12': 'ingredient-checker', // Ingredient Checker
    'tool-13': 'workout-planner', // Workout Planner
    'tool-14': 'unit-converter', // Meal Prep Calculator (using unit-converter as placeholder)
    'tool-15': 'hair-care', // Hair Growth Tracker (using hair-care as placeholder)
    'tool-16': 'stress-assessment', // Mood Tracker (using stress-assessment as placeholder)
    'tool-17': 'skincare-quiz', // Sun Protection Calculator (using skincare-quiz as placeholder)
    'tool-18': 'stress-assessment', // Period Tracker (using stress-assessment as placeholder)
    'tool-19': 'workout-planner', // Posture Checker (using workout-planner as placeholder)
    'tool-20': 'nail-design', // Nail Health Analyzer
    'tool-21': 'stress-assessment', // Allergy Symptom Tracker (using stress-assessment as placeholder)
    'tool-22': 'stress-assessment', // Eye Health Monitor (using stress-assessment as placeholder)
    'tool-23': 'makeup-shade-finder', // Teeth Whitening Planner (using makeup-shade-finder as placeholder)
    'tool-24': 'stress-assessment', // Voice Care Guide (using stress-assessment as placeholder)
    'tool-25': 'stress-assessment', // Foot Health Analyzer (using stress-assessment as placeholder)
    'tool-26': 'skincare-routine', // Hand Care Routine Builder (using skincare-routine as placeholder)
    'tool-27': 'skincare-routine', // Lip Health Monitor (using skincare-routine as placeholder)
    'tool-28': 'skincare-quiz', // Scalp Health Analyzer (using skincare-quiz as placeholder)
    'tool-29': 'skincare-routine', // Body Care Routine Builder
    'tool-30': 'stress-assessment', // Wellness Score Calculator (using stress-assessment as placeholder)
  };
  
  // If we have a specific mapping, use it
  if (toolIdMap[toolId]) {
    return `/tools/${category.toLowerCase()}/${toolIdMap[toolId]}`;
  }
  
  // Otherwise, try to match based on common names
  const lowerName = toolName.toLowerCase();
  if (lowerName.includes('water')) return `/tools/health/water-monitor`;
  if (lowerName.includes('bmi') || lowerName.includes('body mass')) return `/tools/health/bmi-calculator`;
  if (lowerName.includes('calorie') || lowerName.includes('burn') || lowerName.includes('macro')) return `/tools/health/calorie-tracker`;
  if (lowerName.includes('workout') || lowerName.includes('exercise') || lowerName.includes('fitness')) return `/tools/health/workout-planner`;
  if (lowerName.includes('sleep')) return `/tools/health/sleep-tracker`;
  if (lowerName.includes('stress') || lowerName.includes('mood') || lowerName.includes('wellness') || lowerName.includes('mindfulness')) return `/tools/health/stress-assessment`;
  if (lowerName.includes('step')) return `/tools/health/step-counter`;
  if (lowerName.includes('heart')) return `/tools/health/heart-rate`;
  if (lowerName.includes('blood')) return `/tools/health/blood-pressure`;
  if (lowerName.includes('medication')) return `/tools/health/medication-reminder`;
  if (lowerName.includes('skincare') || lowerName.includes('skin')) return `/tools/beauty/skincare-quiz`;
  if (lowerName.includes('makeup') || lowerName.includes('foundation')) return `/tools/beauty/makeup-shade-finder`;
  if (lowerName.includes('hair')) return `/tools/beauty/hair-care`;
  if (lowerName.includes('nail')) return `/tools/beauty/nail-design`;
  if (lowerName.includes('ingredient')) return `/tools/beauty/ingredient-checker`;
  if (lowerName.includes('unit') || lowerName.includes('converter')) return `/tools/general/unit-converter`;
  if (lowerName.includes('currency')) return `/tools/general/currency-exchange`;
  if (lowerName.includes('password')) return `/tools/general/password-generator`;
  if (lowerName.includes('qr') || lowerName.includes('code')) return `/tools/general/qr-code-generator`;
  if (lowerName.includes('random')) return `/tools/general/random-number-generator`;
  if (lowerName.includes('text') || lowerName.includes('formatter')) return `/tools/general/text-formatter`;
  if (lowerName.includes('timezone')) return `/tools/general/timezone-converter`;
  if (lowerName.includes('date')) return `/tools/general/date-calculator`;
  if (lowerName.includes('file')) return `/tools/general/file-converter`;
  if (lowerName.includes('loan')) return `/tools/general/loan-calculator`;
  if (lowerName.includes('calendar')) return `/tools/beauty/beauty-calendar`;
  if (lowerName.includes('product') && lowerName.includes('comparator')) return `/tools/beauty/product-comparator`;
  if (lowerName.includes('virtual') && lowerName.includes('makeup')) return `/tools/beauty/virtual-makeup`;
  if (lowerName.includes('skin') && lowerName.includes('analyzer')) return `/tools/beauty/skin-analyzer`;
  
  // Default to a generic path based on category
  const slug = lowerName
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  // Map categories to their directories
  const categoryMap: Record<string, string> = {
    'Health': 'health',
    'Beauty': 'beauty',
    'General': 'general',
    'Wellness': 'health',
    'Fitness': 'health'
  };
  
  const categorySlug = categoryMap[category] || category.toLowerCase();
  
  return `/tools/${categorySlug}/${slug}`;
};