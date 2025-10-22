'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/accommodation', label: 'Accommodation' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/activities', label: 'Activities' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-md py-4 px-6 flex justify-center shadow-md">
      <ul className="flex space-x-8 max-w-7xl w-full justify-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-white font-semibold text-lg transition-colors ${
                pathname === href ? 'text-yellow-400 border-b-2 border-yellow-400' : 'hover:text-yellow-300'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
