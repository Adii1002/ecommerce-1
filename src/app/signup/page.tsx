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

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Sign Up:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container py-12 md:py-20">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">
              Join Leveling to explore exclusive offers
            </p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Birth Date */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-black cursor-pointer"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-600 cursor-pointer"
              >
                By entering this site, you agree to the Terms & Conditions and
                Privacy Policy
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Already have an account?</p>
            <Link
              href="/login"
              className="w-full block py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
