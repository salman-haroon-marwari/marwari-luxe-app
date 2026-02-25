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
  name: "Marwari Luxe Team",
  role: "Health & Wellness Experts",
  photo: "",
  bio: "Our dedicated team of health and wellness professionals committed to providing accurate, research-based information.",
  fullBio: "The Marwari Luxe Team consists of experienced health and wellness professionals who are passionate about helping individuals achieve their wellness goals. Our team combines expertise in nutrition, fitness, skincare, and holistic health to deliver comprehensive, evidence-based content. We stay updated with the latest research and trends to provide our readers with reliable information they can trust.",
  email: "team@marwariluxe.com",
  social: {},
  expertise: ["Health & Wellness", "Nutrition", "Fitness", "Skincare", "Wellness Research"],
  education: "Various Health & Wellness Certifications",
  certifications: ["Certified Health Professionals", "Wellness Experts"],
  experience: "Collective 50+ Years",
  stats: { 
    articles: "50+", 
    readers: "200+", 
    years: "5+", 
    awards: "Coming Soon" 
  }
};

export const salmanMarwari: Author = {
  id: "salman-marwari",
  name: "Marwari Luxe Team",
  role: "Beauty & Wellness Specialists",
  photo: "",
  bio: "Our beauty and wellness team bringing you expert insights on skincare, cosmetics, and holistic beauty approaches.",
  fullBio: "The Marwari Luxe Beauty Team specializes in all aspects of beauty and wellness. Our experts have extensive knowledge in skincare science, cosmetic formulations, beauty trends, and holistic wellness approaches. We focus on providing practical, evidence-based beauty advice that helps our readers enhance their natural beauty while maintaining healthy skin and overall wellbeing.",
  email: "beauty@marwariluxe.com",
  social: {},
  expertise: ["Beauty & Cosmetics", "Skincare Science", "Wellness Beauty", "Holistic Approaches"],
  education: "Beauty & Wellness Specializations",
  certifications: ["Beauty Experts", "Wellness Specialists"],
  experience: "Collective 30+ Years",
  stats: { 
    articles: "50+", 
    readers: "200+", 
    years: "5+", 
    awards: "Coming Soon" 
  }
};

export const allAuthors: Author[] = [mainAuthor, salmanMarwari];