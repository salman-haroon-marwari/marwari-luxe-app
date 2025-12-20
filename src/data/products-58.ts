// Sample product data structure
export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string; // New field for detailed description on product page
  price: number;
  imageUrl: string;
  category: string;
  tags: string[];
  benefits: string[];
  detailedBenefits?: string[]; // New field for additional benefits on product page
  buyNowUrl: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

// Custom product catalog with real images
export const products: Product[] = [
  // Health & Wellness Products
  {
    id: 'health-001',
    name: 'Fashion Women’s Smart Watch – Waterproof Fitness Tracker with Heart Rate & Health Monitor',
    description: 'Stay stylish and connected with the Fashion Women’s Smart Watch, designed exclusively for women who want a balance of beauty, performance, and practicality.',
    detailedDescription: 'Stay stylish and connected with the Fashion Women\'s Smart Watch, designed exclusively for women who want a balance of beauty, performance, and practicality. Featuring a 1.08-inch HD LCD color display with anti-fall tempered glass, this elegant smartwatch blends modern tech with a feminine touch.',
    price: 27.78,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866882/hpd-1_hk20wx.png',
    category: 'Health & Wellness',
    tags: ['fitness tracker', 'heart rate monitor', 'waterproof', 'smartwatch'],
    benefits: [
      '24/7 Heart Rate Monitoring',
      'Waterproof Design',
      '7-Day Battery Life'
    ],
    detailedBenefits: [
      '24/7 Heart Rate Monitoring: Continuous tracking of your heart rate throughout the day and night',
      'Waterproof Design for Swimming: IP68 rating allows you to wear it while swimming and showering',
      '7-Day Battery Life: Long-lasting battery that keeps your watch powered for up to a week',
      'Sleep Tracking: Monitors sleep quality and provides insights to improve your rest',
      'Activity Recognition: Automatically detects and tracks various exercises like walking, running, and cycling',
      'Smart Notifications: Receive calls, texts, and app notifications directly on your wrist'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/fashion-womens-smart-watch-waterproof-wearable-device-heart-rate-monitor-sports-smartwatch-for-women-ladies-p-31D99CF9-2969-473E-A5D7-DEBC5D626C56.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.8,
    reviewCount: 1240
  },
  {
    id: 'health-002',
    name: 'Bluetooth Smart Sports Bracelet – Waterproof Fitness Tracker with Heart Rate & Sleep Monitor',
    description: 'The Bluetooth Smart Sports Bracelet is your all-in-one fitness companion designed to keep you moving, tracking, and performing your best.',
    detailedDescription: 'The Bluetooth Smart Sports Bracelet is your all-in-one fitness companion designed to keep you moving, tracking, and performing your best. Featuring a 0.96-inch TFT color touch screen, it displays your health data clearly—even under sunlight—so you can stay focused on your goals, not your gadgets.',
    price: 4.05,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866880/hpd-2_dfgoxr.jpg',
    category: 'Health & Wellness',
    tags: ['sports bracelet', 'fitness tracker', 'heart rate monitor', 'sleep monitor'],
    benefits: [
      'Heart Rate Monitoring',
      'Sleep Tracking',
      'Waterproof Design'
    ],
    detailedBenefits: [
      'Continuous Heart Rate Monitoring: Tracks your heart rate 24/7 for better health insights',
      'Advanced Sleep Analysis: Monitors sleep stages to help improve sleep quality',
      'Waterproof Construction: Withstands water exposure for pool workouts and rainy days',
      'Multiple Sport Modes: Automatically recognizes and tracks various exercise activities',
      'Long Battery Life: Up to 7 days of usage on a single charge',
      'Smartphone Notifications: Receive calls, messages, and app alerts directly on your wrist'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/bluetooth-smart-sports-bracelet-color-screen-electronic-watch-p-1433725485568888832.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1090
  },
  {
    id: 'health-003',
    name: 'Mushroom Soft Candy Dietary Supplement Vegetarian Nutrition',
    description: 'Efficacy: hair dye protection, strong hair quality, smooth pendant, fragile split care, hair dye perm injury care, improve frizzy hair.',
    detailedDescription: 'Efficacy: hair dye protection, strong hair quality, smooth pendant, fragile split care, hair dye perm injury care, improve frizzy hair. Color classification: red. Net content: 80 tablets. Category: soft candy.',
    price: 3.16,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866918/hpd-3_evvatf.jpg',
    category: 'Health & Wellness',
    tags: ['hair care', 'dietary supplement', 'vegetarian', 'nutrition'],
    benefits: [
      'Hair Dye Protection',
      'Strengthens Hair',
      'Reduces Frizz'
    ],
    detailedBenefits: [
      'Hair Dye Protection: Helps protect hair color from fading and damage',
      'Strengthens Hair Quality: Improves hair strength and reduces breakage',
      'Smooths Hair Texture: Makes hair smoother and easier to manage',
      'Repairs Damaged Hair: Helps repair hair that has been damaged by perms or coloring',
      'Reduces Frizz: Controls frizz for a smoother, more polished look',
      'Vegetarian Friendly: Made with plant-based ingredients suitable for vegetarians'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/mushroom-soft-candy-dietary-supplement-vegetarian-nutrition-p-2412180231081601900.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.3,
    reviewCount: 1150
  },
  {
    id: 'health-004',
    name: 'Memory Foam U-Shaped Neck Pillow – Ergonomic Travel Pillow for Cervical Support & Comfort',
    description: 'Experience real comfort wherever you go with the Memory Foam U-Shaped Cervical Spine Pillow.',
    detailedDescription: 'Experience real comfort wherever you go with the Memory Foam U-Shaped Cervical Spine Pillow. Designed with a focus on neck and spine support, this pillow provides gentle cushioning that adapts perfectly to your natural curve, easing tension and preventing stiffness during long travel or work hours.',
    price: 3.69,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867399/hpd-4_iedvay.jpg',
    category: 'Health & Wellness',
    tags: ['travel pillow', 'neck support', 'memory foam', 'ergonomic'],
    benefits: [
      'Cervical Support',
      'Memory Foam Comfort',
      'Ergonomic Design'
    ],
    detailedBenefits: [
      'Optimal Cervical Support: U-shaped design cradles your neck for proper spinal alignment',
      'Memory Foam Cushioning: Adapts to your body shape for personalized comfort',
      'Ergonomic Travel Design: Perfect for airplanes, cars, or office chairs',
      'Reduces Neck Pain: Alleviates tension and stiffness from prolonged sitting',
      'Improves Sleep Quality: Supports better rest during travel or at your desk',
      'Portable & Lightweight: Easy to carry and store when not in use'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/memory-foam-u-shaped-cervical-spine-neck-portable-u-shaped-pillow-p-2507171307051611100.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1120
  },
  {
    id: 'health-005',
    name: 'Smart Ring With Heart Rate ECG ER08 Sleep And Other Health Sports Remote',
    description: 'This Smart Health Ring ER08 is more than just a fitness gadget — it’s your personal wellness tracker that fits right on your finger.',
    detailedDescription: 'This Smart Health Ring ER08 is more than just a fitness gadget — it’s your personal wellness tracker that fits right on your finger. Designed for people who want real-time health insights without bulky smartwatches, it helps you stay connected to your body’s vital signs effortlessly.',
    price: 23.05,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867419/hpd-5_b0j5np.jpg',
    category: 'Health & Wellness',
    tags: ['smart ring', 'heart rate', 'ECG', 'sleep monitor'],
    benefits: [
      'Continuous Heart Rate Monitoring',
      'ECG Functionality',
      'Sleep Analysis'
    ],
    detailedBenefits: [
      'Continuous Heart Rate Monitoring: Tracks your heart rate throughout the day and night',
      'Medical-Grade ECG: Records single-lead electrocardiograms for heart health assessment',
      'Comprehensive Sleep Analysis: Monitors sleep stages and provides insights for better rest',
      'Unobtrusive Design: Discreet wearable that doesn\'t interfere with daily activities',
      'All-Day Activity Tracking: Monitors steps, calories burned, and active minutes',
      'Smartphone Integration: Syncs with your phone to deliver insights and notifications'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/smart-ring-with-heart-rate-ecg-er08-sleep-and-other-health-sports-remote-p-2509280346241625300.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1280
  },
  {
    id: 'health-006',
    name: 'Googeer Hyaluronic Acid Protein Powder Body Treatment',
    description: 'Revitalize your skin with the Googeer Hyaluronic Acid Protein Powder Body Treatment.',
    detailedDescription: 'Revitalize your skin with the Googeer Hyaluronic Acid Protein Powder Body Treatment, a premium body care formula designed to deeply hydrate, nourish, and rejuvenate tired skin. Infused with hyaluronic acid and protein-rich ingredients, this powder treatment helps your skin retain moisture, restore elasticity, and promote a naturally youthful glow.',
    price: 2.11,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867773/hpd-6_rxnujb.jpg',
    category: 'Health & Wellness',
    tags: ['skincare', 'hyaluronic acid', 'protein', 'body treatment'],
    benefits: [
      'Deep Hydration',
      'Skin Elasticity',
      'Anti-Aging Properties'
    ],
    detailedBenefits: [
      'Intense Hydration: Hyaluronic acid holds up to 1000x its weight in water for plump, moisturized skin',
      'Improves Skin Elasticity: Protein helps restore skin\'s firmness and bounce',
      'Anti-Aging Benefits: Reduces the appearance of fine lines and wrinkles',
      'Nourishes Skin: Delivers essential nutrients to revitalize tired skin',
      'Promotes Youthful Glow: Restores skin\'s natural radiance and vitality',
      'Easy to Use: Simple powder form that can be mixed into your favorite skincare products'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/googeer-hyaluronic-acid-protein-powder-body-treatment-p-2503170149431605900.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1360
  },
  {
    id: 'health-007',
    name: 'Dietary Supplement Body Treatment – 60ml Liquid Formula for Full-Body Nourishment & Skin Vitality',
    description: 'The Dietary Supplement Body Treatment is a liquid body care formula designed to rejuvenate your skin from the outside in.',
    detailedDescription: 'The Dietary Supplement Body Treatment is a liquid body care formula designed to rejuvenate your skin from the outside in. Packed with nutrient-rich active ingredients, this treatment helps nourish, hydrate, and restore balance to tired or stressed skin.',
    price: 1.55,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867832/hpd-7_gdvdlj.jpg',
    category: 'Health & Wellness',
    tags: ['body treatment', 'dietary supplement', 'skin care', 'hydration'],
    benefits: [
      'Full-Body Nourishment',
      'Hydration Boost',
      'Skin Balance Restoration'
    ],
    detailedBenefits: [
      'Complete Body Nourishment: Delivers essential nutrients to revitalize your skin',
      'Intensive Hydration: Deeply moisturizes to combat dryness and dehydration',
      'Restores Skin Balance: Helps normalize skin function and reduce irritation',
      'Nutrient-Rich Formula: Packed with vitamins and minerals for optimal skin health',
      'Liquid Application: Easy-to-use format that absorbs quickly into the skin',
      'Suitable for All Skin Types: Gentle formula appropriate for sensitive skin'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/dietary-supplement-body-treatment-p-2409290354561600400.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.2,
    reviewCount: 1440
  },
  {
    id: 'health-008',
    name: 'Q9 Smartwatch – Waterproof Fitness Tracker with Heart Rate, Blood Pressure & Sleep Monitor (Compatible with Android & iPhone)',
    description: 'Meet the Q9 Smartwatch, a sleek and feature-packed fitness tracker that keeps your health, activity, and notifications right on your wrist.',
    detailedDescription: 'Meet the Q9 Smartwatch, a sleek and feature-packed fitness tracker that keeps your health, activity, and notifications right on your wrist. Designed for both men and women, this smartwatch is compatible with Android and iPhone devices, offering seamless Bluetooth connectivity and a full suite of wellness tracking tools.',
    price: 18.00,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867834/hpd-8_pybsfc.jpg',
    category: 'Health & Wellness',
    tags: ['smartwatch', 'fitness tracker', 'blood pressure', 'android', 'iphone'],
    benefits: [
      'Heart Rate Monitoring',
      'Blood Pressure Tracking',
      'Multi-Device Compatibility'
    ],
    detailedBenefits: [
      'Comprehensive Health Monitoring: Tracks heart rate, blood pressure, and sleep patterns',
      'Universal Compatibility: Works seamlessly with both Android and iPhone devices',
      'Waterproof Design: Resistant to water damage for worry-free wear',
      'Smart Notifications: Receive calls, texts, and app alerts directly on your wrist',
      'Multiple Sport Modes: Tracks various activities including running, cycling, and swimming',
      'Long Battery Life: Extended usage time between charges for convenience'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/compatible-with-apple-q9-smartwatch-waterproof-sports-for-android-ios-with-heart-rate-monitor-blood-pressure-functions-smart-watch-p-31212860-294A-411B-B186-0A09D0BAB88A.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1320
  },
  {
    id: 'health-009',
    name: 'Blood Pressure Smartwatch – Fitness Tracker with Heart Rate, Blood Oxygen & Sleep Monitor (Compatible with Android & iPhone)',
    description: 'Take control of your health with the Blood Pressure Smartwatch, a powerful blend of fitness technology and everyday style.',
    detailedDescription: 'Take control of your health with the Blood Pressure Smartwatch, a powerful blend of fitness technology and everyday style. Built with plastic and metal materials for durability and comfort, this smartwatch offers dynamic and static blood pressure tracking, continuous heart rate monitoring, and blood oxygen measurement — all from your wrist.',
    price: 16.48,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867834/hpd-9_fz4nic.png',
    category: 'Health & Wellness',
    tags: ['blood pressure', 'fitness tracker', 'heart rate', 'blood oxygen', 'health monitor'],
    benefits: [
      'Blood Pressure Monitoring',
      'Blood Oxygen Measurement',
      'Heart Rate Tracking'
    ],
    detailedBenefits: [
      'Advanced Blood Pressure Monitoring: Tracks both dynamic and static blood pressure readings',
      'Blood Oxygen Saturation: Measures SpO2 levels to monitor respiratory health',
      'Continuous Heart Rate Monitoring: Keeps track of your heart rate throughout the day',
      'Comprehensive Sleep Analysis: Monitors sleep quality and provides improvement suggestions',
      'Durable Construction: Built with high-quality materials for long-lasting use',
      'Cross-Platform Compatibility: Works with both Android and iOS devices'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/blood-pressure-smartwatch-p-C7D13081-5088-4AA8-8FF6-6E05BDCD6E95.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1450
  },
  {
    id: 'health-010',
    name: 'Vitamin C Capsules – Immune Support & Antioxidant Supplement for Daily Health (60 Capsules)',
    description: 'Boost your immunity and protect your health with these Vitamin C Capsules, your daily defense against fatigue, stress, and seasonal illness.',
    detailedDescription: 'Boost your immunity and protect your health with these Vitamin C Capsules, your daily defense against fatigue, stress, and seasonal illness. Formulated with high-quality Vitamin C, this supplement helps strengthen your immune system, improve collagen production, and promote healthy skin from within.',
    price: 3.35,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867840/hpd-10_gi2zij.jpg',
    category: 'Health & Wellness',
    tags: ['vitamin c', 'immune support', 'antioxidant', 'supplement'],
    benefits: [
      'Immune System Support',
      'Antioxidant Protection',
      'Collagen Production'
    ],
    detailedBenefits: [
      'Strong Immune Defense: High-potency Vitamin C helps fight off infections and illnesses',
      'Powerful Antioxidant: Neutralizes harmful free radicals to protect cells from damage',
      'Collagen Synthesis: Supports the production of collagen for healthy skin, joints, and blood vessels',
      'Energy Boost: Helps reduce fatigue and supports overall vitality',
      'Seasonal Support: Provides extra protection during cold and flu seasons',
      'Easy Daily Dosing: Convenient capsule form with recommended daily serving size'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/vitamin-c-p-2409120827341604600.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1680
  },
  {
    id: 'health-011',
    name: 'Green Superfood Powder – Plant-Based Nutrient Blend for Energy, Digestion & Total Body Wellness',
    description: 'Fuel your body with natural energy and nutrition using the Green Superfood Powder, a nutrient-dense plant-based blend crafted to support digestion, energy, and overall wellness.',
    detailedDescription: 'Fuel your body with natural energy and nutrition using the Green Superfood Powder, a nutrient-dense plant-based blend crafted to support digestion, energy, and overall wellness. Packed with vitamin-rich greens and antioxidant superfoods, this formula makes it easy to get the nutrients your body needs—even on your busiest days.',
    price: 20.00,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867834/hpd-11_bod7w1.jpg',
    category: 'Health & Wellness',
    tags: ['superfood', 'plant-based', 'energy', 'digestion', 'wellness'],
    benefits: [
      'Natural Energy Boost',
      'Digestive Support',
      'Nutrient Dense Formula'
    ],
    detailedBenefits: [
      'Sustained Energy: Plant-based nutrients provide steady energy without crashes',
      'Digestive Health: Fiber and enzymes support healthy digestion and gut function',
      'Nutrient Density: Packed with vitamins, minerals, and antioxidants from green superfoods',
      'Immune Support: Strengthens your body\'s natural defenses with powerful antioxidants',
      'Detoxification: Helps cleanse the body of toxins and support liver function',
      'Convenient Nutrition: Easy way to get essential nutrients even with a busy schedule'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/green-superfood-powder-nutrient-rich-blend-for-energy-digestion-overall-wellness-p-1898323222915948545.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.8,
    reviewCount: 1560
  },
  {
    id: 'health-012',
    name: 'Plant Protein Chocolate – 21g Protein for Muscle Recovery, Weight Management & Digestive Support',
    description: 'Fuel your body with clean, plant-powered nutrition using our Plant Protein Chocolate—a rich, creamy, and delicious way to support muscle recovery, healthy weight management, and digestive balance.',
    detailedDescription: 'Fuel your body with clean, plant-powered nutrition using our Plant Protein Chocolate—a rich, creamy, and delicious way to support muscle recovery, healthy weight management, and digestive balance. Each serving packs 21g of complete plant-based protein, crafted from Tendra® Fava Bean Protein Isolate and YESTEINTM Fermented Nutritional Yeast Protein. Together, they deliver all the essential amino acids your muscles need to repair, rebuild, and grow stronger after every workout.',
    price: 42.00,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867835/hpd-12_avh0ss.jpg',
    category: 'Health & Wellness',
    tags: ['plant protein', 'muscle recovery', 'weight management', 'chocolate', 'vegan'],
    benefits: [
      'Muscle Recovery',
      'Weight Management',
      'Digestive Support'
    ],
    detailedBenefits: [
      'Accelerated Muscle Recovery: 21g of complete protein provides essential amino acids for muscle repair',
      'Healthy Weight Management: High protein content helps control appetite and supports metabolism',
      'Digestive Health: Fermented nutritional yeast supports gut health and digestion',
      'Delicious Flavor: Rich chocolate taste makes healthy eating enjoyable',
      'Plant-Based Nutrition: Vegan formula suitable for plant-based diets',
      'Complete Amino Acid Profile: Contains all essential amino acids for optimal protein synthesis'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/plant-protein-chocolate-21g-protein-muscle-recovery-weight-management-and-digestive-support-p-1895185750792245250.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.9,
    reviewCount: 1780
  },
  {
    id: 'health-013',
    name: 'Pepper Body Supplements – Natural Energy, Metabolism & Wellness Support',
    description: 'Boost your daily energy and overall vitality with Pepper Body Supplements, a health-boosting formula designed to support metabolism, endurance, and body wellness.',
    detailedDescription: 'Boost your daily energy and overall vitality with Pepper Body Supplements, a health-boosting formula designed to support metabolism, endurance, and body wellness. Each capsule harnesses the natural power of pepper extract, known for its ability to enhance nutrient absorption, promote thermogenesis, and gently stimulate your body\'s energy systems.',
    price: 4.02,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867839/hpd-13_ddnv4r.jpg',
    category: 'Health & Wellness',
    tags: ['energy supplement', 'metabolism booster', 'wellness', 'pepper extract'],
    benefits: [
      'Natural Energy Boost',
      'Metabolism Support',
      'Enhanced Nutrient Absorption'
    ],
    detailedBenefits: [
      'Natural Energy Enhancement: Gentle stimulation without jitters or crashes',
      'Metabolic Support: Helps boost metabolism for improved calorie burning',
      'Better Nutrient Absorption: Pepper extract enhances the bioavailability of other nutrients',
      'Endurance Improvement: Supports sustained energy levels throughout the day',
      'Thermogenic Effect: Promotes heat production to support fat burning',
      'Overall Wellness: Contributes to general health and vitality'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/pepper-body-supplements-supplement-energy-p-2509130211301602800.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.3,
    reviewCount: 1390
  },
  {
    id: 'health-014',
    name: 'Head Massager Wireless Stress Relief Helmet – Sleep Therapy & Relaxation Device for Men and Women',
    description: 'Ease away stress, tension, and fatigue with the Head Massager Wireless Stress Relief Helmet, a smart relaxation device designed to calm your mind and promote better sleep.',
    detailedDescription: 'Ease away stress, tension, and fatigue with the Head Massager Wireless Stress Relief Helmet, a smart relaxation device designed to calm your mind and promote better sleep. Built with ergonomic precision, this head massage helmet fits comfortably on any head shape, delivering targeted low-frequency pulses that help relieve pain, reduce anxiety, and support deep relaxation.',
    price: 4.17,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867841/hpd-14_moqtrd.png',
    category: 'Health & Wellness',
    tags: ['head massager', 'stress relief', 'sleep therapy', 'relaxation'],
    benefits: [
      'Stress Relief',
      'Pain Reduction',
      'Better Sleep Quality'
    ],
    detailedBenefits: [
      'Effective Stress Relief: Low-frequency pulses help calm the mind and reduce anxiety',
      'Headache and Pain Relief: Targets tension points to alleviate headaches and neck pain',
      'Improved Sleep Quality: Promotes relaxation for deeper, more restorative sleep',
      'Wireless Convenience: Cordless design allows for unrestricted movement during use',
      'Universal Fit: Adjustable design accommodates all head sizes and shapes comfortably',
      'Therapeutic Massage: Simulates professional massage techniques for at-home relaxation'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/head-massager-wireless-stress-relief-brain-massage-helmet-unisex-sleep-therapy-p-2509130211301602800.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1210
  },
  // Continuing with additional products to reach 58 total
  {
    id: 'health-015',
    name: 'Electric Foot Massager Machine – Shiatsu Reflexology Massager with Heat for Plantar Fasciitis, Circulation & Pain Relief',
    description: 'Experience the ultimate foot relaxation with our Electric Foot Massager Machine, featuring shiatsu kneading technology and soothing heat therapy.',
    detailedDescription: 'Experience the ultimate foot relaxation with our Electric Foot Massager Machine, featuring shiatsu kneading technology and soothing heat therapy. This advanced foot massager combines rolling, compression, and air pressure techniques to provide a spa-like experience in the comfort of your home. Perfect for relieving plantar fasciitis, improving circulation, and reducing foot fatigue after long days on your feet.',
    price: 4.39,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867840/hpd-15_gqrkqp.jpg',
    category: 'Health & Wellness',
    tags: ['energy booster', 'immunity support', 'men\'s health', 'soft candy', 'health supplement'],
    benefits: [
      'Energy Boost',
      'Immunity Support',
      'Stamina Enhancement'
    ],
    detailedBenefits: [
      'Daily Energy Boost: Helps fight fatigue and maintain consistent energy levels throughout the day',
      'Immune System Support: Strengthens your body\'s natural defenses against common illnesses',
      'Enhanced Stamina: Improves physical performance and endurance for daily activities',
      'Convenient Chewable Form: Easy-to-take soft candy format that tastes great',
      'Men\'s Health Focus: Specifically formulated to meet the nutritional needs of men',
      '90-Day Supply: Comes with 90 tablets for three months of daily supplementation'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/soft-candy-improves-resistance-and-supplements-energy-p-2412070721251627600.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1350
  },
  {
    id: 'health-016',
    name: 'Slimming Vibrating Massage Gun – Deep Tissue Muscle Massager for Weight Loss, Cellulite Reduction & Body Shaping',
    description: 'Achieve your body goals with the Slimming Vibrating Massage Gun, a powerful deep tissue massager designed for weight loss and cellulite reduction.',
    detailedDescription: 'Achieve your body goals with the Slimming Vibrating Massage Gun, a powerful deep tissue massager designed for weight loss and cellulite reduction. This innovative device combines percussion therapy with vibration technology to stimulate lymphatic drainage, break down fat deposits, and tone muscles. With multiple speed settings and interchangeable heads, it targets problem areas like thighs, abdomen, arms, and hips for effective body shaping.',
    price: 14.59,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867844/hpd-16_fjg0o1.jpg',
    category: 'Health & Wellness',
    tags: ['hydrogen water', 'antioxidant', 'rechargeable', 'portable', 'health innovation'],
    benefits: [
      'Antioxidant Rich',
      'Cellular Health',
      'Improved Metabolism'
    ],
    detailedBenefits: [
      'Powerful Antioxidant Properties: Molecular hydrogen neutralizes harmful free radicals in the body',
      'Enhanced Cellular Health: Supports cellular function and protects against oxidative stress',
      'Metabolism Boost: Helps improve metabolic processes for better energy utilization',
      'Quick Generation: Produces hydrogen-rich water in just 3 minutes with the touch of a button',
      'Rechargeable & Portable: Built-in battery allows for use anywhere without external power',
      'Advanced Electrolysis: Uses cutting-edge technology for efficient hydrogen production'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/hydrogen-water-bottles-electric-hydrogen-rich-water-generator-bottle-new-technology-rechargeable-portable-antioxidant-p-1769624670883549184.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1420
  },
  {
    id: 'health-017',
    name: 'Wireless Neck Massager with Heat – Shiatsu Massage Pillow for Cervical Pain Relief, Tension & Stress Reduction',
    description: 'Relieve neck and shoulder tension with our Wireless Neck Massager with Heat, featuring shiatsu massage technology and soothing heat therapy.',
    detailedDescription: 'Relieve neck and shoulder tension with our Wireless Neck Massager with Heat, featuring shiatsu massage technology and soothing heat therapy. This ergonomic massage pillow delivers targeted relief to stiff neck muscles, upper back tension, and shoulder knots. With its wireless design and adjustable intensity settings, you can enjoy professional-grade massage therapy anytime, anywhere - whether at home, in the office, or while traveling.',
    price: 1.63,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867844/hpd-17_kemvb0.jpg',
    category: 'Health & Wellness',
    tags: ['insulated bottle', 'temperature display', 'stainless steel', 'thermos', 'smart technology'],
    benefits: [
      'Temperature Display',
      'Long-Lasting Insulation',
      'Smart Technology'
    ],
    detailedBenefits: [
      'Real-Time Temperature Display: Instantly shows your beverage\'s temperature with a touch of the lid',
      'Superior Insulation: Keeps drinks hot for 12 hours or cold for 24 hours',
      'Smart Touch Technology: Advanced digital display activated by gentle touch sensor',
      'High-Grade Materials: Premium stainless steel construction for durability and safety',
      'Perfect Capacity: 500ml size ideal for daily hydration needs',
      'Leak-Proof Design: Secure lid ensures no spills in bags or cars'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/smart-temperature-display-high-grade-insulated-bottle-portable-large-capacity-p-2412031014371615600.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1280
  },
  {
    id: 'health-018',
    name: 'Semicolon Charm Ring – Mental Health Awareness Titanium Steel Ring for Men & Women',
    description: 'The Semicolon Charm Ring is more than just jewelry—it\'s a symbol of strength, hope, and continuation. Designed with simplicity and meaning, this sleek titanium steel ring represents the belief that your story isn\'t over yet.',
    detailedDescription: 'The Semicolon Charm Ring is more than just jewelry—it\'s a symbol of strength, hope, and continuation. Designed with simplicity and meaning, this sleek titanium steel ring represents the belief that your story isn\'t over yet.',
    price: 1.86,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867845/hpd-18_nylwvu.png',
    category: 'Health & Wellness',
    tags: ['mental health', 'awareness', 'titanium steel', 'semicolon', 'jewelry'],
    benefits: [
      'Mental Health Symbol',
      'Durable Material',
      'Meaningful Jewelry'
    ],
    detailedBenefits: [
      'Mental Health Awareness: Powerful symbol representing hope and continuation for mental wellness',
      'Premium Titanium Steel: Hypoallergenic, rust-resistant material for long-lasting wear',
      'Unisex Design: Stylish ring suitable for both men and women of all ages',
      'Minimalist Style: Simple yet meaningful design that complements any outfit',
      'Conversation Starter: Encourages dialogue about mental health and wellness',
      'Gift of Hope: Thoughtful present for anyone supporting mental health awareness'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/semicolon-charm-ring-mental-health-gift-ring-titanium-steel-ring-p-1357976008338313216.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.8,
    reviewCount: 1560
  },
  {
    id: 'health-019',
    name: 'Printed Head Gel Ice Cap – Cold Therapy Ice Head Wrap for Migraine & Headache Relief',
    description: 'Soothe migraines, tension headaches, and stress with the Printed Head Gel Ice Cap, a cold therapy wrap designed for instant comfort and relief. Made with soft Lycra elastic fabric and filled with cooling gel, this flexible ice cap contours perfectly to your head, providing 360° coverage to ease pain and pressure.',
    detailedDescription: 'Soothe migraines, tension headaches, and stress with the Printed Head Gel Ice Cap, a cold therapy wrap designed for instant comfort and relief. Made with soft Lycra elastic fabric and filled with cooling gel, this flexible ice cap contours perfectly to your head, providing 360° coverage to ease pain and pressure.',
    price: 4.35,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867845/hpd-19_w42prg.jpg',
    category: 'Health & Wellness',
    tags: ['cold therapy', 'migraine relief', 'headache', 'ice cap', 'gel wrap'],
    benefits: [
      'Migraine Relief',
      'Cold Therapy',
      'Stress Reduction'
    ],
    detailedBenefits: [
      'Instant Pain Relief: Cooling gel provides immediate soothing effect for migraines and headaches',
      '360° Coverage: Full head wrap design ensures comprehensive cooling therapy',
      'Adjustable Comfort Fit: Stretchy Lycra material adapts to all head sizes for a snug fit',
      'Reusable & Long-Lasting: Gel retains cold temperature for extended therapeutic sessions',
      'Stylish Printed Design: Attractive patterns make therapy fashionable and discreet',
      'Drug-Free Solution: Natural cold therapy alternative to medication for headache relief'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/printed-head-gel-ice-cap-for-migraines-cold-therapy-ice-head-wrap-ice-pack-mask-p-1635839511622070272.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1190
  },
  {
    id: 'health-020',
    name: 'Natural Herbal Immune Defense Supplement',
    description: 'Strengthen your body\'s natural defense system with this premium mushroom supplement.',
    detailedDescription: 'Strengthen your body\'s natural defense system with AOVITAO Natural Herbal Immune Defense, a premium mushroom supplement formulated to boost immunity, energy, and overall wellness. Each capsule combines nature\'s most powerful immune-supporting mushrooms, including Lion\'s Mane, Reishi, Chaga, Cordyceps, and Turkey Tail, along with essential vitamins C and B6 for complete daily protection.',
    price: 15.99,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867849/hpd-20_lerssb.jpg',
    category: 'Health & Wellness',
    tags: ['immune support', 'herbal supplement', 'mushroom blend', 'vitamins', 'wellness'],
    benefits: [
      'Immune System Boost',
      'Natural Ingredients',
      'Energy Enhancement'
    ],
    detailedBenefits: [
      'Comprehensive Immune Support: Blend of 5 powerful medicinal mushrooms for holistic protection',
      'Natural Energy Boost: Cordyceps and other adaptogens increase stamina and vitality',
      'Antioxidant Rich: Chaga and Reishi provide powerful antioxidants to fight free radicals',
      'Cognitive Enhancement: Lion\'s Mane supports brain health and mental clarity',
      'Essential Vitamin Complex: Added vitamins C and B6 for complete nutritional support',
      '100% Natural Formula: Pure herbal ingredients with no artificial additives or fillers'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/natural-herbal-immune-defense-supplement-p-2411290320421617600.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1680
  },
  {
    id: 'health-021',
    name: 'Pure Moringa Dietary Supplement – 11000mg Moringa Oleifera Extract for Energy, Detox, and Daily Wellness',
    description: 'Fuel your body with nature\'s green powerhouse — the Pure Moringa Dietary Supplement. Each capsule delivers a potent 11,000mg Moringa Oleifera blend, combining pure Moringa powder and a concentrated 50:1 Moringa leaf extract for maximum nutrient absorption.',
    detailedDescription: 'Fuel your body with nature\'s green powerhouse — the Pure Moringa Dietary Supplement. Each capsule delivers a potent 11,000mg Moringa Oleifera blend, combining pure Moringa powder and a concentrated 50:1 Moringa leaf extract for maximum nutrient absorption.',
    price: 2.63,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867850/hpd-21_w5mucr.jpg',
    category: 'Health & Wellness',
    tags: ['moringa', 'dietary supplement', 'detox', 'energy', 'natural nutrition'],
    benefits: [
      'Natural Detox',
      'Energy Boost',
      'Nutrient Dense'
    ],
    detailedBenefits: [
      'Powerful Natural Detox: Moringa helps cleanse the body and support liver function',
      'Sustained Energy: Natural nutrients provide steady energy without crashes',
      'Ultra-Nutritious: Contains 90+ nutrients including vitamins, minerals, and amino acids',
      'High-Potency Formula: 11,000mg blend with 50:1 concentrated leaf extract',
      'Antioxidant Rich: Protects cells from oxidative stress and supports healthy aging',
      'Easy Daily Supplementation: Simple capsule form for consistent wellness support'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/dietary-supplement-p-2505020444291618500.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1420
  },
  {
    id: 'health-022',
    name: 'Ashwagandha Capsules – Natural Stress Relief, Energy, and Immunity Support for Adults',
    description: 'Experience calm, balance, and natural vitality with Ashwagandha Capsules, a premium herbal supplement designed to support both mind and body. Sourced from pure Ashwagandha root extract, this ancient adaptogenic herb helps your body manage daily stress, improve energy levels, and promote better focus and sleep quality.',
    detailedDescription: 'Experience calm, balance, and natural vitality with Ashwagandha Capsules, a premium herbal supplement designed to support both mind and body. Sourced from pure Ashwagandha root extract, this ancient adaptogenic herb helps your body manage daily stress, improve energy levels, and promote better focus and sleep quality.',
    price: 2.81,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867850/hpd-22_aejrcq.jpg',
    category: 'Health & Wellness',
    tags: ['ashwagandha', 'stress relief', 'adaptogen', 'sleep support', 'energy'],
    benefits: [
      'Stress Management',
      'Sleep Improvement',
      'Energy Balance'
    ],
    detailedBenefits: [
      'Effective Stress Relief: Adaptogenic properties help the body adapt to and manage stress',
      'Improved Sleep Quality: Promotes relaxation and deeper, more restorative sleep',
      'Balanced Energy Levels: Supports natural energy without jitters or crashes',
      'Enhanced Focus: Helps improve concentration and mental clarity throughout the day',
      'Immune System Support: Strengthens natural defenses against illness and fatigue',
      'Pure Root Extract: High-quality Ashwagandha sourced from premium root material'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/ashwagandha-capsules-p-2507110941361616000.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1540
  },
  {
    id: 'health-023',
    name: 'Ashwagandha for Women Supplement with L-Theanine & Magnesium – Stress Relief, Focus, and Relaxation Support',
    description: 'Find your calm, energy, and emotional balance with the AOVITAO Ashwagandha for Women Supplement — a natural formula designed to help women manage daily stress, anxiety, and fatigue while improving focus and mood.',
    detailedDescription: 'Find your calm, energy, and emotional balance with the AOVITAO Ashwagandha for Women Supplement — a natural formula designed to help women manage daily stress, anxiety, and fatigue while improving focus and mood.',
    price: 15.90,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867852/hpd-23_wynxuc.jpg',
    category: 'Health & Wellness',
    tags: ['women\'s health', 'ashwagandha', 'l-theanine', 'magnesium', 'stress relief'],
    benefits: [
      'Women\'s Stress Relief',
      'Mood Enhancement',
      'Relaxation Support'
    ],
    detailedBenefits: [
      'Targeted Women\'s Support: Formulated specifically to address female stress and hormonal balance',
      'Triple-Action Calming: Ashwagandha, L-Theanine, and Magnesium work together for maximum relaxation',
      'Emotional Balance: Helps stabilize mood swings and promotes feelings of well-being',
      'Enhanced Focus: L-Theanine improves mental clarity without drowsiness',
      'Muscle Relaxation: Magnesium helps ease tension and promote restful sleep',
      'Hormone Harmony: Supports healthy hormone regulation during menstrual cycles and menopause'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/ashwagandha-for-women-supplement-with-l-theanine-magnesium-stress-relief-focus-and-relaxation-support-anxiery-pill-p-1898216981732499457.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.8,
    reviewCount: 1720
  },
  {
    id: 'health-024',
    name: 'Bluetooth Smart Watch 119 Plus – Heart Rate Monitor, Fitness Tracker, and Activity Reminder',
    description: 'Stay connected, active, and in control with the Bluetooth Smart Watch 119 Plus, a sleek and durable fitness companion designed to fit your daily lifestyle. Built with a metal frame and TPU strap, this smartwatch combines comfort and modern style with powerful functionality.',
    detailedDescription: 'Stay connected, active, and in control with the Bluetooth Smart Watch 119 Plus, a sleek and durable fitness companion designed to fit your daily lifestyle. Built with a metal frame and TPU strap, this smartwatch combines comfort and modern style with powerful functionality.',
    price: 8.76,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867854/hpd-24_uf3efd.jpg',
    category: 'Health & Wellness',
    tags: ['smart watch', 'fitness tracker', 'heart rate monitor', 'bluetooth', 'activity reminder'],
    benefits: [
      'Fitness Tracking',
      'Heart Rate Monitoring',
      'Smart Connectivity'
    ],
    detailedBenefits: [
      'Comprehensive Fitness Tracking: Monitors steps, distance, calories burned, and exercise activities',
      '24/7 Heart Rate Monitoring: Continuous tracking for better health insights and workout optimization',
      'Smart Notifications: Receive calls, texts, and app alerts directly on your wrist',
      'Long Battery Life: Up to 7 days of usage on a single charge for uninterrupted monitoring',
      'Durable Construction: Metal frame and TPU strap combine style with long-lasting durability',
      'Activity Reminders: Gentle vibrations help you stay active throughout the day'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/bluetooth-smart-watch-p-4AC6CE42-7D2E-4FA0-98EA-0F6D9ED6BD27.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1260
  },
  {
    id: 'health-025',
    name: 'Fiber Soft Candy',
    description: 'Looking for an easy and tasty way to get your daily fiber? These Fiber Soft Candies make gut care simple. Each gummy is packed with natural fiber to support digestion, reduce bloating, and keep your metabolism active. The soft, chewy texture feels like a treat, not a supplement.',
    detailedDescription: 'Looking for an easy and tasty way to get your daily fiber? These Fiber Soft Candies make gut care simple. Each gummy is packed with natural fiber to support digestion, reduce bloating, and keep your metabolism active. The soft, chewy texture feels like a treat, not a supplement.',
    price: 2.50,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867855/hpd-25_gd1oms.jpg',
    category: 'Health & Wellness',
    tags: ['fiber supplement', 'soft candy', 'digestive health', 'gut care', 'tasty supplement'],
    benefits: [
      'Digestive Support',
      'Bloating Reduction',
      'Metabolism Boost'
    ],
    detailedBenefits: [
      'Daily Fiber Intake: Delicious way to meet your recommended daily fiber requirements',
      'Digestive Health: Supports healthy gut bacteria and regular bowel movements',
      'Bloating Relief: Helps reduce uncomfortable bloating and gas',
      'Metabolism Support: Natural fiber helps keep your metabolism active and efficient',
      'Tasty & Convenient: Great-tasting gummies that feel like candy, not medicine',
      'Prebiotic Benefits: Feeds good bacteria in your gut for improved overall digestive health'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/fiber-soft-candy-p-2504080758241626800.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.3,
    reviewCount: 1180
  },
  {
    id: 'health-026',
    name: 'CoQ10 Gummies – Heart Health, Energy, and Antioxidant Support with Vitamins C, D, and A',
    description: 'Support your heart health and boost your daily energy levels with CoQ10 Gummies, a delicious and convenient way to get essential antioxidants and vitamins your body needs. Each gummy contains Coenzyme Q10 (CoQ10) — a vital compound that helps produce energy at the cellular level and supports cardiovascular function.',
    detailedDescription: 'Support your heart health and boost your daily energy levels with CoQ10 Gummies, a delicious and convenient way to get essential antioxidants and vitamins your body needs. Each gummy contains Coenzyme Q10 (CoQ10) — a vital compound that helps produce energy at the cellular level and supports cardiovascular function.',
    price: 2.34,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867855/hpd-26_psxp3t.jpg',
    category: 'Health & Wellness',
    tags: ['coq10', 'heart health', 'energy', 'antioxidant', 'vitamin supplement'],
    benefits: [
      'Heart Health',
      'Cellular Energy',
      'Antioxidant Protection'
    ],
    detailedBenefits: [
      'Cardiovascular Support: CoQ10 is essential for heart health and healthy blood pressure',
      'Cellular Energy Production: Helps convert food into energy at the cellular level',
      'Powerful Antioxidant: Protects cells from oxidative damage and supports healthy aging',
      'Vitamin Complex: Enhanced with vitamins C, D, and A for comprehensive nutrition',
      'Delicious Gummy Form: Tasty, chewable format that makes supplementation enjoyable',
      'Natural Energy Boost: Supports stamina and reduces fatigue without stimulants'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/coq10-gummies-p-2409200934501622400.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1450
  },
  {
    id: 'health-027',
    name: 'Color Screen Smart Watch – Heart Rate Monitor Bluetooth Fitness Bracelet for Android & iOS',
    description: 'Track your health, stay connected, and upgrade your lifestyle with the Color Screen Smart Watch, a lightweight and stylish Bluetooth fitness bracelet designed for everyday use. Featuring a 1.14-inch high-definition color screen, this smartwatch delivers sharp visuals and an intuitive touch interface for easy navigation. Compatible with both Android and iOS platforms, it connects effortlessly to your smartphone for real-time notifications, heart rate tracking, and activity monitoring.',
    detailedDescription: 'Track your health, stay connected, and upgrade your lifestyle with the Color Screen Smart Watch, a lightweight and stylish Bluetooth fitness bracelet designed for everyday use. Featuring a 1.14-inch high-definition color screen, this smartwatch delivers sharp visuals and an intuitive touch interface for easy navigation. Compatible with both Android and iOS platforms, it connects effortlessly to your smartphone for real-time notifications, heart rate tracking, and activity monitoring.',
    price: 14.90,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867856/hpd-27_mwky3s.jpg',
    category: 'Health & Wellness',
    tags: ['color screen', 'smart watch', 'fitness tracker', 'heart rate', 'bluetooth'],
    benefits: [
      'HD Color Display',
      'Multi-Device Compatibility',
      'Health Monitoring'
    ],
    detailedBenefits: [
      'Vibrant Color Display: 1.14-inch HD screen with crisp visuals for easy data reading',
      'Universal Compatibility: Works seamlessly with both Android and iOS smartphones',
      'Comprehensive Health Tracking: Monitors heart rate, sleep, steps, and various activities',
      'Smart Notifications: Receive calls, messages, and app alerts directly on your wrist',
      'Intuitive Touch Interface: Responsive touchscreen for smooth navigation and control',
      'Lightweight & Stylish: Comfortable design suitable for all-day wear and exercise'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/color-screen-smart-watch-heart-rate-bluetooth-sports-bracelet-p-1405842902382415872.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1320
  },
  {
    id: 'health-028',
    name: 'Thermal Water Bottle – Smart Temperature Display Insulated Cup Stainless Steel Water Cup Tumbler Bottle',
    description: 'Experience the future of hydration with the Thermal Water Bottle, featuring smart temperature display technology in a premium stainless steel insulated design. This innovative bottle keeps your beverages at the perfect temperature while providing real-time temperature readings at your fingertips.',
    detailedDescription: 'Experience the future of hydration with the Thermal Water Bottle, featuring smart temperature display technology in a premium stainless steel insulated design. This innovative bottle keeps your beverages at the perfect temperature while providing real-time temperature readings at your fingertips.',
    price: 42.92,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867857/hpd-28_iyghuc.jpg',
    category: 'Health & Wellness',
    tags: ['thermal bottle', 'temperature display', 'stainless steel', 'insulated cup', 'smart technology'],
    benefits: [
      'Smart Temperature Display',
      'Superior Insulation',
      'Premium Material'
    ],
    detailedBenefits: [
      'Digital Temperature Display: Touch-activated LED screen shows real-time beverage temperature',
      'Exceptional Insulation: Keeps drinks hot for 24 hours or cold for 48 hours',
      'Premium Stainless Steel: High-quality 18/8 food-grade stainless steel construction',
      'Leak-Proof Design: Secure cap prevents spills in bags, cars, or during travel',
      'Ergonomic Comfort Grip: Textured surface provides secure hold even with wet hands',
      'Large Capacity: Generous 17oz (500ml) size perfect for all-day hydration'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/thermal-water-bottle-smart-temperature-display-insulated-cup-stainless-steel-water-cup-tumbler-bottle-p-1893953216514207746.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.8,
    reviewCount: 1650
  },
  {
    id: 'health-029',
    name: 'Direct Consumption Weak Alkaline Water Cup – Natural Ore Infused 550ml Tritan Bottle',
    description: 'Experience cleaner, healthier hydration with the Direct Consumption Weak Alkaline Water Cup, a revolutionary hydration solution that infuses natural ore minerals into your water for enhanced health benefits. This 550ml Tritan bottle is designed for direct consumption, allowing you to enjoy weak alkaline water that supports better pH balance and overall wellness.',
    detailedDescription: 'Experience cleaner, healthier hydration with the Direct Consumption Weak Alkaline Water Cup, a revolutionary hydration solution that infuses natural ore minerals into your water for enhanced health benefits. This 550ml Tritan bottle is designed for direct consumption, allowing you to enjoy weak alkaline water that supports better pH balance and overall wellness.',
    price: 26.99,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867860/hpd-29_cdeldt.jpg',
    category: 'Health & Wellness',
    tags: ['alkaline water', 'mineral infusion', 'hydration', 'health cup', 'tritan bottle'],
    benefits: [
      'Mineral Infusion',
      'pH Balance',
      'Healthier Hydration'
    ],
    detailedBenefits: [
      'Natural Ore Mineralization: Infuses beneficial minerals for enhanced nutritional value',
      'Optimal pH Balance: Creates weak alkaline water to support better body pH levels',
      'Direct Consumption Design: Safe for drinking directly from the bottle without cups',
      'Durable Tritan Material: BPA-free, shatterproof construction for long-term use',
      'Generous 550ml Capacity: Perfect size for daily hydration needs',
      'Eco-Friendly Solution: Reusable alternative to single-use plastic bottles'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/direct-consumption-weak-alkaline-water-cup-natural-ore-infused-550ml-tritan-bottle-p-2509130211301602819.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1350
  },
  // Water Filter and Beauty Products
  {
    id: 'health-030',
    name: 'Water Filter Pitcher 9-Cup – 5-Stage Water Filter Dispenser 40 Gallons No BPA',
    description: 'Enjoy clean, crisp, and great-tasting water every day with the 9-Cup Water Filter Pitcher, featuring a 5-stage filtration system that removes impurities while retaining essential minerals. This BPA-free pitcher delivers healthier, better-tasting water for your family while reducing reliance on single-use plastic bottles.',
    price: 15.55,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761867861/hpd-30_o92bua.jpg',
    category: 'Health & Wellness',
    tags: ['water filter', 'pitcher', 'filtration system', 'BPA-free', 'water dispenser'],
    benefits: [
      '5-Stage Filtration',
      'BPA-Free Design',
      '40-Gallon Capacity'
    ],
    detailedBenefits: [
      '5-Stage Filtration System: Removes impurities while retaining essential minerals for healthy water',
      'BPA-Free Construction: Safe, non-toxic materials ensure pure, clean water',
      '40-Gallon Filter Life: Long-lasting performance before replacement needed',
      '9-Cup Capacity: Perfect size for families and daily hydration needs',
      'Essential Mineral Retention: Keeps beneficial minerals while filtering out contaminants',
      'Easy Pour Design: Ergonomic handle and spout for convenient serving'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/water-filter-pitcher-9-cup-5-stage-water-filter-dispenser-40-gallons-no-bpa-p-1956567386847465474.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1280
  },
  // Premium Beauty & Skincare Products
  {
    id: 'beauty-001',
    name: 'Genuine Shellfish Peptide Anti-Aging Eye Cream – Anti-Wrinkle Treatment for Dark Circles & Puffiness',
    description: 'Turn back the clock on tired eyes with the Genuine Shellfish Peptide Anti-Aging Eye Cream, a luxurious treatment that targets wrinkles, puffiness, and dark circles for a visibly firmer, smoother under-eye area. This advanced formula combines marine-derived peptides with hyaluronic acid and seaweed extract to intensely hydrate and revitalize delicate eye skin.',
    detailedDescription: 'Turn back the clock on tired eyes with the Genuine Shellfish Peptide Anti-Aging Eye Cream — a luxurious, scientifically crafted formula that targets wrinkles, puffiness, and dark circles for a visibly firmer, smoother under-eye area. This advanced eye treatment combines marine-derived peptides with hyaluronic acid and seaweed extract to intensely hydrate and revitalize the delicate skin around your eyes.',
    price: 1.47,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866241/bpd-1_tajpfy.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['eye cream', 'anti-aging', 'wrinkle treatment', 'hydrating', 'peptides'],
    benefits: [
      'Anti-Wrinkle Formula',
      'Intense Hydration',
      'Dark Circle Reduction'
    ],
    detailedBenefits: [
      'Shellfish Peptide Technology: Marine-derived peptides help reduce the appearance of fine lines and wrinkles',
      'Hyaluronic Acid Complex: Deeply hydrates and plumps the skin for a smoother appearance',
      'Seaweed Extract: Rich in minerals and antioxidants to nourish and protect delicate eye area',
      'Niacinamide Brightening: Helps reduce dark circles and even out skin tone',
      'Lightweight Texture: Fast-absorbing formula that won\'t crease or cause milia',
      'Clinically Tested: Proven to reduce wrinkles and improve skin firmness with regular use'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/genuine-shellfish--peptide-anti-aging-anti-wrinkle-eye-cream-p-1555448591160979456.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.8,
    reviewCount: 1420
  },
  {
    id: 'beauty-002',
    name: 'Anti-Aging Drink | Cellular Renewal Formula with NAD+ Booster for Energy, Longevity & Skin Health',
    description: 'Reclaim youthful vitality from within with the Anti-Aging Drink, a scientifically developed cellular renewal formula designed to boost energy, improve skin health, and support longevity. This advanced health supplement blends powerful natural ingredients like Nicotinamide Ribose Dimalate, Sophora Japonica Extract, Trans-Resveratrol, and PQQ, working together to fight oxidative stress and support healthy cell regeneration.',
    detailedDescription: 'Reclaim youthful vitality from within with the Anti-Aging Drink, a scientifically developed cellular renewal formula designed to boost energy, improve skin health, and support longevity. This advanced health supplement blends powerful natural ingredients like Nicotinamide Ribose Dimalate, Sophora Japonica Extract, Trans-Resveratrol, and PQQ, working together to fight oxidative stress and support healthy cell regeneration. Experience increased energy, improved cognitive function, and visible skin improvements with this comprehensive anti-aging solution.',
    price: 9.48,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866242/bpd-2_isw6fn.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['anti-aging', 'cellular renewal', 'energy booster', 'supplement', 'longevity'],
    benefits: [
      'Cellular Renewal',
      'Energy Enhancement',
      'Oxidative Stress Protection'
    ],
    detailedBenefits: [
      'Nicotinamide Ribose Dimalate: Supports cellular energy production and DNA repair',
      'Trans-Resveratrol: Powerful antioxidant that promotes healthy aging and cardiovascular health',
      'PQQ (Pyrroloquinoline Quinone): Enhances mitochondrial function and cognitive performance',
      'Sophora Japonica Extract: Natural flavonoid that supports circulation and skin health',
      'Daily Energy Boost: Increases vitality and reduces fatigue throughout the day',
      'Comprehensive Anti-Aging: Targets multiple pathways of aging for holistic benefits'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/anti-aging-drink-p-2505040713531622300.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1150
  },
  {
    id: 'beauty-003',
    name: 'Multi-Collagen Peptide Powder | Hydrolyzed Collagen Protein for Skin, Joints & Hair Health',
    description: 'Revitalize your body from the inside out with Multi-Collagen Peptide Powder, a premium blend of hydrolyzed collagen proteins designed to support youthful skin, strong joints, and healthy hair. This advanced formula provides essential amino acids that naturally boost collagen production and improve overall tissue elasticity.',
    detailedDescription: 'Revitalize your body from the inside out with Multi-Collagen Peptide Powder, a premium blend of hydrolyzed collagen proteins designed to support youthful skin, strong joints, and healthy hair. This advanced formula provides essential amino acids that naturally boost collagen production and improve overall tissue elasticity. With five types of collagen from marine and bovine sources, this comprehensive supplement addresses multiple aspects of aging and tissue health.',
    price: 4.92,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866242/bpd-3_ypuwft.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['collagen', 'protein powder', 'skin support', 'hair health', 'joint support'],
    benefits: [
      'Multi-Collagen Blend',
      'Hydrolyzed for Absorption',
      'Five Types of Collagen'
    ],
    detailedBenefits: [
      'Five Collagen Types: Includes Types I, II, III, V, and X for comprehensive tissue support',
      'Hydrolyzed Peptides: Pre-digested for maximum absorption and bioavailability',
      'Skin Health Support: Helps improve skin elasticity, hydration, and reduce wrinkle appearance',
      'Joint Comfort: Supports cartilage health and joint mobility for active lifestyles',
      'Hair & Nail Strength: Provides building blocks for stronger, healthier hair and nails',
      'Unflavored Formula: Easily mixes into beverages, smoothies, or foods without altering taste'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/multi-collagen-peptide-powder-p-2504150729471617500.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1380
  },
  {
    id: 'beauty-004',
    name: 'Collagen Peptide Gummies | Beauty Supplements for Skin, Hair & Nails - Berry Flavor',
    description: 'Nourish your beauty from within with Collagen Peptide Gummies, the delicious and convenient way to support radiant skin, strong nails, and healthy hair. Each gummy is packed with high-quality hydrolyzed collagen peptides — the essential building blocks your body needs to maintain skin elasticity, reduce wrinkles, and strengthen connective tissues.',
    detailedDescription: 'Nourish your beauty from within with Collagen Peptide Gummies, the delicious and convenient way to support radiant skin, strong nails, and healthy hair. Each gummy is packed with high-quality hydrolyzed collagen peptides — the essential building blocks your body needs to maintain skin elasticity, reduce wrinkles, and strengthen connective tissues. These tasty gummies offer a delightful alternative to powders and capsules, making daily collagen supplementation enjoyable.',
    price: 6.00,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866243/bpd-4_ij2jec.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['collagen gummies', 'beauty supplement', 'skin health', 'hair support', 'nail strength'],
    benefits: [
      'Delicious Gummy Format',
      'Skin Elasticity Support',
      'Hair & Nail Health'
    ],
    detailedBenefits: [
      'Hydrolyzed Collagen Peptides: Easily absorbed to support skin, hair, and nail health',
      'Great Taste: Enjoyable berry-flavored gummies that make supplementation pleasant',
      'Skin Firming: Helps improve skin elasticity and reduce the appearance of fine lines',
      'Hair Strength: Supports stronger, healthier hair growth and reduced breakage',
      'Nail Conditioning: Promotes stronger nails with reduced brittleness and peeling',
      'Convenient Dosage: Pre-measured gummies eliminate guesswork in daily supplementation'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/collagen-peptide-gummies-p-1894949043930570753.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1290
  },
  {
    id: 'beauty-005',
    name: '15 Makeup Brush Set with Bag | Rose Gold Makeup Brush Multi-Function Makeup Tool Set',
    description: 'Create flawless makeup looks every day with the 15-Piece Rose Gold Makeup Brush Set, a complete collection designed for effortless blending, contouring, and detailing. Each brush is crafted with ultra-soft synthetic bristles that feel gentle on the skin yet deliver professional-level precision.',
    detailedDescription: 'Create flawless makeup looks every day with the 15-Piece Rose Gold Makeup Brush Set, a complete collection designed for effortless blending, contouring, and detailing. Each brush is crafted with ultra-soft synthetic bristles that feel gentle on the skin yet deliver professional-level precision. This comprehensive set includes all the essential brushes for a full face of makeup, housed in an elegant rose gold and black carrying case.',
    price: 3.35,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866242/bpd-5_qsrknh.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['makeup brushes', 'brush set', 'synthetic bristles', 'rose gold', 'cosmetic tools'],
    benefits: [
      '15 Essential Brushes',
      'Ultra-Soft Synthetic Bristles',
      'Elegant Rose Gold Design'
    ],
    detailedBenefits: [
      'Complete Collection: 15 versatile brushes for face, eyes, and lips application',
      'Synthetic Bristles: Cruelty-free, soft fibers that won\'t irritate skin or shed',
      'Rose Gold Ferrules: Elegant metallic accents that resist corrosion and add luxury',
      'Professional Performance: Designed for precise application and seamless blending',
      'Durable Handles: Sturdy construction for long-lasting use and comfort',
      'Travel-Friendly Case: Protective bag keeps brushes organized and damage-free'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/15-makeup-brush-with-bag--rose-gold-makeup-brush-multi-function-makeup-tool-set-p-B6A8A550-9CB8-467C-A2B1-190E85292D9C.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1450
  },
  {
    id: 'beauty-006',
    name: '5Pcs Makeup Brush Set with Mirror | Cosmetic Powder Eye Shadow Foundation Blush Blending Make Up Brush',
    description: 'Simplify your beauty routine with the 5-Piece Makeup Brush Tool Set, a compact and versatile kit designed for flawless application wherever you go. Each brush is crafted with soft, cruelty-free synthetic bristles that deliver smooth, even coverage for foundation, blush, eyeshadow, and more.',
    detailedDescription: 'Simplify your beauty routine with the 5-Piece Makeup Brush Tool Set, a compact and versatile kit designed for flawless application wherever you go. Each brush is crafted with soft, cruelty-free synthetic bristles that deliver smooth, even coverage for foundation, blush, eyeshadow, and more. The included compact mirror makes this set perfect for travel or quick touch-ups throughout the day.',
    price: 2.62,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866243/bpd-6_wdtlbe.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['makeup brush set', 'portable brushes', 'foundation brush', 'blush brush', 'eyeshadow brush'],
    benefits: [
      'Compact 5-Piece Set',
      'Built-In Mirror',
      'Cruelty-Free Synthetic Bristles'
    ],
    detailedBenefits: [
      'Essential Brushes: Carefully curated set including foundation, powder, blush, and eyeshadow brushes',
      'Integrated Mirror: Convenient compact mirror for on-the-go application and touch-ups',
      'Soft Synthetic Fibers: Gentle on skin and easy to clean with no animal hair',
      'Lightweight & Portable: Compact design perfect for travel, work bags, or gym kits',
      'Versatile Application: Suitable for powders, creams, and liquid cosmetics',
      'Rust-Resistant Ferrules: Durable metal bands that won\'t corrode with regular use'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/5pcs-makeup-brushes-tool-set-cosmetic-powder-eye-shadow-foundation-blush-blending-make-up-brush-p-1356513750307442688.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1120
  },
  {
    id: 'beauty-007',
    name: 'Herbaluxe Growth Balm | Hair Strengthening Scalp Treatment with Botanical Extracts for Breakage Reduction',
    description: 'Bring your hair back to life with Herbaluxe Growth Balm, a natural botanical formula designed to strengthen roots, reduce breakage, and stimulate healthy hair growth. Packed with nutrient-rich plant extracts and essential oils, this balm deeply nourishes your scalp while restoring shine and softness to your strands.',
    detailedDescription: 'Bring your hair back to life with Herbaluxe Growth Balm, a natural botanical formula designed to strengthen roots, reduce breakage, and stimulate healthy hair growth. Packed with nutrient-rich plant extracts and essential oils, this balm deeply nourishes your scalp while restoring shine and softness to your strands. Regular use helps create optimal conditions for thicker, fuller, and more vibrant hair.',
    price: 1.36,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866243/bpd-7_gdxspl.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['hair growth', 'scalp treatment', 'herbal balm', 'hair strengthening', 'natural ingredients'],
    benefits: [
      'Hair Growth Stimulation',
      'Scalp Nourishment',
      'Breakage Reduction'
    ],
    detailedBenefits: [
      'Botanical Extract Complex: Natural herbs and plant extracts that promote healthy hair follicles',
      'Essential Oil Infusion: Nourishing oils that strengthen hair shafts and reduce breakage',
      'Scalp Conditioning: Deeply moisturizes and soothes the scalp for optimal hair growth conditions',
      'Friction Reduction: Smooths hair cuticles to prevent tangling and breakage during styling',
      'Natural Shine Enhancement: Restores luster and softness to dull, damaged hair',
      'Daily Treatment: Lightweight formula that won\'t weigh hair down or leave residue'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/herbaluxe-growth-balm-p-2406180630031605100.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.3,
    reviewCount: 1080
  },
  {
    id: 'beauty-008',
    name: 'Firming Skin Ginger Slimming Massage Cream | Body Firming Lotion with Natural Extracts for Tightening',
    description: 'Experience the warming power of ginger with this Firming Skin Ginger Slimming Massage Cream, a nourishing body balm designed to tighten, tone, and smooth your skin. The rich, creamy texture melts effortlessly into your skin, providing deep hydration while promoting a firmer and more elastic appearance.',
    detailedDescription: 'Experience the warming power of ginger with this Firming Skin Ginger Slimming Massage Cream — a nourishing body balm designed to tighten, tone, and smooth your skin. The rich, creamy texture melts effortlessly into your skin, providing deep hydration while promoting a firmer and more elastic appearance. Perfect for massage routines, this cream combines sensory pleasure with visible skin benefits.',
    price: 0.67,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866244/bpd-8_gdlb2j.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['firming cream', 'ginger extract', 'slimming balm', 'massage cream', 'tightening lotion'],
    benefits: [
      'Skin Firming',
      'Ginger Warming Effect',
      'Deep Hydration'
    ],
    detailedBenefits: [
      'Ginger Extract Complex: Natural warming ingredients that stimulate circulation and skin renewal',
      'Firming Technology: Advanced formula that helps tighten and tone the appearance of skin',
      'Intensive Moisturization: Rich cream base delivers long-lasting hydration to dry areas',
      'Slimming Appearance: Helps smooth and contour the look of targeted body areas',
      'Massage Enhancement: Smooth texture glides easily during application for spa-like experience',
      'Natural Ingredients: Free from harsh chemicals, parabens, and sulfates'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/firming-skin-firming-cream-ginger-slimming-massage-cream-p-1390135472919023616.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.2,
    reviewCount: 970
  },
  {
    id: 'beauty-009',
    name: 'VOVA Active Retinol Face Cream 30ml | Anti-Aging Moisturizer with Witch Hazel for Fine Lines',
    description: 'The VOVA Active Retinol Face Cream delivers powerful hydration and visible skin renewal in every application. Formulated with active retinol and witch hazel extract, this cream helps smooth fine lines, refine texture, and restore a healthy, radiant glow.',
    detailedDescription: 'The VOVA Active Retinol Face Cream delivers powerful hydration and visible skin renewal in every application. Formulated with active retinol and witch hazel extract, this cream helps smooth fine lines, refine texture, and restore a healthy, radiant glow. This dermatologist-tested formula is designed to minimize irritation while maximizing anti-aging benefits for all skin types.',
    price: 4.06,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866246/bpd-9_s8ytej.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['retinol cream', 'anti-aging moisturizer', 'witch hazel', 'fine lines', 'skin renewal'],
    benefits: [
      'Active Retinol Formula',
      'Witch Hazel Extract',
      'Visible Skin Renewal'
    ],
    detailedBenefits: [
      'Retinol Technology: Proven anti-aging ingredient that promotes cell turnover and collagen production',
      'Witch Hazel Conditioning: Natural astringent that helps refine pores and balance skin',
      'Intensive Hydration: Deeply moisturizes without clogging pores or causing greasiness',
      'Texture Refinement: Smooths rough patches and evens skin surface for flawless makeup application',
      'Fine Line Reduction: Visibly minimizes appearance of wrinkles and expression lines',
      'Gentle Formula: Buffered retinol minimizes irritation for sensitive skin types'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/vova-active-retinol-face-cream-30ml-p-1550754897057034240.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1260
  },
  {
    id: 'beauty-010',
    name: 'Night Sleep Tightening Cream Body Lotion | Overnight Firming Treatment for Smooth, Supple Skin',
    description: 'Wake up to firmer, smoother skin with the Night Sleep Tightening Cream Body Lotion. Designed to work while you rest, this rich, fast-absorbing formula helps tighten, tone, and deeply hydrate your skin overnight. The lightweight cream melts effortlessly into the body, leaving your skin soft, supple, and beautifully rejuvenated by morning.',
    detailedDescription: 'Wake up to firmer, smoother skin with the Night Sleep Tightening Cream Body Lotion. Designed to work while you rest, this rich, fast-absorbing formula helps tighten, tone, and deeply hydrate your skin overnight. The lightweight cream melts effortlessly into the body, leaving your skin soft, supple, and beautifully rejuvenated by morning. This nighttime treatment maximizes your skin\'s natural regeneration cycle.',
    price: 2.50,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866263/bpd-10_liurbg.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['night cream', 'firming lotion', 'body moisturizer', 'tightening cream', 'overnight treatment'],
    benefits: [
      'Nighttime Firming',
      'Deep Hydration',
      'Overnight Skin Renewal'
    ],
    detailedBenefits: [
      'Time-Release Technology: Continuously delivers active ingredients throughout the night',
      'Firming Complex: Ingredients that help tighten and tone the appearance of skin while you sleep',
      'Intensive Overnight Hydration: Deeply moisturizes to combat nighttime moisture loss',
      'Fast-Absorbing Formula: Lightweight texture that won\'t stain sheets or leave greasy residue',
      'Skin Rejuvenation: Supports natural nighttime repair processes for younger-looking skin',
      'Antioxidant Protection: Defends against environmental stressors that accelerate aging'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/night-sleep-tightening-cream-body-lotion-p-2506260328161610600.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1190
  },
  {
    id: 'beauty-011',
    name: 'Cherry Blossom Serum Hydrating Facial Treatment | Brightening & Nourishing Skin Care',
    description: 'Give your skin a refreshing burst of hydration with the Cherry Blossom Serum Hydrating Facial Treatment. Infused with natural cherry blossom extract, this serum helps nourish, brighten, and revitalize your complexion from the very first use. Its lightweight, fast-absorbing formula deeply penetrates the skin to deliver long-lasting moisture without leaving any greasy residue.',
    detailedDescription: 'Give your skin a refreshing burst of hydration with the Cherry Blossom Serum Hydrating Facial Treatment. Infused with natural cherry blossom extract, this serum helps nourish, brighten, and revitalize your complexion from the very first use. Its lightweight, fast-absorbing formula deeply penetrates the skin to deliver long-lasting moisture without leaving any greasy residue. Perfect for all skin types, including sensitive skin.',
    price: 1.93,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866263/bpd-11_v3y2q9.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['face serum', 'cherry blossom', 'hydrating serum', 'brightening', 'moisturizing treatment'],
    benefits: [
      'Cherry Blossom Extract',
      'Intense Hydration',
      'Complexion Brightening'
    ],
    detailedBenefits: [
      'Natural Cherry Blossom: Rich in antioxidants and vitamins that nourish and protect skin',
      'Deep Hydration Technology: Hyaluronic acid complex attracts and retains moisture for plump skin',
      'Brightening Effects: Helps even skin tone and reduce the appearance of dark spots',
      'Lightweight Texture: Fast-absorbing formula suitable for layering under moisturizers and sunscreen',
      'Universal Compatibility: Gentle formulation appropriate for all skin types including sensitive',
      'Non-Comedogenic: Won\'t clog pores or cause breakouts with regular use'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/cherry-blossom-serum-hydrating-facial-treatment-p-1614907335049228288.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1320
  },
  {
    id: 'beauty-012',
    name: 'Snail Mucin Hydrating Serum | Skin Repair & Brightening Treatment with Collagen & Hyaluronic Acid',
    description: 'Revive dull, dehydrated skin with the Snail Mucin Hydrating Serum, a lightweight formula packed with natural snail secretion filtrate, collagen, and hyaluronic acid. This serum deeply hydrates and strengthens the skin barrier, leaving your face smoother, firmer, and visibly brighter. Known for its healing properties, snail mucin helps repair damaged skin while promoting a healthy, youthful complexion.',
    detailedDescription: 'Revive dull, dehydrated skin with the Snail Mucin Hydrating Serum, a lightweight formula packed with natural snail secretion filtrate, collagen, and hyaluronic acid. This serum deeply hydrates and strengthens the skin barrier, leaving your face smoother, firmer, and visibly brighter. Known for its healing properties, snail mucin helps repair damaged skin while promoting a healthy, youthful complexion.',
    price: 1.00,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866314/bpd-12_he0va2.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['snail mucin', 'hydrating serum', 'repairing serum', 'brightening', 'collagen serum'],
    benefits: [
      'Snail Secretion Filtrate',
      'Skin Barrier Repair',
      'Anti-Aging Benefits'
    ],
    detailedBenefits: [
      'Snail Mucin Healing: Natural secretion that promotes skin regeneration and repair',
      'Collagen Boosting: Helps maintain skin elasticity and reduce signs of aging',
      'Hyaluronic Acid Hydration: Attracts and retains moisture for plump, dewy skin',
      'Scar Reduction: May help diminish the appearance of acne scars and blemishes',
      'Barrier Strengthening: Reinforces skin\'s natural protective function against environmental stressors',
      'Gentle Formula: Suitable for sensitive skin and all ages'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/snail-mucin-hydrating-serum-p-2412290629311618700.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.7,
    reviewCount: 1450
  },
  {
    id: 'beauty-013',
    name: 'Dark Spot Fading Face Wash | Turmeric Root Cleanser with Avocado Oil & Salicylic Acid',
    description: 'Formulated with turmeric root extract, avocado oil, jojoba seed oil, and salicylic acid, this face wash targets uneven skin tone and dullness while remaining gentle enough for daily use. Turmeric helps fade dark spots naturally, avocado oil deeply nourishes, and jojoba balances sebum levels. Salicylic acid clears away dead skin cells to reveal a smoother, brighter complexion.',
    detailedDescription: 'Formulated with turmeric root extract, avocado oil, jojoba seed oil, and salicylic acid, this face wash targets uneven skin tone and dullness while remaining gentle enough for daily use. Turmeric helps fade dark spots naturally, avocado oil deeply nourishes, and jojoba balances sebum levels. Salicylic acid clears away dead skin cells to reveal a smoother, brighter complexion. This balanced formula cleanses thoroughly without stripping natural oils.',
    price: 1.19,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866769/bpd-13_bkzapr.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['face wash', 'dark spot treatment', 'turmeric cleanser', 'brightening', 'exfoliating wash'],
    benefits: [
      'Dark Spot Reduction',
      'Gentle Exfoliation',
      'Natural Brightening'
    ],
    detailedBenefits: [
      'Turmeric Root Extract: Natural brightening agent that helps fade dark spots and even skin tone',
      'Avocado Oil Nourishment: Rich in vitamins and fatty acids to moisturize and protect skin',
      'Jojoba Seed Oil Balancing: Mimics skin\'s natural oils to regulate sebum production',
      'Salicylic Acid Exfoliation: Gentle beta hydroxy acid that removes dead skin cells and unclogs pores',
      'Daily Gentle Cleansing: Suitable for morning and evening use without over-drying',
      'Complexion Enhancement: Promotes a clearer, more radiant, and even-toned complexion'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/dark-spot-fading-face-wash-p-17757278943',
    inStock: true,
    rating: 4.3,
    reviewCount: 1080
  },
  // Additional Beauty Products
  {
    id: 'beauty-014',
    name: 'Cleaner To Remove Blackheads | Ultrasonic Facial Cleaning Device with Ion Technology',
    description: 'This blackhead remover and facial cleaning device combines ultrasonic technology with positive and negative ion cleansing to deeply purify your pores. The advanced sonic waves help dislodge debris from deep within pores, while the ion system works to remove oil and impurities for smoother, clearer skin. Perfect for achieving salon-quality cleansing at home.',
    price: 6.07,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866768/bpd-14_c8kg3w.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['blackhead remover', 'facial cleaning', 'ultrasonic technology', 'pore cleansing', 'skincare device'],
    benefits: [
      'Ultrasonic Technology',
      'Positive/Negative Ion Cleansing',
      'Deep Pore Purification'
    ],
    detailedBenefits: [
      'Ultrasonic Cleaning Technology: Advanced sonic waves help dislodge debris from deep within pores',
      'Ion Cleansing System: Positive and negative ions work together to remove oil and impurities',
      'Deep Pore Purification: Thoroughly cleanses to reveal smoother, clearer skin',
      'Gentle on Skin: Safe for regular use without causing irritation',
      'Professional Results: Achieve salon-quality cleansing at home',
      'Improved Skin Texture: Leaves skin feeling smoother and looking more refined'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/cleaner-to-remove-blackheads-import-beauty-instrument-to-wash-your-face-p-1394555201851101184.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1150
  },
  {
    id: 'beauty-015',
    name: 'Bio Collagen True Deep Mask | Overnight Facial Care Collagen Mask for Moisturizing & Anti-Aging',
    description: 'Wake up to visibly smoother and hydrated skin with the Bio Collagen True Deep Mask. This overnight facial mask is infused with collagen, hyaluronic acid, niacinamide, glycerin and vitamin E—a powerful blend that deeply nourishes, firms, and rejuvenates tired skin while you sleep. Designed for intensive overnight treatment, this mask works while you rest to deliver maximum hydration and anti-aging benefits.',
    detailedDescription: 'Wake up to visibly smoother and hydrated skin with the Bio Collagen True Deep Mask. This overnight facial mask is infused with collagen, hyaluronic acid, niacinamide, glycerin, and vitamin E—a powerful blend that deeply nourishes, firms, and rejuvenates tired skin while you sleep. Designed for intensive overnight treatment, this mask works while you rest to deliver maximum hydration and anti-aging benefits.',
    price: 16.32,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866769/bpd-15_f2qxtk.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['collagen mask', 'overnight mask', 'anti-aging', 'hydrating mask', 'facial mask'],
    benefits: [
      'Collagen Infusion',
      'Overnight Hydration',
      'Anti-Aging Formula'
    ],
    detailedBenefits: [
      'Collagen Complex: Helps improve skin elasticity and reduce signs of aging',
      'Hyaluronic Acid: Deeply hydrates and plumps the skin for a youthful appearance',
      'Niacinamide Brightening: Evens skin tone and reduces the appearance of dark spots',
      'Overnight Repair: Works while you sleep to rejuvenate and nourish tired skin',
      'Vitamin E Protection: Antioxidants defend against environmental stressors',
      'Glycerin Moisturizing: Locks in moisture for long-lasting hydration'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/bio-collagen-true-deep-mask-collagen-mask-overnight-facial-care-collagen-mask-moisturizing-anti-aging-mask-p-2407171314351629800.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1280
  },
  {
    id: 'beauty-016',
    name: 'Collagen Wrapping Face Night Mask | Natural Ingredients for Firming, Elasticity & Hydration',
    description: 'Wake up with firmer, smoother, and deeply hydrated skin using the Collagen Wrapping Face Night Mask. Formulated with natural collagen components, this powerful night treatment helps restore skin elasticity, reduce fine lines, and tighten sagging skin while you sleep. This advanced formula wraps the skin in nourishing ingredients throughout the night for maximum anti-aging benefits.',
    detailedDescription: 'Wake up with firmer, smoother, and deeply hydrated skin using the Collagen Wrapping Face Night Mask. Formulated with natural collagen components, this powerful night treatment helps restore skin elasticity, reduce fine lines, and tighten sagging skin while you sleep. This advanced formula wraps the skin in nourishing ingredients throughout the night for maximum anti-aging benefits.',
    price: 2.11,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866770/bpd-16_kg07e9.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['night mask', 'collagen mask', 'firming', 'anti-wrinkle', 'hydrating mask'],
    benefits: [
      'Collagen Wrapping Technology',
      'Firming Action',
      'Anti-Wrinkle Formula'
    ],
    detailedBenefits: [
      'Natural Collagen Components: Support skin elasticity and reduce signs of aging',
      'Firming Complex: Helps tighten sagging skin for a more lifted appearance',
      'Deep Hydration: Intensely moisturizes to combat dryness and dehydration',
      'Overnight Renewal: Works while you sleep to restore youthful skin appearance',
      'Fine Line Reduction: Helps minimize the appearance of wrinkles and expression lines',
      'Gentle Night Treatment: Suitable for all skin types including sensitive skin'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/face-night-mask-collagen-wrapping-mask-natural-ingredients-firming-elasticity-hydration-anti-wrinkle-for-skin-care-p-2407230806361625000.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.3,
    reviewCount: 1020
  },
  {
    id: 'beauty-017',
    name: 'Snow Grass Facial Skincare Set | Complete Routine for Hydration & Radiant Glow',
    description: 'Experience the refreshing power of Snow Grass Facial Skincare Set, a complete routine designed to hydrate, brighten, and restore your skin’s natural glow. This comprehensive set includes multiple products that work together to deliver intense hydration, even skin tone, and a healthy, radiant complexion. Perfect for those seeking a complete skincare solution.',
    detailedDescription: 'Experience the refreshing power of Snow Grass Facial Skincare Set, a complete routine designed to hydrate, brighten, and restore your skin’s natural glow. This comprehensive set includes multiple products that work together to deliver intense hydration, even skin tone, and a healthy, radiant complexion.',
    price: 6.55,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866769/bpd-17_v0yrpq.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['skincare set', 'snow grass', 'hydrating', 'brightening', 'complete routine'],
    benefits: [
      'Complete Skincare Routine',
      'Hydrating Formula',
      'Brightening Effects'
    ],
    detailedBenefits: [
      'Snow Grass Extract: Natural ingredient known for its hydrating and soothing properties',
      'Complete Routine: Multiple products for cleansing, treating, and moisturizing',
      'Radiance Boosting: Helps restore skin\'s natural glow and even tone',
      'Deep Hydration: Intensively moisturizes for plump, dewy skin',
      'Refreshing Feel: Lightweight formulas that absorb quickly without greasiness',
      'Value Set: Comprehensive skincare routine at an affordable price point'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/snow-grass-set-combination-facial-skincare-cosmetics-p-2407180958331623400.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1180
  },
  {
    id: 'beauty-018',
    name: 'Electric Facial Massage Mask | Face Massager for Skin Tightening, Moisturizing & Anti-Wrinkle Treatment',
    description: 'Upgrade your skincare routine with the Electric Facial Massage Mask, a professional-grade beauty device designed to tighten, lift, and rejuvenate your skin — right at home. Crafted from food-grade silicone, this facial massager is gentle on all skin types and safe for daily use. It uses low-frequency pulse technology to penetrate deep into the dermis layer, stimulating collagen production, improving blood circulation, and enhancing nutrient absorption for firmer, glowing skin.',
    detailedDescription: 'Upgrade your skincare routine with the Electric Facial Massage Mask, a professional-grade beauty device designed to tighten, lift, and rejuvenate your skin — right at home. Crafted from food-grade silicone, this facial massager is gentle on all skin types and safe for daily use. It uses low-frequency pulse technology to penetrate deep into the dermis layer, stimulating collagen production, improving blood circulation, and enhancing nutrient absorption for firmer, glowing skin.',
    price: 13.96,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866770/bpd-18_iwo3sd.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['facial mask', 'massage device', 'skin tightening', 'anti-wrinkle', 'low-frequency therapy'],
    benefits: [
      'Low-Frequency Pulse Technology',
      'Skin Tightening',
      'Professional-Grade Results'
    ],
    detailedBenefits: [
      'Food-Grade Silicone: Safe, hypoallergenic material suitable for all skin types',
      'Low-Frequency Therapy: Deep penetration to stimulate collagen production',
      'Skin Tightening: Helps lift and firm the appearance of sagging skin',
      'Improved Circulation: Enhances blood flow for a healthy, radiant complexion',
      'Daily Use Safe: Gentle enough for regular treatments without irritation',
      'Anti-Wrinkle Benefits: Reduces the appearance of fine lines and expression marks'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/electric-facial-massage-mask-face-massager-skin-tightening-moisturizes-anti-wrinkle-reduces-wrinkles-beauty-device-skincare-p-1414492964843032576.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1220
  },
  {
    id: 'beauty-019',
    name: 'Pore Cleansing and Facial Cleanser | Sonic Technology Blackhead Remover with Rechargeable Design',
    description: 'This Pore Cleansing and Facial Cleanser is designed to deeply purify your skin, remove blackheads, and improve overall texture with advanced sonic technology. Crafted from durable ABS+PC and 304 stainless steel materials, it combines efficiency with comfort for daily skincare routines. Equipped with a rechargeable DC3.7V polymer battery and USB charging feature, this lightweight device offers easy, cordless use anywhere.',
    detailedDescription: 'This Pore Cleansing and Facial Cleanser is designed to deeply purify your skin, remove blackheads, and improve overall texture with advanced sonic technology. Crafted from durable ABS+PC and 304 stainless steel materials, it combines efficiency with comfort for daily skincare routines. Equipped with a rechargeable DC3.7V polymer battery and USB charging feature, this lightweight device offers easy, cordless use anywhere.',
    price: 12.96,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866770/bpd-19_idytqf.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['pore cleanser', 'facial scrubber', 'sonic technology', 'rechargeable', 'blackhead removal'],
    benefits: [
      'Sonic Technology',
      'Rechargeable Design',
      'Deep Pore Cleansing'
    ],
    detailedBenefits: [
      'Advanced Sonic Cleansing: High-frequency vibrations remove dirt, oil, and debris',
      'Rechargeable Battery: Cordless convenience with USB charging capability',
      'Durable Construction: ABS+PC and stainless steel materials for long-lasting use',
      'Blackhead Removal: Effectively clears clogged pores for smoother skin',
      'Improved Texture: Regular use helps refine skin surface and reduce roughness',
      'Portable Design: Lightweight and easy to use at home or while traveling'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/pore-cleansing-and-facial-cleanser-p-C023D8F2-A33B-4DB9-9FA5-9F24BFF83E89.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.3,
    reviewCount: 1150
  },
  {
    id: 'beauty-020',
    name: 'Electric Light Beauty Instrument Facial Mask | Seven-Color LED Light Therapy Device for Skin Rejuvenation',
    description: 'The Electric Light Beauty Instrument Facial Mask is a 7-color LED light therapy device designed to rejuvenate and revitalize your skin from the comfort of your home. Crafted from durable plastic and high-quality materials, this facial mask combines light energy with gentle positive ions to enhance absorption of skincare products and improve overall complexion.',
    detailedDescription: 'The Electric Light Beauty Instrument Facial Mask is a 7-color LED light therapy device designed to rejuvenate and revitalize your skin from the comfort of your home. Crafted from durable plastic and high-quality materials, this facial mask combines light energy with gentle positive ions to enhance absorption of skincare products and improve overall complexion.',
    price: 10.49,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866781/bpd-20_nqep4o.png',
    category: 'Beauty & Cosmetics',
    tags: ['led mask', 'light therapy', '7-color', 'facial mask', 'skin rejuvenation'],
    benefits: [
      '7-Color LED Therapy',
      'Light Energy Treatment',
      'Skin Rejuvenation'
    ],
    detailedBenefits: [
      'Seven Light Colors: Each wavelength targets specific skin concerns for comprehensive treatment',
      'Light Energy Technology: Non-invasive therapy that revitalizes skin at the cellular level',
      'Positive Ion Enhancement: Improves absorption of serums and moisturizers',
      'Home Convenience: Professional-grade light therapy without leaving your house',
      'Complexion Improvement: Helps even skin tone and enhance natural radiance',
      'Relaxing Treatment: Soothing experience that promotes relaxation during use'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/electric-light-beauty-instrument-facial-mask-instrument-seven-color-light-p-1615247212366278656.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.2,
    reviewCount: 1090
  },
  {
    id: 'beauty-021',
    name: 'Yihe Neem Oil Care Essential Oil | Nourishes Scalp & Skin with Natural Neem Oil for Massage',
    description: 'Yihe Neem Oil Care Essential Oil is a deeply nourishing treatment designed to support healthy scalp and skin. Known for its natural antibacterial and anti-inflammatory properties, neem oil helps soothe irritation, reduce dandruff, and promote stronger, healthier hair growth. This pure, cold-pressed oil is ideal for massage therapy and daily conditioning.',
    detailedDescription: 'Yihe Neem Oil Care Essential Oil is a deeply nourishing treatment designed to support healthy scalp and skin. Known for its natural antibacterial and anti-inflammatory properties, neem oil helps soothe irritation, reduce dandruff, and promote stronger, healthier hair growth. This pure, cold-pressed oil is ideal for massage therapy and daily conditioning.',
    price: 10.39,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866808/bpd-21_lqgcnj.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['neem oil', 'essential oil', 'scalp care', 'massage oil', 'anti-inflammatory'],
    benefits: [
      'Natural Antibacterial Properties',
      'Anti-Inflammatory Action',
      'Scalp Nourishment'
    ],
    detailedBenefits: [
      'Neem Oil Benefits: Natural antibacterial properties help maintain scalp health',
      'Anti-Inflammatory Action: Soothes irritated skin and scalp conditions',
      'Dandruff Reduction: Helps minimize flaking and itching associated with dry scalp',
      'Hair Growth Support: Nourishes follicles to promote stronger, healthier hair',
      'Pure Cold-Pressed: Unrefined oil retains maximum potency of beneficial compounds',
      'Multi-Purpose Use: Suitable for scalp massage, skin conditioning, and aromatherapy'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/yihe-neem-oil-care-essential-oil-nourishes-scalp-skin-neem-oil-massage-oil-p-1947929879801126914.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1260
  },
  {
    id: 'beauty-022',
    name: 'Household Beauty Silicone LED Mask | 7-Color Light Phototherapy Photon Skin Rejuvenation Facial Device',
    description: 'The Household Beauty Silicone LED Mask is an advanced at-home skincare device that uses seven-color phototherapy to rejuvenate and refresh the skin. Made from high-quality silicone for comfort and flexibility, it helps moisturize, deeply cleanse, and reduce fine lines and wrinkles. This innovative device brings professional-grade light therapy directly to your home.',
    detailedDescription: 'The Household Beauty Silicone LED Mask is an advanced at-home skincare device that uses seven-color phototherapy to rejuvenate and refresh the skin. Made from high-quality silicone for comfort and flexibility, it helps moisturize, deeply cleanse, and reduce fine lines and wrinkles. This innovative device brings professional-grade light therapy directly to your home.',
    price: 24.88,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866879/bpd-22_upewrf.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['silicone led mask', 'phototherapy', '7-color light', 'acne removal', 'skin rejuvenation'],
    benefits: [
      'Silicone Comfort Design',
      '7-Color Phototherapy',
      'Acne Treatment'
    ],
    detailedBenefits: [
      'High-Quality Silicone: Flexible, comfortable material that conforms to facial contours',
      'Seven Light Therapy: Different wavelengths target various skin concerns effectively',
      'Acne Removal: Blue light helps reduce breakouts and blemish-causing bacteria',
      'Anti-Aging Benefits: Red and near-infrared light help reduce fine lines and wrinkles',
      'Deep Cleansing: Light therapy helps purify pores for clearer, smoother skin',
      'Home Convenience: Professional results without costly spa visits'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/household-beauty-silicone-mask-color-light-7-colors-led-phototherapy-photon-skin-rejuvenation-facial-acne-removal-p-1783376511744090112.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1180
  },
  {
    id: 'beauty-023',
    name: 'BB Cream Foundation | Lightweight Water-Based Formula for Natural Coverage & Hydration',
    description: 'This BB Cream Foundation offers a smooth, even finish that blends seamlessly with your skin tone. Formulated with a lightweight, water-based texture, it hydrates the skin while providing natural coverage that conceals imperfections and evens out tone. Perfect for daily wear, this multitasking product combines skincare and makeup benefits.',
    detailedDescription: 'This BB Cream Foundation offers a smooth, even finish that blends seamlessly with your skin tone. Formulated with a lightweight, water-based texture, it hydrates the skin while providing natural coverage that conceals imperfections and evens out tone. Perfect for daily wear, this multitasking product combines skincare and makeup benefits.',
    price: 10.87,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866878/bpd-23_epxkrz.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['bb cream', 'foundation', 'concealer', 'lightweight', 'natural coverage'],
    benefits: [
      'Lightweight Formula',
      'Natural Coverage',
      'Hydrating Properties'
    ],
    detailedBenefits: [
      'Multitasking Product: Combines foundation, moisturizer, and skincare benefits',
      'Lightweight Texture: Water-based formula feels comfortable and non-greasy',
      'Natural Coverage: Evens skin tone while maintaining a fresh, natural look',
      'Hydration Benefits: Helps moisturize skin throughout the day',
      'Seamless Blend: Easily applies and blends for a flawless finish',
      'Skin-Friendly: Suitable for daily use on all skin types'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/bb-cream-foundation-p-8B673E03-A4B3-43C8-8572-2664B8011E74.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.3,
    reviewCount: 1120
  },
  {
    id: 'beauty-024',
    name: 'Refining and Brightening Foundation | High-Performance Liquid Formula for Tone Enhancement & Radiant Finish',
    description: 'The Refining and Brightening Foundation is a high-performance liquid formula designed to enhance skin tone, smooth texture, and deliver a natural, radiant finish. Enriched with brightening ingredients, it helps even out discoloration while maintaining a lightweight, breathable feel. Ideal for professional beauty treatments, this foundation works effectively with nanocoin or microneedling devices to ensure deep absorption and lasting luminosity.',
    detailedDescription: 'The Refining and Brightening Foundation is a high-performance liquid formula designed to enhance skin tone, smooth texture, and deliver a natural, radiant finish. Enriched with brightening ingredients, it helps even out discoloration while maintaining a lightweight, breathable feel. Ideal for professional beauty treatments, this foundation works effectively with nanocoin or microneedling devices to ensure deep absorption and lasting luminosity.',
    price: 11.24,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866879/bpd-24_eddir1.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['foundation', 'brightening', 'professional formula', 'liquid foundation', 'skin refining'],
    benefits: [
      'Brightening Formula',
      'Professional Performance',
      'Skin Refining'
    ],
    detailedBenefits: [
      'Tone Enhancement: Helps even out skin discoloration for a uniform complexion',
      'Texture Smoothing: Refines skin surface for a flawless, airbrushed look',
      'Lightweight Feel: Breathable formula that won\'t clog pores or feel heavy',
      'Professional Compatibility: Works effectively with advanced beauty devices and treatments',
      'Long-Lasting Luminosity: Maintains radiant finish throughout the day',
      'Versatile Application: Suitable for various skin types and coverage preferences'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/refining-and-brightening-foundation-p-C5926895-9FEE-4B38-8170-686FE289275B.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.4,
    reviewCount: 1190
  },
  {
    id: 'beauty-025',
    name: 'Anti-Aging Niacinamide Serum – Refine Pores and Enhance Youthful Glow with Hyaluronic Acid',
    description: 'This lightweight, fast-absorbing serum is packed with niacinamide, hyaluronic acid, and botanical extracts that target visible signs of aging while improving skin texture. It helps minimize enlarged pores, fade fine lines, and even out skin tone for a naturally radiant look.',
    detailedDescription: 'This lightweight, fast-absorbing serum is packed with niacinamide, hyaluronic acid, and botanical extracts that target visible signs of aging while improving skin texture. It helps minimize enlarged pores, fade fine lines, and even out skin tone for a naturally radiant look. The formula supports the skin’s barrier, boosts hydration, and restores firmness with consistent use. Ideal for all skin types, this serum leaves your complexion looking smoother, brighter, and more youthful every day.',
    price: 20.00,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866242/bpd-3_ypuwft.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['niacinamide serum', 'anti-aging', 'pore refining', 'hyaluronic acid', 'botanical extracts'],
    benefits: [
      'Niacinamide Formula',
      'Pore Minimization',
      'Anti-Aging Benefits'
    ],
    detailedBenefits: [
      'Pore Refining: Helps minimize the appearance of enlarged pores for smoother skin',
      'Fine Line Reduction: Niacinamide helps fade visible signs of aging',
      'Even Skin Tone: Brightens complexion and reduces discoloration',
      'Barrier Support: Strengthens skin\'s natural protective function',
      'Intense Hydration: Hyaluronic acid delivers lasting moisture',
      'Universal Compatibility: Suitable for all skin types including sensitive'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/anti-aging-niacinamide-serum-refine-pores-and-enhance-youthful-glow-p-1907404060472815618.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1320
  },
  {
    id: 'beauty-026',
    name: 'Large Mist Aromatherapy Spray Moisturizer | Humidifier and Diffuser for Home Office',
    description: 'The Large Mist Aromatherapy Spray Moisturizer combines elegant design with powerful performance to enhance your space. Crafted from durable plastic and available in glaze white or emerald green, it delivers a continuous, fine mist that keeps your air fresh, hydrated, and soothing.',
    detailedDescription: 'The Large Mist Aromatherapy Spray Moisturizer combines elegant design with powerful performance to enhance your space. Crafted from durable plastic and available in glaze white or emerald green, it delivers a continuous, fine mist that keeps your air fresh, hydrated, and soothing. This multifunctional device acts as both a humidifier and an aromatherapy diffuser, promoting relaxation while improving air quality. Its mechanical operation makes it simple to use, while the stylish desktop design fits perfectly into any home or office setting. Ideal for maintaining optimal humidity levels, easing dry skin, and creating a calming atmosphere.',
    price: 51.28,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866880/bpd-26_vkmzbe.png',
    category: 'Beauty & Cosmetics',
    tags: ['humidifier', 'aromatherapy', 'air purifier', 'mist spray', 'home office'],
    benefits: [
      'Aromatherapy Diffuser',
      'Air Humidifying',
      'Stylish Design'
    ],
    detailedBenefits: [
      'Dual Functionality: Combines humidifier and aromatherapy diffuser in one device',
      'Continuous Mist: Provides steady stream of moisture for optimal humidity',
      'Air Quality Improvement: Helps purify and freshen the surrounding environment',
      'Relaxation Promotion: Aromatherapy features help reduce stress and promote calm',
      'Dry Skin Relief: Adds moisture to air to help prevent skin dehydration',
      'Elegant Design: Available in attractive colors to complement any decor'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/large-mist-aromatherapy-spray-moisturizer-p-1465581200352612352.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1250
  },
  {
    id: 'beauty-027',
    name: 'Coconut Oil Shampoo for Hairs | Deeply Nourishing Formula for Strength, Repair & Shine',
    description: 'Experience the power of pure coconut oil with this deeply nourishing shampoo designed to strengthen, repair, and hydrate every strand. Its rich, creamy formula penetrates deep into the hair shaft, restoring softness, shine, and manageability while reducing dryness and breakage.',
    detailedDescription: 'Experience the power of pure coconut oil with this deeply nourishing shampoo designed to strengthen, repair, and hydrate every strand. Its rich, creamy formula penetrates deep into the hair shaft, restoring softness, shine, and manageability while reducing dryness and breakage. Perfect for dry, frizzy, or damaged hair, it promotes a healthy scalp and natural luster without harsh sulfates or parabens. Safe for daily use and color-treated hair, this shampoo delivers a rich, foamy cleanse that leaves your hair smooth, revitalized, and beautifully glossy.',
    price: 10.62,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866879/bpd-27_k8ui1y.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['coconut oil shampoo', 'hydrating shampoo', 'hair repair', 'natural shine', 'sulfate-free', 'color-safe'],
    benefits: [
      'Coconut Oil Infusion',
      'Deep Hydration',
      'Hair Repair'
    ],
    detailedBenefits: [
      'Pure Coconut Oil: Natural ingredient that deeply nourishes and moisturizes hair',
      'Strength Building: Helps reduce breakage and strengthen hair from root to tip',
      'Shine Enhancement: Restores natural luster for beautiful, glossy hair',
      'Gentle Cleansing: Sulfate-free formula that won\'t strip natural oils',
      'Manageability Boost: Makes hair easier to style and reduces frizz',
      'Color-Safe Formula: Safe for daily use on color-treated hair',
      'Rich, Foamy Lather: Delivers a luxurious cleansing experience',
      'Scalp Health: Promotes a healthy scalp environment for optimal hair growth'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/coconut-oil-shampoo-for-hairs-p-1970092643869839361.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.5,
    reviewCount: 1320
  },
  // Additional Beauty Product
  {
    id: 'beauty-028',
    name: 'Red Onion Shampoo & Conditioner Suit | Complete Hair Care Set for Growth, Strength & Shine',
    description: 'The Red Onion Shampoo and Conditioner Suit is a complete hair care solution designed to restore strength, shine, and softness to every strand. Enriched with red onion extract, this powerful formula boosts scalp circulation, reduces breakage, and promotes healthier hair growth.',
    detailedDescription: 'The Red Onion Shampoo and Conditioner Suit is a complete hair care solution designed to restore strength, shine, and softness to every strand. Enriched with red onion extract, this powerful formula boosts scalp circulation, reduces breakage, and promotes healthier hair growth. The set deeply nourishes and moisturizes while protecting color-treated hair from dryness and damage. Perfect for all hair types, it soothes scalp irritation, enhances smoothness, and improves curl definition. Each product in the set—shampoo, conditioner, hair mask, and essential oil—works together to leave your hair soft, vibrant, and resilient with every wash.',
    price: 17.91,
    imageUrl: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761866880/bpd-28_nb0ts2.jpg',
    category: 'Beauty & Cosmetics',
    tags: ['red onion shampoo', 'conditioner set', 'hair growth', 'scalp circulation', 'hair strengthening'],
    benefits: [
      'Red Onion Extract',
      'Complete Hair Care Set',
      'Scalp Circulation Boost'
    ],
    detailedBenefits: [
      'Red Onion Extract: Natural ingredient that boosts scalp circulation and promotes hair growth',
      'Complete Set: Includes shampoo, conditioner, hair mask, and essential oil for comprehensive care',
      'Breakage Reduction: Strengthens hair shafts to reduce split ends and breakage',
      'Color Protection: Safeguards color-treated hair from fading and damage',
      'Scalp Soothing: Reduces irritation and creates a healthy environment for hair growth',
      'Curl Enhancement: Improves definition and smoothness for curly hair types',
      'Universal Compatibility: Suitable for all hair types including sensitive scalps',
      'Deep Nourishment: Intensive moisturizing for dry, damaged, or chemically treated hair'
    ],
    buyNowUrl: 'https://www.cjdropshipping.com/product/red-onion-shampoo-conditioner-suit-p-2505170857051617400.html?token=f7b00a22-64a4-4d38-bc50-c4cffe51af47',
    inStock: true,
    rating: 4.6,
    reviewCount: 1420
  }
];

export default products;