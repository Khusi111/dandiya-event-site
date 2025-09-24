"use client";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  showCount?: number;
  gap?: number;
  autoSlideInterval?: number;
}

export default function ImageCarousel({
  images,
  showCount = 3,
  gap = 16,
  autoSlideInterval = 3000,
}: ImageCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  const total = images.length;

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [total, autoSlideInterval]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Get visible images for infinite rotation
  const visibleImages = [];
  for (let i = 0; i < showCount; i++) {
    visibleImages.push(images[(startIndex + i) % total]);
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-4 transition-all duration-500">
        {visibleImages.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{
              width: `calc((100% - ${(showCount - 1) * gap}px)/${showCount})`,
            }}
          >
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Arrow Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-white/70 hover:bg-white text-[#B21D00] p-3 rounded-full shadow-lg"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-white/70 hover:bg-white text-[#B21D00] p-3 rounded-full shadow-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
}
