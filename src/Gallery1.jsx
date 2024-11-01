import React, { useEffect, useState } from 'react';
import Image1 from './assets/image1.jpeg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';
import Image4 from './assets/image4.jpg';

export const Gallery1 = () => {
  const originalImages = [Image1, Image2, Image3, Image4];
  const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]]; // Add duplicate first and last images

  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset to the real first image if we've reached the end
    if (currentIndex === images.length - 1) {
      setTimeout(() => {
        setCurrentIndex(1);
      }, 500); // Delay for smooth transition
    }
    // Reset to the real last image if we've moved backward past the first
    if (currentIndex === 0) {
      setTimeout(() => {
        setCurrentIndex(images.length - 2);
      }, 500);
    }
  }, [currentIndex, images.length]);

  const offset = -(currentIndex * 25);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden border border-gray-300 rounded-lg shadow-lg bg-white">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-1/4 flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};
