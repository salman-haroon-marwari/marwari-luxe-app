'use client';

import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="py-0 bg-white md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden text-center pt-[20px]">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to <span className="text-purple-600">Marwari Luxe</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 transition-opacity duration-700 opacity-100 pt-0 md:pt-0">
            <div className="hidden md:block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Welcome to <span className="text-purple-600">Marwari Luxe</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
             At Marwari Luxe, we combine ancient wellness traditions with modern science. We provide expert health and beauty articles, evidence-based wellness guides, and smart wellness tools to help you feel and look your best. Our content covers nutrition, skincare, fitness, and holistic wellness approaches that support your journey to optimal health.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We blend Ayurvedic wisdom with modern science to connect tradition and innovation. Every article and tool is carefully researched for accuracy, reliability, and practical application. Whether you need health advice, skincare guidance, or wellness tools, our content offers evidence-based information you can trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 transition-opacity duration-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Health & Beauty Articles</div>
              </div>
              <div className="text-center p-4 transition-opacity duration-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600">Happy Readers</div>
              </div>
              <div className="text-center p-4 transition-opacity duration-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Health & Fitness Tools</div>
              </div>
            </div>
          </div>
          

          {/* Image/Visual Content */}
          <div className="relative transition-opacity duration-700 opacity-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto/v1761864928/marwari2_hs4y31.jpg"
                  alt="Wellness Products"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-purple-600/20 rounded-lg"></div>
              </div>
              <div className="relative h-48 mt-8 hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto/v1762858786/blogb-3_bq9zlh.png"
                  alt="Beauty Products"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-pink-600/20 rounded-lg"></div>
              </div>
              <div className="relative h-48 -mt-8 hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://res.cloudinary.com/dxg5ldzkv/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto/v1762860104/blogb-5_pmytov.png"
                  alt="Traditional Heritage"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-orange-600/20 rounded-lg"></div>
              </div>
              <div className="relative h-48 hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761864913/blog29-5_xcnb95.png"
                  alt="Modern Innovation"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-lg"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">✨</span>
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xl">🌿</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;