import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    id: 1,
    title: "Today's Best Deals",
    description: "Save big on top brands",
    image: "https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg",
    link: "/deals",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    title: "Prime Member Deals",
    description: "Exclusive savings for Prime members",
    image: "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    link: "/prime-deals",
    buttonText: "Explore Prime Deals",
  },
  {
    id: 3,
    title: "Electronics Sale",
    description: "Latest gadgets at best prices",
    image: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    link: "/category/electronics",
    buttonText: "Shop Electronics",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* Slides */}
      <div 
        className="h-full transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-lg text-white">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg mb-6">{slide.description}</p>
                  <Link
                    href={slide.link}
                    className="bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-500 inline-block font-semibold"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 