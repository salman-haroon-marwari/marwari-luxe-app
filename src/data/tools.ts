// Tool data structure
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

// Comprehensive tools collection (30 total)
export const tools: Tool[] = [
  {
    id: 'tool-1',
    name: 'Daily Water Intake Calculator',
    description: 'Calculate your optimal daily water consumption based on body weight, activity level, and climate conditions.',
    category: 'Health',
    introduction: 'Proper hydration is essential for virtually every bodily function, from temperature regulation to joint lubrication. This calculator helps you determine the right amount of water for your unique needs based on scientific guidelines and individual factors.',
    benefits: [
      'Personalized hydration recommendations based on your specific stats',
      'Accounts for activity level, climate, and health conditions',
      'Helps prevent dehydration symptoms like headaches and fatigue',
      'Optimizes athletic performance and recovery'
    ],
    instructions: 'Enter your body weight in pounds or kilograms, select your daily activity level (sedentary, moderate, or active), and indicate your typical climate (cool, temperate, or hot). For athletes or those in extreme conditions, you may add additional ounces. The calculator will provide your daily water intake goal in both ounces and liters with a recommended distribution throughout the day.',
    tags: ['hydration', 'water intake', 'health calculator', 'daily tracking']
  },
  {
    id: 'tool-2',
    name: 'BMI & Body Fat Percentage Estimator',
    description: 'Estimate your body mass index and body fat percentage using simple measurements and demographic information.',
    category: 'Health',
    introduction: 'Beyond simple weight measurements, understanding your body composition provides deeper insights into health and fitness progress. This tool estimates both BMI and body fat percentage using easily obtained measurements, helping you track meaningful changes in your physique.',
    benefits: [
      'Calculates both BMI and body fat percentage for comprehensive analysis',
      'Uses multiple measurement points (waist, neck, hips) for accuracy',
      'Helps track progress over time with consistent measurements',
      'Provides health risk assessments based on results'
    ],
    instructions: 'Measure your waist at the narrowest point, neck circumference just below the larynx, and hip circumference at the widest point. Enter these measurements along with your height, weight, age, and gender. Take measurements in the morning before eating or drinking for consistency. The tool will provide your estimated BMI, body fat percentage, and health category classifications.',
    tags: ['bmi', 'body fat', 'fitness tracker', 'body composition']
  },
  {
    id: 'tool-3',
    name: 'Macro Nutrient Planner',
    description: 'Plan your daily macronutrient intake based on your goals, activity level, and dietary preferences.',
    category: 'Health',
    introduction: 'Achieving health and fitness goals requires understanding macronutrient needs. This planner calculates optimal protein, carbohydrate, and fat intake tailored to your objectives, whether you want to lose weight, gain muscle, or maintain your current status.',
    benefits: [
      'Customizes macros for specific goals (weight loss, muscle gain, maintenance)',
      'Adjusts for activity level and individual metabolism',
      'Provides meal distribution suggestions throughout the day',
      'Includes flexible dieting approaches and macro cycling options'
    ],
    instructions: 'Select your primary goal (weight loss, muscle gain, maintenance, or athletic performance), enter your stats (height, weight, age), choose your activity level (sedentary to very active), and specify any dietary restrictions. The tool will calculate your daily caloric needs and break down protein, carbs, and fats in grams, with timing recommendations for pre and post-workout nutrition.',
    tags: ['macros', 'nutrition', 'diet planning', 'meal prep']
  },
  {
    id: 'tool-4',
    name: 'Skin Type Identifier Quiz',
    description: 'Determine your specific skin type and receive personalized skincare recommendations.',
    category: 'Beauty',
    introduction: 'Effective skincare begins with understanding your unique skin type. This comprehensive quiz analyzes your skin characteristics, concerns, and reactions to various conditions to recommend the most suitable products and routines for your specific needs.',
    benefits: [
      'Identifies specific skin type (normal, dry, oily, combination, sensitive)',
      'Recommends targeted product categories and ingredients',
      'Suggests ingredient preferences to look for and avoid',
      'Provides seasonal skincare adjustments and routine modifications'
    ],
    instructions: 'Answer 15 detailed questions about your skin\'s appearance, behavior, and reactions to various conditions including cleansing, moisturizing, and seasonal changes. The quiz covers topics like pore size, oil production, sensitivity to products, and reaction to environmental factors. You\'ll receive a detailed skin type analysis with personalized product recommendations and a suggested daily routine.',
    tags: ['skin type', 'skincare quiz', 'personalized beauty', 'skin analysis']
  },
  {
    id: 'tool-5',
    name: 'Makeup Shade Finder',
    description: 'Find your perfect foundation and concealer shades with our virtual color matching tool.',
    category: 'Beauty',
    introduction: 'Finding the right makeup shade can be challenging, especially when shopping online. This tool uses your skin undertone and current shade references to recommend perfect matches from major cosmetic brands, ensuring you never buy the wrong foundation again.',
    benefits: [
      'Virtual shade matching technology with real-time adjustments',
      'Works with major brand foundations and concealers',
      'Accounts for undertone variations (cool, warm, neutral)',
      'Provides shade recommendations for different lighting conditions'
    ],
    instructions: 'Upload a clear selfie taken in natural light without makeup, or select from skin tone examples that match your current shade. Identify your current foundation shade and brand if you have one you love. The tool will analyze your skin tone and undertone, then provide matched recommendations from 20+ cosmetic brands including Fenty, MAC, NARS, and more, with specific shade names and undertone matches.',
    tags: ['makeup', 'foundation finder', 'shade matching', 'virtual try-on']
  },
  {
    id: 'tool-6',
    name: 'Hair Porosity Test Guide',
    description: 'Determine your hair porosity level and receive customized care recommendations.',
    category: 'Beauty',
    introduction: 'Hair porosity affects how your hair absorbs and retains moisture, impacting product effectiveness and styling results. Understanding your porosity level helps you choose the right products and techniques for optimal hair health and manageability.',
    benefits: [
      'Identifies hair porosity level (low, medium, high) accurately through simple tests',
      'Recommends suitable products and ingredients for your specific porosity',
      'Suggests styling techniques and heat protection methods',
      'Provides seasonal care adjustments and product timing guidance'
    ],
    instructions: 'Perform three simple tests: the float test (drop hair in water), the strand test (observe how water beads on hair), and the slip test (feel hair texture). Follow the interpretation guide to determine if your hair has low, medium, or high porosity. The tool will provide personalized product recommendations, ingredient preferences, and styling techniques tailored to your porosity level.',
    tags: ['hair care', 'porosity test', 'hair health', 'product matching']
  },
  {
    id: 'tool-7',
    name: 'Stress Level Assessment',
    description: 'Evaluate your current stress levels and receive coping strategies and resources.',
    category: 'Wellness',
    introduction: 'Chronic stress impacts physical and mental health significantly, affecting everything from sleep quality to immune function. This assessment helps you recognize stress patterns and provides evidence-based techniques for management and long-term wellness.',
    benefits: [
      'Comprehensive stress evaluation covering physical, emotional, and behavioral indicators',
      'Personalized coping strategies based on your specific stressors',
      'Resource recommendations for ongoing support and professional help',
      'Progress tracking and stress pattern identification over time'
    ],
    instructions: 'Complete a 20-question assessment covering physical symptoms (headaches, muscle tension), emotional responses (anxiety, irritability), and behavioral changes (sleep patterns, appetite). The assessment evaluates work stress, relationship stress, financial concerns, and health-related stress. You\'ll receive a stress score with interpretation and tailored management techniques including breathing exercises, time management strategies, and when to seek professional support.',
    tags: ['stress', 'mental health', 'wellness assessment', 'coping strategies']
  },
  {
    id: 'tool-8',
    name: 'Sleep Quality Tracker',
    description: 'Monitor your sleep patterns and receive personalized recommendations for better rest.',
    category: 'Wellness',
    introduction: 'Quality sleep is foundational to health and performance, affecting everything from cognitive function to immune system strength. This tracker analyzes your sleep habits and environmental factors to optimize your rest and recovery for better daily performance.',
    benefits: [
      'Sleep pattern analysis and insights into sleep quality factors',
      'Personalized improvement recommendations based on your habits',
      'Progress tracking over time with trend identification',
      'Integration with lifestyle factors affecting sleep quality'
    ],
    instructions: 'Log your sleep and wake times, rate sleep quality (1-10 scale), and note factors affecting rest including caffeine consumption, screen time before bed, exercise timing, room temperature, and stress levels. Track for at least 2 weeks to establish patterns. The tool will provide weekly insights, identify sleep disruptors, and offer customized suggestions for better sleep hygiene and environmental improvements.',
    tags: ['sleep', 'rest', 'sleep tracker', 'sleep hygiene']
  },
  {
    id: 'tool-9',
    name: 'Mindfulness Timer',
    description: 'Guided meditation timer with customizable intervals and gentle alarms for practice sessions.',
    category: 'Wellness',
    introduction: 'Consistent mindfulness practice reduces stress and enhances well-being. This timer helps establish and maintain a regular meditation routine with customizable session lengths, ambient sounds, and progress tracking to support your mental wellness journey.',
    benefits: [
      'Customizable session durations from 1 minute to 2 hours',
      'Gentle start and end notifications with ambient sound options',
      'Progress tracking and streak maintenance with motivational features',
      'Integration with breathing exercises and guided meditation options'
    ],
    instructions: 'Set your desired meditation length (1-120 minutes), choose from ambient sounds (rain, ocean, forest, silence), and select gentle alarm preferences (vibration, soft chime, gradual volume). Start sessions with inspirational quotes and track your practice consistency with daily streaks and monthly progress reports. The timer includes breathing exercise guides and mindfulness technique suggestions based on session length.',
    tags: ['meditation', 'mindfulness', 'timer', 'breathing exercises']
  },
  {
    id: 'tool-10',
    name: 'Skincare Routine Builder',
    description: 'Create a personalized daily skincare routine based on your skin type, concerns, and goals.',
    category: 'Beauty',
    introduction: 'Building an effective skincare routine can be overwhelming with countless products and conflicting advice. This tool creates a step-by-step routine tailored to your specific skin needs, concerns, and lifestyle, ensuring you use the right products in the correct order for maximum effectiveness.',
    benefits: [
      'Personalized routine based on your specific skin type and concerns',
      'Product recommendations with ingredient explanations and timing',
      'Morning and evening routine separation with detailed instructions',
      'Budget-friendly alternatives and routine adjustments for seasonal changes'
    ],
    instructions: 'Complete a detailed skin assessment including your skin type, primary concerns (acne, aging, dryness, sensitivity), current products used, and budget preferences. Indicate your lifestyle factors like travel frequency, time available for skincare, and any allergies. The tool will generate a comprehensive morning and evening routine with product recommendations, application order, timing between products, and ingredient explanations for each step.',
    tags: ['skincare', 'routine builder', 'personalized beauty', 'product recommendations']
  },
  {
    id: 'tool-11',
    name: 'Calorie Burn Calculator',
    description: 'Estimate calories burned during various activities and create personalized fitness plans.',
    category: 'Health',
    introduction: 'Understanding how many calories you burn during different activities helps you make informed decisions about exercise and nutrition. This calculator provides accurate estimates based on your personal stats and activity intensity, helping you optimize your fitness routine for weight management goals.',
    benefits: [
      'Accurate calorie burn estimates for 200+ activities and exercises',
      'Personalized fitness plans based on your goals and current fitness level',
      'Integration with nutrition tracking for comprehensive weight management',
      'Progress tracking and activity recommendations for optimal results'
    ],
    instructions: 'Enter your weight, height, age, and gender. Select your activity from the comprehensive list including sports, household chores, and daily activities. Specify duration and intensity level (light, moderate, vigorous). For exercise activities, you can also input heart rate data for more accurate calculations. The tool will provide total calories burned, MET values, and suggestions for activities that complement your fitness goals.',
    tags: ['calories', 'fitness', 'exercise tracking', 'weight management']
  },
  {
    id: 'tool-12',
    name: 'Ingredient Checker',
    description: 'Analyze cosmetic product ingredients for safety, effectiveness, and compatibility with your skin.',
    category: 'Beauty',
    introduction: 'Understanding cosmetic ingredients helps you make informed decisions about the products you use. This tool analyzes ingredient lists to identify potential irritants, beneficial components, and ingredient interactions, ensuring your beauty routine supports your skin health and personal values.',
    benefits: [
      'Safety analysis of ingredients with toxicity ratings and irritation potential',
      'Effectiveness ratings for active ingredients and their concentrations',
      'Compatibility checking for ingredient interactions and contraindications',
      'Alternative ingredient suggestions and product recommendations'
    ],
    instructions: 'Copy and paste the full ingredient list from any cosmetic product (makeup, skincare, hair care). The tool will analyze each ingredient for safety ratings (green, yellow, red), effectiveness for claimed benefits, potential irritants, and compatibility with common skin conditions. It will highlight beneficial ingredients, flag potential concerns, and suggest alternative products or ingredients that might better suit your needs.',
    tags: ['ingredients', 'cosmetic safety', 'product analysis', 'skin compatibility']
  },
  {
    id: 'tool-13',
    name: 'Workout Planner',
    description: 'Create personalized workout plans based on your fitness level, goals, and available equipment.',
    category: 'Fitness',
    introduction: 'Effective workout planning considers your current fitness level, available time, equipment access, and specific goals. This tool generates customized workout plans that progress appropriately and keep you motivated while minimizing injury risk and maximizing results.',
    benefits: [
      'Personalized workout plans based on your fitness level and specific goals',
      'Equipment-based exercise recommendations for home or gym settings',
      'Progressive overload planning and periodization for continuous improvement',
      'Injury prevention tips and form guidance with video demonstrations'
    ],
    instructions: 'Select your primary fitness goal (strength, endurance, weight loss, muscle gain, general fitness), indicate your current fitness level (beginner, intermediate, advanced), and specify available equipment (bodyweight only, basic home gym, full commercial gym). Enter your available time per session and preferred workout frequency. The tool will generate weekly plans with exercise selections, sets, reps, rest periods, and progression strategies.',
    tags: ['workout', 'fitness planning', 'exercise', 'strength training']
  },
  {
    id: 'tool-14',
    name: 'Meal Prep Calculator',
    description: 'Plan and calculate nutrition for weekly meal prep with portion control and macro tracking.',
    category: 'Health',
    introduction: 'Meal prepping saves time and supports consistent nutrition, but calculating portions and macros can be complex. This tool simplifies the process by helping you plan balanced meals, calculate nutritional content, and create shopping lists for efficient weekly preparation.',
    benefits: [
      'Nutrition calculations for entire meal prep plans with macro breakdowns',
      'Portion control guidance and serving size recommendations',
      'Shopping list generation based on planned recipes and ingredients',
      'Cost calculation and budget optimization for healthy eating'
    ],
    instructions: 'Select your dietary goal (weight loss, muscle gain, maintenance), enter your weekly calorie target, and choose preferred cuisines or dietary restrictions. Input the number of meals you want to prep per week and serving sizes. The tool will suggest recipes, calculate total nutrition per meal, generate a comprehensive shopping list with quantities, and provide cost estimates. You can adjust recipes and see real-time nutrition updates.',
    tags: ['meal prep', 'nutrition', 'meal planning', 'portion control']
  },
  {
    id: 'tool-15',
    name: 'Hair Growth Tracker',
    description: 'Monitor hair growth progress and receive personalized care recommendations for optimal results.',
    category: 'Beauty',
    introduction: 'Hair growth is a slow process that benefits from consistent tracking and proper care. This tool helps you monitor progress, identify factors affecting growth, and receive personalized recommendations to optimize your hair health and achieve your length goals.',
    benefits: [
      'Progress tracking with photo comparison and measurement logging',
      'Personalized hair care recommendations based on your growth patterns',
      'Identification of factors affecting growth (diet, stress, styling habits)',
      'Goal setting with realistic timelines and milestone celebrations'
    ],
    instructions: 'Take monthly photos from the same angles and distances, measure hair length at consistent points, and log factors that might affect growth including diet changes, stress levels, hair care routine modifications, and health events. The tool will track your progress, calculate average growth rates, identify patterns, and provide personalized recommendations for improving growth speed and hair health.',
    tags: ['hair growth', 'hair health', 'progress tracker', 'hair care']
  },
  {
    id: 'tool-16',
    name: 'Mood Tracker',
    description: 'Monitor daily mood patterns and identify triggers to improve mental wellness.',
    category: 'Wellness',
    introduction: 'Understanding mood patterns helps identify triggers and develop strategies for better mental health. This tracker helps you monitor daily emotions, identify patterns, and receive personalized insights to support your emotional well-being and mental resilience.',
    benefits: [
      'Daily mood tracking with customizable emotion categories and intensity ratings',
      'Pattern identification for triggers, seasonal changes, and lifestyle factors',
      'Personalized wellness recommendations based on your mood data',
      'Integration with sleep, exercise, and nutrition tracking for comprehensive wellness'
    ],
    instructions: 'Rate your daily mood on a scale of 1-10 and select primary emotions experienced. Note potential triggers such as sleep quality, stress events, social interactions, or dietary factors. Add optional details about activities, weather, or life events. The tool will generate weekly and monthly reports showing patterns, correlations, and personalized recommendations for improving mood stability and overall mental wellness.',
    tags: ['mood', 'mental health', 'emotional wellness', 'pattern tracking']
  },
  {
    id: 'tool-17',
    name: 'Sun Protection Calculator',
    description: 'Calculate personalized sun protection needs based on skin type, location, and activities.',
    category: 'Beauty',
    introduction: 'Proper sun protection prevents premature aging, skin cancer, and maintains skin health. This calculator determines your specific sun protection needs based on skin type, geographic location, and planned activities, ensuring you stay safe while enjoying outdoor time.',
    benefits: [
      'Personalized SPF recommendations based on your skin type and sun sensitivity',
      'Activity-specific protection timing and reapplication schedules',
      'Location-based UV index integration for real-time protection advice',
      'Comprehensive sun safety education and protection strategy recommendations'
    ],
    instructions: 'Select your skin type on the Fitzpatrick scale, enter your location and planned outdoor activities, and specify duration of sun exposure. Indicate if you\'ll be in direct sunlight, reflected surfaces (water, snow), or high altitude. The tool will calculate your minimum SPF requirement, recommend application timing and amounts, provide reapplication schedules, and suggest additional protection methods like clothing and shade timing.',
    tags: ['sun protection', 'SPF', 'skin safety', 'UV exposure']
  },
  {
    id: 'tool-18',
    name: 'Period Tracker',
    description: 'Track menstrual cycles, symptoms, and fertility windows with personalized health insights.',
    category: 'Health',
    introduction: 'Understanding your menstrual cycle helps with health awareness, family planning, and identifying potential issues. This tracker monitors cycles, symptoms, and fertility signs while providing personalized health insights and predictions based on your unique patterns.',
    benefits: [
      'Comprehensive cycle tracking with symptom logging and pattern recognition',
      'Fertility window prediction and family planning support',
      'Health insights and potential issue identification through data analysis',
      'Integration with mood, sleep, and exercise tracking for holistic health monitoring'
    ],
    instructions: 'Log the start and end dates of your menstrual periods, track symptoms (cramps, mood changes, energy levels), and note cervical mucus changes if tracking fertility. Record lifestyle factors like stress, exercise, and diet changes that might affect your cycle. The tool will predict future periods, identify fertile windows, and provide health insights based on cycle patterns and symptom correlations.',
    tags: ['period tracking', 'fertility', 'women\'s health', 'cycle monitoring']
  },
  {
    id: 'tool-19',
    name: 'Posture Checker',
    description: 'Assess your posture and receive personalized exercises and ergonomic recommendations.',
    category: 'Health',
    introduction: 'Good posture prevents pain, improves breathing, and enhances overall health. This tool evaluates your posture through simple self-assessments and provides targeted exercises and ergonomic adjustments to correct imbalances and maintain healthy alignment throughout daily activities.',
    benefits: [
      'Posture assessment with identification of common problem areas',
      'Personalized exercise routines targeting specific postural imbalances',
      'Ergonomic recommendations for workspaces and daily activities',
      'Progress tracking and improvement milestones with visual feedback'
    ],
    instructions: 'Perform a series of simple posture assessments including wall tests, shoulder blade positioning, and neck alignment checks. Answer questions about your daily activities, work setup, and any pain or discomfort experienced. The tool will identify postural issues, recommend specific exercises for correction, and provide ergonomic adjustments for your workspace, sleep setup, and daily routines.',
    tags: ['posture', 'ergonomics', 'physical therapy', 'pain prevention']
  },
  {
    id: 'tool-20',
    name: 'Nail Health Analyzer',
    description: 'Analyze nail appearance and receive personalized care recommendations for optimal nail health.',
    category: 'Beauty',
    introduction: 'Nails reflect overall health and require specific care for strength and appearance. This analyzer evaluates nail characteristics and provides personalized care routines, nutritional recommendations, and lifestyle adjustments to promote healthy nail growth and prevent common issues.',
    benefits: [
      'Nail health assessment based on appearance, texture, and growth patterns',
      'Personalized care routines with specific product and technique recommendations',
      'Nutritional guidance for supporting nail health from within',
      'Issue identification and prevention strategies for common nail problems'
    ],
    instructions: 'Upload clear photos of your nails showing the nail bed, cuticles, and overall appearance. Answer questions about your current nail care routine, diet, and any nail concerns (brittleness, discoloration, ridges). Note any recent changes in health, medications, or lifestyle factors. The tool will analyze your nail health, identify potential issues, and provide personalized care recommendations including products, techniques, and nutritional support.',
    tags: ['nail health', 'nail care', 'beauty health', 'nutritional support']
  },
  {
    id: 'tool-21',
    name: 'Allergy Symptom Tracker',
    description: 'Monitor allergy symptoms and identify triggers to better manage allergic reactions.',
    category: 'Health',
    introduction: 'Understanding allergy patterns helps you avoid triggers and manage symptoms effectively. This tracker monitors your allergic reactions, identifies potential triggers, and provides personalized management strategies to improve your quality of life and reduce allergic episodes.',
    benefits: [
      'Comprehensive symptom tracking with severity ratings and duration logging',
      'Trigger identification through pattern analysis and correlation mapping',
      'Personalized management strategies and avoidance recommendations',
      'Integration with weather, pollen counts, and environmental data for better prediction'
    ],
    instructions: 'Log daily allergy symptoms including type (sneezing, congestion, skin reactions), severity (mild, moderate, severe), and duration. Note potential triggers such as foods, environmental factors, pets, or seasonal changes. Record medication use and effectiveness. The tool will identify patterns, predict high-risk periods, and provide personalized avoidance strategies and treatment recommendations.',
    tags: ['allergies', 'symptom tracking', 'trigger identification', 'health management']
  },
  {
    id: 'tool-22',
    name: 'Eye Health Monitor',
    description: 'Track vision changes and receive recommendations for eye care and protection.',
    category: 'Health',
    introduction: 'Regular eye health monitoring helps detect changes early and maintain optimal vision. This tool tracks visual symptoms, screen time habits, and environmental factors affecting eye health, providing personalized recommendations for protection and care.',
    benefits: [
      'Vision change tracking with early detection of potential issues',
      'Screen time management recommendations and blue light protection strategies',
      'Personalized eye exercise routines and rest scheduling',
      'Nutritional guidance for supporting eye health and preventing age-related issues'
    ],
    instructions: 'Log any changes in vision including blurriness, eye strain, or difficulty focusing. Track daily screen time, reading habits, and environmental factors like lighting conditions. Note any eye discomfort, headaches, or fatigue related to visual tasks. The tool will monitor your eye health patterns, provide rest scheduling recommendations, and suggest exercises or lifestyle changes to maintain optimal vision and prevent digital eye strain.',
    tags: ['eye health', 'vision tracking', 'digital wellness', 'preventive care']
  },
  {
    id: 'tool-23',
    name: 'Teeth Whitening Planner',
    description: 'Create a personalized teeth whitening plan based on your current shade and sensitivity.',
    category: 'Beauty',
    introduction: 'Effective teeth whitening requires understanding your current tooth shade, sensitivity levels, and lifestyle factors. This planner creates a customized whitening schedule that maximizes results while minimizing sensitivity and maintaining oral health.',
    benefits: [
      'Personalized whitening schedule based on your specific tooth shade and goals',
      'Sensitivity management with customized product and timing recommendations',
      'Progress tracking with shade improvement monitoring and milestone celebrations',
      'Lifestyle integration with dietary and habit modifications for lasting results'
    ],
    instructions: 'Use the shade guide to determine your current tooth color and desired outcome. Indicate your tooth sensitivity level and any existing dental work. Note your lifestyle factors including coffee, tea, or wine consumption, smoking habits, and oral hygiene routine. The tool will create a customized whitening plan with product recommendations, timing schedules, and maintenance strategies for optimal results.',
    tags: ['teeth whitening', 'dental care', 'cosmetic dentistry', 'oral health']
  },
  {
    id: 'tool-24',
    name: 'Voice Care Guide',
    description: 'Protect and improve your voice with personalized exercises and lifestyle recommendations.',
    category: 'Wellness',
    introduction: 'Voice health affects communication, confidence, and professional performance. This guide provides personalized exercises, hydration strategies, and lifestyle modifications to maintain vocal health and improve voice quality for singers, speakers, and everyday communication.',
    benefits: [
      'Personalized vocal exercises targeting specific voice issues and goals',
      'Hydration and nutrition recommendations for optimal vocal cord health',
      'Lifestyle modifications to prevent voice strain and maintain vocal quality',
      'Professional guidance for singers, speakers, and voice-dependent professionals'
    ],
    instructions: 'Assess your current voice concerns including hoarseness, fatigue, or quality issues. Note your voice usage patterns (singing, public speaking, teaching) and any lifestyle factors affecting your voice. Indicate your goals whether for professional performance, health maintenance, or improvement. The tool will provide customized vocal exercises, hydration schedules, and lifestyle recommendations to support your vocal health and performance goals.',
    tags: ['voice care', 'vocal health', 'speech therapy', 'professional voice']
  },
  {
    id: 'tool-25',
    name: 'Foot Health Analyzer',
    description: 'Analyze foot problems and receive personalized care recommendations for comfort and health.',
    category: 'Health',
    introduction: 'Foot health impacts mobility, comfort, and overall well-being. This analyzer evaluates common foot issues and provides personalized care routines, footwear recommendations, and exercises to maintain healthy, pain-free feet for active living.',
    benefits: [
      'Foot problem identification and analysis of common conditions',
      'Personalized care routines with specific exercises and treatment recommendations',
      'Footwear guidance for different activities and foot types',
      'Prevention strategies for maintaining long-term foot health and mobility'
    ],
    instructions: 'Describe any foot pain, discomfort, or issues you\'re experiencing including location, intensity, and triggers. Note your daily activities, footwear preferences, and any medical conditions affecting your feet. The tool will analyze potential causes, recommend specific exercises and stretches, suggest appropriate footwear, and provide care routines to address your foot health concerns and prevent future problems.',
    tags: ['foot health', 'podiatry', 'pain management', 'mobility']
  },
  {
    id: 'tool-26',
    name: 'Hand Care Routine Builder',
    description: 'Create a personalized hand care routine based on your skin type and daily activities.',
    category: 'Beauty',
    introduction: 'Hands show age and require specialized care due to frequent washing and exposure. This routine builder creates a customized hand care regimen addressing your specific skin concerns, daily activities, and aesthetic goals for healthy, youthful-looking hands.',
    benefits: [
      'Personalized hand care routine based on your specific skin type and concerns',
      'Activity-specific product recommendations for different daily tasks and exposures',
      'Anti-aging strategies with targeted treatments for age spots and texture',
      'Seasonal adjustments and special occasion care for optimal hand appearance'
    ],
    instructions: 'Assess your hand skin condition including dryness, age spots, texture, and any specific concerns. Note your daily activities that affect your hands (cleaning, cooking, outdoor work) and your aesthetic goals. Indicate your preferred product types (natural, luxury, budget-friendly). The tool will create a comprehensive hand care routine with morning and evening steps, seasonal adjustments, and special treatment recommendations.',
    tags: ['hand care', 'anti-aging', 'skincare routine', 'beauty maintenance']
  },
  {
    id: 'tool-27',
    name: 'Lip Health Monitor',
    description: 'Track lip condition and receive personalized care recommendations for healthy, hydrated lips.',
    category: 'Beauty',
    introduction: 'Lip health affects both comfort and appearance, requiring specialized care different from facial skin. This monitor tracks lip condition changes and provides personalized recommendations for hydration, protection, and treatment of common lip issues.',
    benefits: [
      'Lip condition tracking with identification of dryness, cracking, or color changes',
      'Personalized hydration and protection strategies based on your specific needs',
      'Product recommendations for different lip concerns and seasonal variations',
      'Prevention strategies for maintaining healthy, smooth lips year-round'
    ],
    instructions: 'Rate your daily lip condition including hydration, smoothness, and any discomfort. Note factors affecting your lips such as weather, lip products used, and any irritation or allergic reactions. Track seasonal changes and special occasions that impact lip health. The tool will provide personalized care recommendations including hydration schedules, product suggestions, and protective measures for optimal lip health.',
    tags: ['lip health', 'hydration', 'skincare', 'preventive care']
  },
  {
    id: 'tool-28',
    name: 'Scalp Health Analyzer',
    description: 'Analyze scalp condition and receive personalized hair care recommendations for optimal scalp health.',
    category: 'Beauty',
    introduction: 'Scalp health directly affects hair quality, growth, and overall hair care success. This analyzer evaluates your scalp condition and provides targeted recommendations for cleansing, treatment, and maintenance to support healthy hair and scalp environment.',
    benefits: [
      'Scalp condition analysis with identification of common issues and imbalances',
      'Personalized hair care recommendations based on your specific scalp type',
      'Treatment strategies for dandruff, oiliness, dryness, and sensitivity',
      'Maintenance routines for long-term scalp health and hair growth support'
    ],
    instructions: 'Describe your scalp condition including oiliness, dryness, flakiness, or sensitivity. Note any scalp issues like itching, redness, or irritation. Indicate your hair type and current hair care routine. The tool will analyze your scalp health, recommend appropriate products and techniques, and provide a customized scalp care routine to address your specific concerns and support healthy hair growth.',
    tags: ['scalp health', 'hair care', 'dandruff treatment', 'hair growth']
  },
  {
    id: 'tool-29',
    name: 'Body Care Routine Builder',
    description: 'Create a comprehensive body care routine addressing your specific skin concerns and goals.',
    category: 'Beauty',
    introduction: 'Body skin requires different care than facial skin due to varying thickness, exposure, and function. This routine builder creates a personalized body care regimen addressing your specific concerns, lifestyle factors, and aesthetic goals for healthy, radiant body skin.',
    benefits: [
      'Personalized body care routine based on your specific skin type and concerns',
      'Targeted treatment recommendations for common body skin issues',
      'Seasonal adjustments and special occasion care for optimal results',
      'Product recommendations with ingredient explanations and application techniques'
    ],
    instructions: 'Assess your body skin concerns including dryness, cellulite, stretch marks, or aging signs. Note your lifestyle factors affecting body skin such as sun exposure, exercise habits, and clothing choices. Indicate your aesthetic goals and preferred product types. The tool will create a comprehensive body care routine with daily and weekly treatments, seasonal adjustments, and special care recommendations.',
    tags: ['body care', 'skincare routine', 'anti-aging', 'body health']
  },
  {
    id: 'tool-30',
    name: 'Wellness Score Calculator',
    description: 'Calculate your overall wellness score and receive personalized improvement recommendations.',
    category: 'Wellness',
    introduction: 'Wellness encompasses physical, mental, and emotional health working together for optimal quality of life. This calculator evaluates multiple wellness dimensions and provides a comprehensive score with targeted recommendations for improvement in areas needing attention.',
    benefits: [
      'Comprehensive wellness assessment covering physical, mental, and emotional health',
      'Personalized improvement recommendations based on your specific wellness gaps',
      'Progress tracking and milestone celebration for sustained motivation',
      'Integration with other health tools for holistic wellness management'
    ],
    instructions: 'Complete a comprehensive assessment covering physical health (exercise, nutrition, sleep), mental wellness (stress, mood, cognitive function), and emotional well-being (relationships, purpose, satisfaction). Answer questions about your current habits, challenges, and goals in each area. The tool will calculate your overall wellness score, identify areas for improvement, and provide personalized action plans with specific recommendations and timelines for achieving better balance and health.',
    tags: ['wellness', 'health assessment', 'lifestyle', 'holistic health']
  }
];