'use client';

import { useState } from 'react';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 hover:bg-gray-100 rounded-full transition"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg p-4 z-50">
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-black"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-black"
              >
                Join Us
              </a>
            </li>
            <li>
              <hr className="my-2" />
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-black"
              >
                My Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-black"
              >
                Wishlist
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
