'use client';

import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
}

export function SmoothScrollLink({
  to,
  children,
  className = '',
  offset = -100,
  duration = 500,
}: SmoothScrollLinkProps) {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      offset={offset}
      duration={duration}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </ScrollLink>
  );
}

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition z-40"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
