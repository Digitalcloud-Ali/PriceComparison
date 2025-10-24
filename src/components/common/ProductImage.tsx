import React from 'react';
import Image from 'next/image';
import { DEFAULT_PRODUCT_IMAGE } from '@/utils/constants';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ProductImage({ src, alt, className = '', priority = false }: ProductImageProps) {
  const [error, setError] = React.useState(false);

  return (
    <Image
      src={error ? DEFAULT_PRODUCT_IMAGE : src}
      alt={alt}
      fill
      className={`object-contain p-4 ${className}`}
      onError={() => setError(true)}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
} 