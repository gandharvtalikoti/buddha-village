'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-black flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <img
          src="/images/hero-buddha.jpg" // replace with your image path
          alt="Buddha Village - Luxury Home Stay"
          className="w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Logo / Title */}
      <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg mb-4 select-none">
        <Image src="/images/logo.png" alt="Buddha Village" width={500} height={300} />
      </h1>

      {/* Tagline */}
      {/* <p className="text-xl md:text-2xl text-white max-w-xl mx-auto mb-8 font-light">
        Peaceful Stays, Green Views, <span className="font-semibold">Luxury Living</span>
      </p> */}

      {/* Call to Action Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#gallery"
        className="px-10 py-4 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition-colors font-semibold"
      >
        Explore Our Sanctuary
      </motion.a>
    </motion.section>
  );
}
