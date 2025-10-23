'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // When user scrolls from 0 to 300px:
  // scale reduces from 1 → 0.5
  // logo moves up slightly
  // opacity fades from 1 → 0
  const scale = useTransform(scrollY, [0, 300], [1, 0.5]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 250], [1, 0]); // fade-out effect

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-black flex flex-col justify-center items-center text-center overflow-hidden scroll-smooth"
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-buddha.jpg"
          alt="Buddha Village - Luxury Home Stay"
          className="w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div> */}

      {/* Sticky Logo / Title */}
      {/* <motion.div
        style={{
          scale,
          y,
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Buddha Village"
          width={500}
          height={300}
          className="mx-auto drop-shadow-lg select-none"
        />
      </motion.div> */}

      {/* Tagline Content */}
      <motion.div
        style={{
          scale,
          y,
          opacity,
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="text-center px-6 text-yellow-300 mb-3 text-lg max-w-7xl mx-auto">
          <p>
            The best retreat one can find in or around Bangalore would be the Buddha Village.
            Just 50km from Bangalore, near Isha Foundation, you will find a whole different world.
            Surrounded by a lake, different types of plants and animals, you will discover peace
            like Buddha once did years ago. <br />
            Come LOVE, LIFE, LIVE at the Buddha Village.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
