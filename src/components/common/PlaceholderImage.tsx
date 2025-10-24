import React from 'react';
import Image from 'next/image';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function PlaceholderImage({ src, alt, width = 800, height = 600, className = '' }: PlaceholderImageProps) {
  const [error, setError] = React.useState(false);

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={error ? '/images/placeholders/product-placeholder.jpg' : src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
} 