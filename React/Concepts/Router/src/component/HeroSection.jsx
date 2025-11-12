import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Summer Collection 2025",
      subtitle: "New Arrivals",
      description: "Discover the latest trends in fashion. Fresh styles that define your summer.",
      cta: "Shop Now",
      bg: "bg-gradient-to-r from-amber-50 to-orange-50"
    },
    {
      title: "Urban Essentials",
      subtitle: "Everyday Comfort",
      description: "Elevate your daily style with our curated collection of modern essentials.",
      cta: "Explore Collection",
      bg: "bg-gradient-to-r from-slate-50 to-gray-50"
    },
    {
      title: "Limited Edition",
      subtitle: "Exclusive Drops",
      description: "Premium quality meets contemporary design. Get them before they're gone.",
      cta: "View Collection",
      bg: "bg-gradient-to-r from-blue-50 to-indigo-50"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      {/* Main Hero Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${slide.bg}`}
          >
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <p className="text-gray-600 text-sm font-medium tracking-wider uppercase mb-4">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group">
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-gray-900 w-8'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-gray-600">On orders over $50. Fast and reliable delivery to your door.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure transactions. Your payment information is safe with us.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day return policy. Shop with confidence and peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-gray-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="font-medium">🎉 Limited Time Offer:</span>
            <span>Get 20% off your first order with code</span>
            <span className="px-3 py-1 bg-white text-gray-900 rounded font-bold">WELCOME20</span>
          </div>
        </div>
      </div>
    </div>
  );
}