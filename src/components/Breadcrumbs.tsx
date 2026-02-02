'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generate breadcrumbs from pathname if items not provided
  const generateBreadcrumbs = () => {
    if (items) return items;

    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    let href = '';
    segments.forEach((segment) => {
      href += `/${segment}`;
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="text-sm text-gray-600">
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="inline">
          {index > 0 && <span className="mx-2">/</span>}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-black font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-gray-600 hover:text-black transition cursor-pointer"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
