'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { LocationMapSection } from './LocationMapSection';

// Portrait images
const portraits1 = [
  '/images/gallery-home/portrait1_1.jpg',
  '/images/gallery-home/portrait1_2.jpg',
  '/images/gallery-home/portrait1_3.jpg',
  '/images/gallery-home/portrait1_4.jpg',
  '/images/gallery-home/portrait1_5.jpg',
  '/images/gallery-home/portrait1_6.jpg',
  '/images/gallery-home/portrait1_7.jpg',
];

const portraits2 = [
  '/images/gallery-home/portrait2_1.jpg',
  '/images/gallery-home/portrait2_2.jpg',
  '/images/gallery-home/portrait2_3.jpg',
  '/images/gallery-home/portrait2_4.jpg',
  '/images/gallery-home/portrait2_5.jpg',
  '/images/gallery-home/portrait2_6.jpg',
  '/images/gallery-home/portrait2_7.jpg',
];

const portraits3 = [
  '/images/gallery-home/portrait3_1.jpeg',
  '/images/gallery-home/portrait3_2.jpeg',
  '/images/gallery-home/portrait3_3.jpeg',
  '/images/gallery-home/portrait3_4.jpeg',
  '/images/gallery-home/portrait3_5.jpeg',
];

// Landscape images
const landscapes = [
  '/images/gallery-home/landscape1.jpeg',
  '/images/gallery-home/landscape2.jpg',
  '/images/gallery-home/landscape3.jpg',
  '/images/gallery-home/landscape4.jpg',
  '/images/gallery-home/landscape5.jpg',
];

const landscapes2 = [
  '/images/gallery-home/landscape6.jpeg',
  '/images/gallery-home/landscape7.jpg',
  '/images/gallery-home/landscape8.jpeg',
  '/images/gallery-home/landscape9.jpeg',
  '/images/gallery-home/landscape10.jpeg',
];

// Hook for carousel logic
function useCarousel(images: string[], intervalTime = 3000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  const goPrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setIndex((prev) => (prev + 1) % images.length);

  return { index, goPrev, goNext };
}

// Carousel component
function ThumbnailCarousel({
  images,
  currentIndex,
  goPrev,
  goNext,
  isPortrait = true,
}: {
  images: string[];
  currentIndex: number;
  goPrev: () => void;
  goNext: () => void;
  isPortrait?: boolean;
}) {
  return (
    <div className="relative bg-white rounded-md overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className={`object-cover rounded-md select-none mx-auto shadow-lg
            ${isPortrait
              ? 'w-[380px] h-[506px] max-w-full max-h-[70vh] sm:w-[400px] sm:h-[533px]'
              : 'w-full h-[380px] sm:h-[540px] md:h-[600px] lg:h-[680px] max-h-[42vw]'}
          `}
          loading="lazy"
        />
      </AnimatePresence>

      {/* <button
        onClick={goPrev}
        aria-label="Previous"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black p-1 rounded-full z-10"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <button
        onClick={goNext}
        aria-label="Next"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black p-1 rounded-full z-10"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button> */}

      {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400/80 text-black rounded-full px-3 py-1 text-xs select-none">
        {currentIndex + 1} / {images.length}
      </div> */}
    </div>
  );
}

// Main Section
export default function ImageCarousel() {
  const { index: p1Index, goPrev: p1Prev, goNext: p1Next } = useCarousel(portraits1, 3500);
  const { index: p2Index, goPrev: p2Prev, goNext: p2Next } = useCarousel(portraits2, 4000);
  const { index: p3Index, goPrev: p3Prev, goNext: p3Next } = useCarousel(portraits3, 4200);
  const { index: l1Index, goPrev: l1Prev, goNext: l1Next } = useCarousel(landscapes, 3200);
  const { index: l2Index, goPrev: l2Prev, goNext: l2Next } = useCarousel(landscapes2, 3800);

  return (
    <section id="gallery" className="max-w-7xl mx-auto p-6 space-y-10">
        <h1 className="text-5xl text-yellow-400 drop-shadow-lg mb-4 text-center">
          Experience the Beauty of THE BUDDHA VILLAGE
      </h1>
      {/* Row 1 - Staggered Portraits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <div className="mt-6 sm:mt-12">
          <ThumbnailCarousel
            images={portraits1}
            currentIndex={p1Index}
            goPrev={p1Prev}
            goNext={p1Next}
            isPortrait={true}
          />
        </div>
        <div className="sm:-mt-8 lg:mt-0">
          <ThumbnailCarousel
            images={portraits2}
            currentIndex={p2Index}
            goPrev={p2Prev}
            goNext={p2Next}
            isPortrait={true}
          />
        </div>
        <div className="hidden lg:block mt-8">
          <ThumbnailCarousel
            images={portraits3}
            currentIndex={p3Index}
            goPrev={p3Prev}
            goNext={p3Next}
            isPortrait={true}
          />
        </div>
      </div>

      {/* Row 2 - Asymmetric layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ThumbnailCarousel
            images={landscapes}
            currentIndex={l1Index}
            goPrev={l1Prev}
            goNext={l1Next}
            isPortrait={false}
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <ThumbnailCarousel
            images={portraits1}
            currentIndex={p1Index}
            goPrev={p1Prev}
            goNext={p1Next}
            isPortrait={true}
          />
          <ThumbnailCarousel
            images={portraits2}
            currentIndex={p2Index}
            goPrev={p2Prev}
            goNext={p2Next}
            isPortrait={true}
          />
        </div>
      </div>

      {/* Row 3 - Full-width Hero Landscape */}
      <div className="relative">
        <ThumbnailCarousel
          images={landscapes2}
          currentIndex={l2Index}
          goPrev={l2Prev}
          goNext={l2Next}
          isPortrait={false}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute inset-x-0 bottom-8 text-center text-white drop-shadow-lg"
        >

        </motion.div>
      </div>
    <LocationMapSection/>

    </section>
  );
}
