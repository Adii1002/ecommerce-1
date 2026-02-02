'use client';

import { useState } from 'react';

interface AuthModalsProps {
  isLoginOpen: boolean;
  isSignUpOpen: boolean;
  onLoginClose: () => void;
  onSignUpClose: () => void;
  onSwitchToSignUp: () => void;
  onSwitchToLogin: () => void;
}

export default function AuthModals({
  isLoginOpen,
  isSignUpOpen,
  onLoginClose,
  onSignUpClose,
  onSwitchToSignUp,
  onSwitchToLogin,
}: AuthModalsProps) {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
    setLoginData({ email: '', password: '' });
    onLoginClose();
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up:', signUpData);
    setSignUpData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
    });
    onSignUpClose();
  };

  return (
    <>
      {/* Login Modal */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4 animate-fadeIn"
          onClick={onLoginClose}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md p-8 relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onLoginClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition cursor-pointer"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Your Account
              </h2>
              <p className="text-sm text-gray-600">
                Sign in to access your Leveling account
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
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
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:text-black cursor-pointer transition"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={onSignUpClose}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md p-8 relative my-8 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onSignUpClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition cursor-pointer"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Create Account
              </h2>
              <p className="text-sm text-gray-600">
                Join Leveling to explore exclusive offers
              </p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSignUpSubmit} className="space-y-3">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={signUpData.firstName}
                  onChange={handleSignUpChange}
                  placeholder="John"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={signUpData.lastName}
                  onChange={handleSignUpChange}
                  placeholder="Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  placeholder="At least 8 characters"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={handleSignUpChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Birth Date
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={signUpData.birthDate}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Terms Agreement */}
              <div className="pt-4 text-center">
                <p className="text-xs text-gray-600">
                  By entering this site, you agree to the{' '}
                  <a
                    href="/terms"
                    className="underline hover:text-black font-medium cursor-pointer"
                  >
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a
                    href="/privacy"
                    className="underline hover:text-black font-medium cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 cursor-pointer mt-4"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
