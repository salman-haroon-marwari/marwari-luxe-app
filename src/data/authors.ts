export interface Author {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  fullBio: string;
  email: string;
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  expertise: string[];
  education: string;
  certifications: string[];
  experience: string;
  stats: {
    articles: string;
    readers: string;
    years: string;
    awards: string;
  };
}

export const mainAuthor: Author = {
  id: "main-author",
  name: "Dr. Sarah Mitchell",
  role: "Health & Wellness Expert",
  photo: "/Dr. Sarah Mitchell.jfif",
  bio: "Board-certified nutritionist and health writer with 10+ years of experience.",
  fullBio: "Dr. Sarah Mitchell is a board-certified nutritionist and health writer with over 10 years of experience in the field of health and wellness. She holds a PhD in Nutritional Sciences from Stanford University and is a certified nutritionist and registered dietitian. Dr. Mitchell has dedicated her career to helping individuals achieve optimal health through evidence-based nutrition and lifestyle interventions. Her work has been featured in numerous publications and she regularly speaks at health and wellness conferences. She has authored over 80 articles on health, wellness, beauty, and nutrition topics, reaching over 150,000 readers monthly. Dr. Mitchell's approach combines scientific research with practical application to help readers make informed decisions about their health and wellbeing.",
  email: "sarah@healthblog.com",
  social: {
    twitter: "https://twitter.com/sarahmitchell",
    linkedin: "https://linkedin.com/in/sarahmitchell",
    instagram: "https://instagram.com/sarahmitchell"
  },
  expertise: ["Health & Wellness", "Nutrition", "Weight Loss", "Mental Health", "Skincare", "Fitness"],
  education: "PhD Nutritional Sciences, Stanford University",
  certifications: ["Certified Nutritionist", "Registered Dietitian"],
  experience: "10+ Years",
  stats: { 
    articles: "80+", 
    readers: "150K+", 
    years: "10+", 
    awards: "5" 
  }
};

export const salmanMarwari: Author = {
  id: "salman-marwari",
  name: "Salman Marwari",
  role: "Beauty & Cosmetics Specialist",
  photo: "/salman-marwari.PNG",
  bio: "Beauty expert and cosmetics consultant with expertise in skincare and makeup artistry.",
  fullBio: "Salman Marwari is a renowned beauty expert and cosmetics specialist with extensive experience in skincare, makeup artistry, and beauty product development. He has worked with leading cosmetic brands and has helped countless individuals enhance their natural beauty through personalized skincare routines and makeup techniques. Salman's expertise spans across various aspects of beauty including anti-aging treatments, skin care regimens, makeup application, and cosmetic ingredient analysis. His approach combines scientific knowledge with artistic flair to help clients achieve their beauty goals.",
  email: "salman@marwariluxe.com",
  social: {
    twitter: "https://twitter.com/salmanmarwari",
    linkedin: "https://linkedin.com/in/salmanmarwari",
    instagram: "https://instagram.com/salmanmarwari"
  },
  expertise: ["Beauty & Cosmetics", "Skincare", "Makeup Artistry", "Product Reviews", "Beauty Trends"],
  education: "Cosmetology Certification, Beauty Institute",
  certifications: ["Professional Makeup Artist", "Skincare Specialist"],
  experience: "8+ Years",
  stats: { 
    articles: "45+", 
    readers: "85K+", 
    years: "8+", 
    awards: "3" 
  }
};

export const allAuthors: Author[] = [mainAuthor, salmanMarwari];