'use client';

import Link from 'next/link';
import LazyImage from './LazyImage';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color?: string;
  badge?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`/product/${product.id}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group cursor-pointer block">
      {/* Product Image */}
      <Link
        href={`/product/${product.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition duration-300">
          {/* Badge - Optional */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
              {product.badge}
            </div>
          )}

          {product.image ? (
            <LazyImage
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full rounded-lg"
              objectFit="cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
              <span className="text-gray-600 font-medium">Shoe Image</span>
            </div>
          )}

          {/* Hover Actions */}
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full font-medium text-center cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">{product.category}</p>
        <Link
          href={`/product/${product.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-base md:text-lg font-semibold text-black group-hover:text-gray-700 transition cursor-pointer">
            {product.name}
          </h3>
        </Link>

        {product.color && (
          <p className="text-sm text-gray-500">{product.color}</p>
        )}

        <p className="text-base md:text-lg font-semibold text-black pt-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
