'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LocationMapSection } from './LocationMapSection';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // When user scrolls from 0 to 300px:
  // scale reduces from 1 → 0.5
  // logo moves up slightly
  // opacity fades from 1 → 0
  const scale = useTransform(scrollY, [0, 300], [1, 0.5]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  // const opacity = useTransform(scrollY, [0, 250], [1, 0]); // fade-out effect

  return (
    <section className=" overflow-hidden">

    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden scroll-smooth"
    >


<div className="absolute inset-0 -z-10 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/buddha-4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Gradient overlay if needed */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
</div>
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
          // opacity,
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="text-center px-6 text-yellow-300 mb-3 text-2xl max-w-7xl mx-auto">
          
        </div>
      </motion.div>
    </motion.section>
    </section>

  );
}
