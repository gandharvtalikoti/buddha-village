'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Animate logo as user scrolls
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const y = useTransform(scrollY, [0, 200], [0, -10]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Photo Gallery', href: '/gallery' },
    { name: 'Stays', href: '/stays' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image
            src="/images/nav-logo.png"
            alt="Buddha Village"
            width={50}
            height={50}
            className="mx-auto drop-shadow-lg select-none"
          /> */}

          {/* <motion.div
            ref={ref}
            style={{ scale, y }}
            className="flex items-center"
          > */}
            <Image
              src="/images/nav-logo-black.png"
              alt="Buddha Village"
              width={100}
              height={100}
              className="drop-shadow-lg select-none"
            />
          {/* </motion.div> */}

        </Link>

        <div className="space-x-8">
  {links.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={`text-black text-sm transition duration-200 ${
        pathname === link.href
          ? 'border-b-2 border-yellow-400'
          : 'hover:text-yellow-500'
      }`}
    >
      {link.name}
    </Link>
  ))}
</div>

      </div>
    </nav>
  );
}
