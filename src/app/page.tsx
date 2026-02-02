import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { ScrollToTopButton } from '@/components/ScrollToTop';

// Lazy load components that appear below the fold
const FeaturedProducts = dynamic(
  () => import('@/components/FeaturedProducts'),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
    ssr: true,
  }
);

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-gray-100 animate-pulse" />,
  ssr: true,
});

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
