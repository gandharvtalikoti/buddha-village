'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // When user scrolls from 0 to 300px:
  // scale reduces from 1 → 0.5 and logo moves up slightly
  const scale = useTransform(scrollY, [0, 300], [1, 0.5]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-black flex flex-col justify-center items-center text-center overflow-hidden scroll-smooth"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-buddha.jpg"
          alt="Buddha Village - Luxury Home Stay"
          className="w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Sticky Logo / Title */}
      <motion.div
        style={{
          scale,
          y,
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
        className="mb-6"
      >
        <Image
          src="/images/logo.png"
          alt="Buddha Village"
          width={500}
          height={300}
          className="mx-auto drop-shadow-lg select-none"
        />
      </motion.div>

      {/* Tagline Content */}
      <div className="text-yellow-400 font-gaegu text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4 space-y-4 mt-4">
        {/* Header - Left aligned */}
        <div className="text-left">
          <p className="font-semibold">BUDDHA VILLAGE</p>
          <p>Farm House 🏡</p>
          <p>Chikkbalapur, Bengaluru</p>
        </div>

        {/* Body - Center aligned */}
        <div className="text-center">
          <p>
            The best retreat one can find in or around Bangalore would be <br />
            the Buddha Village.
          </p>
          <p>
            Just 50km from Bangalore, <br />
            Near Isha Foundation, you will find a whole different world.
          </p>
          <p>
            Surrounded by a lake, <br />
            different types of plants and animals, <br />
            you will discover peace like Buddha once did years ago.
          </p>
          <p>Come LOVE, LIFE, LIVE at the Buddha Village.</p>
        </div>

        {/* Footer - Centered emphasis */}
        <div className="text-center font-semibold text-xl">
          ❤️ LOVE THE LIFE YOU LIVE ❤️
        </div>
      </div>
    </motion.section>
  );
}
