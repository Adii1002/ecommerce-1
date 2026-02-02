'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="relative hidden md:block">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-48 lg:w-56 hover:bg-gray-200 transition">
        <svg
          className="w-5 h-5 text-gray-600 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-transparent text-sm outline-none w-full placeholder-gray-600"
        />
      </div>
    </div>
  );
}
