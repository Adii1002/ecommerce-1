'use client';

import Link from 'next/link';

interface NavMenuProps {
  isMobile?: boolean;
}

export default function NavMenu({ isMobile = false }: NavMenuProps) {
  const navItems = [
    { label: 'New & Featured', href: '/new' },
    { label: 'Men', href: '/men' },
    { label: 'Women', href: '/women' },
    { label: 'Kids', href: '/kids' },
    { label: 'Jordan', href: '/jordan' },
  ];

  return (
    <div
      className={`flex ${
        isMobile ? 'flex-col gap-4' : 'gap-6 md:gap-8 lg:gap-10 items-center'
      }`}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            isMobile ? 'text-lg' : 'text-sm md:text-base'
          } font-medium text-gray-800 hover:text-black transition duration-200 cursor-pointer`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
