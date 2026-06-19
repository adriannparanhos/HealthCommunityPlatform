"use client";

import { useState } from "react";

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Platform preview ${index + 1}`} 
            className="h-[400px] w-full shrink-0 object-cover opacity-80 md:h-[600px]"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/50 p-3 text-white backdrop-blur-sm transition-colors hover:bg-brand-primary hover:text-slate-950"
      >
        &#8592;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/50 p-3 text-white backdrop-blur-sm transition-colors hover:bg-brand-primary hover:text-slate-950"
      >
        &#8594;
      </button>
    </div>
  );
}