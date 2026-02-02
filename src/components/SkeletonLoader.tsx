'use client';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonLoaderProps {
  count?: number;
  type?: 'product' | 'text' | 'line' | 'circle';
  isLoading: boolean;
  children: React.ReactNode;
}

export default function SkeletonLoader({
  count = 1,
  type = 'product',
  isLoading,
  children,
}: SkeletonLoaderProps) {
  if (!isLoading) {
    return children;
  }

  const renderSkeletons = () => {
    switch (type) {
      case 'product':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton height={300} />
                <Skeleton height={20} />
                <Skeleton height={20} width="80%" />
                <Skeleton height={25} width="60%" />
              </div>
            ))}
          </div>
        );

      case 'text':
        return (
          <div className="space-y-3">
            {Array.from({ length: count }).map((_, i) => (
              <Skeleton key={i} height={20} />
            ))}
          </div>
        );

      case 'line':
        return (
          <div>
            {Array.from({ length: count }).map((_, i) => (
              <Skeleton key={i} height={16} className="mb-2" />
            ))}
          </div>
        );

      case 'circle':
        return (
          <div className="flex gap-4">
            {Array.from({ length: count }).map((_, i) => (
              <Skeleton key={i} circle height={60} width={60} />
            ))}
          </div>
        );

      default:
        return <Skeleton height={100} />;
    }
  };

  return (
    <SkeletonTheme baseColor="#f3f3f3" highlightColor="#e0e0e0">
      {renderSkeletons()}
    </SkeletonTheme>
  );
}
