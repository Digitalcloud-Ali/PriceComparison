import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full">
        <Image
          src={images[selectedImage]}
          alt="Product"
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square ${
              selectedImage === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 25vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 