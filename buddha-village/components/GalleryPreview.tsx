'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
  '/gallery/7.jpg',
  '/gallery/8.jpg',
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <h2 className="text-center text-4xl font-semibold text-black mb-12">
        Experience the Serenity
      </h2>

      <div className="flex overflow-x-auto space-x-6 px-10 scrollbar-hide">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 15px rgba(251, 191, 36, 0.6)' }}
            className="min-w-[280px] h-48 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent transition-colors"
          >
            <img
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
