'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import AuthModals from './AuthModals';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-8 flex justify-end items-center h-9 text-xs">
          <div className="flex items-center gap-2 text-gray-800">
            <Link
              href="/help"
              className="hover:text-black transition cursor-pointer"
            >
              Help
            </Link>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setIsSignUpOpen(true)}
              className="hover:text-black transition cursor-pointer bg-transparent border-none p-0"
            >
              Sign Up
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hover:text-black transition cursor-pointer bg-transparent border-none p-0"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <header className="sticky top-0 z-50 w-full bg-white">
        <nav>
          <div className="max-w-screen-2xl mx-auto px-8 flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <Logo />
            </Link>

            {/* Desktop Navigation Menu - Centered */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <NavMenu />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 md:gap-4 ml-auto">
              <SearchBar />

              {/* Wishlist Icon */}
              <button className="hidden sm:flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition cursor-pointer">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              <CartIcon />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden p-4 bg-white">
              <NavMenu isMobile />
            </div>
          )}
        </nav>
      </header>

      {/* Notification Banner */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-screen-2xl mx-auto px-8">
          <p className="text-xs md:text-sm text-center text-gray-800">
            For orders placed before 30 January 2026, you can track and manage
            them{' '}
            <Link
              href="/orders"
              className="underline hover:text-black font-medium cursor-pointer"
            >
              here
            </Link>
          </p>
        </div>
      </div>

      {/* Auth Modals */}
      <AuthModals
        isLoginOpen={isLoginOpen}
        isSignUpOpen={isSignUpOpen}
        onLoginClose={() => setIsLoginOpen(false)}
        onSignUpClose={() => setIsSignUpOpen(false)}
        // onSwitchToSignUp={() => {
        //   setIsLoginOpen(false);
        //   setIsSignUpOpen(true);
        // }}
        // onSwitchToLogin={() => {
        //   setIsSignUpOpen(false);
        //   setIsLoginOpen(true);
        // }}
      />
    </>
  );
}
