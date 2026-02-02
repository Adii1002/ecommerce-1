'use client';

import LazyImage from './LazyImage';

export default function Hero() {
  return (
    <section className="relative w-full h-80 md:h-[500px] lg:h-[600px] bg-gray-900 overflow-hidden">
      {/* Background Image with Lazy Loading */}
      <div className="absolute inset-0">
        <LazyImage
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop"
          alt="Hero Background - Leveling Shoes"
          width={1200}
          height={600}
          className="w-full h-full"
          objectFit="cover"
          priority={true}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center px-4">
          <p className="text-base md:text-2xl text-white font-light mb-4">
            Only one way to find out.
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            JUST DO IT.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-6 py-3 bg-white text-black hover:bg-black hover:text-white rounded-full font-medium transition duration-300 cursor-pointer">
              Shop
            </button>
            <button className="px-6 py-3 bg-black text-white border border-white hover:bg-white hover:text-black rounded-full font-medium transition duration-300 cursor-pointer">
              Watch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
