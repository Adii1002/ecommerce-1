'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SkeletonLoader from './SkeletonLoader';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color?: string;
  badge?: string; // Optional badge like "Trending", "Top Selling", "New", etc.
}

const products: Product[] = [
  {
    id: 1,
    name: 'Leveling Revolution 7',
    category: 'Running Shoes',
    price: 70,
    color: 'Black',
    badge: 'Trending',
  },
  {
    id: 2,
    name: 'Leveling Air Max 270',
    category: 'Lifestyle',
    price: 150,
    color: 'White',
    badge: 'Top Selling',
  },
  {
    id: 3,
    name: 'Leveling Blazer Mid 77',
    category: 'Basketball',
    price: 100,
    color: 'Navy',
  },
  {
    id: 4,
    name: 'Leveling Court Legacy',
    category: 'Tennis',
    price: 95,
    color: 'Gray',
    badge: 'New',
  },
  {
    id: 5,
    name: 'Leveling Dunk High',
    category: 'Streetwear',
    price: 125,
    color: 'Red',
    badge: 'Top Selling',
  },
  {
    id: 6,
    name: 'Leveling React Infinity',
    category: 'Running',
    price: 160,
    color: 'Blue',
  },
];

export default function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full section-padding bg-white">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover our latest collection of premium Leveling shoes and apparel
          </p>
        </div>

        <SkeletonLoader type="product" count={6} isLoading={isLoading}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </SkeletonLoader>
      </div>
    </section>
  );
}
