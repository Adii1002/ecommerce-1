'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down';
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  width = 400,
  height = 400,
  className = '',
  objectFit = 'cover',
  priority = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={imgRef}
      className={`relative bg-gray-100 ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit }}
          onLoadingComplete={() => setIsLoaded(true)}
          priority={priority}
        />
      )}
      {!isLoaded && isVisible && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
