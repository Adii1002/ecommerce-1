'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Link from 'next/link';

// Lazy load Header and Footer
const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div className="h-20 bg-gray-100 animate-pulse" />,
  ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-gray-100 animate-pulse" />,
  ssr: true,
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container py-12 md:py-20">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Your Account
            </h1>
            <p className="text-gray-600">
              Sign in to access your Leveling account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-black cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't have an account?</p>
            <Link
              href="/signup"
              className="w-full block py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer text-center"
            >
              Create Account
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-4">
              By entering this site, you agree to the Terms & Conditions and
              Privacy Policy
            </p>
            <Link
              href="/help"
              className="text-sm text-gray-600 hover:text-black cursor-pointer"
            >
              Need help? Contact us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
