'use client'
import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Images */}
      <div className="overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out`}
          >
            {index === currentIndex && (
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-64 object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Next and Prev Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
