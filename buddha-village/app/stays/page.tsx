'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with your real imported photo URLs
const stays = [
  {
    key: 'cottage',
    label: 'Cottage – Lake View',
    description: 'Wake up to birdsong, a lake view, and pure serenity. Spacious private cottage for up to 5 guests.',
    images: [
      '/images/stays/cottage1.jpg',
      '/images/stays/cottage2.jpg',
      '/images/stays/cottage3.jpg',
      '/images/stays/cottage4.jpg',
      '/images/stays/cottage5.jpg',
      '/images/stays/cottage6.jpg',
      '/images/stays/cottage7.jpg',
    ],
    pricing: [
      {
        type: 'Weekends & Festivals',
        details: [
          { guests: 2, price: '₹16,000', note: '' },
          { guests: 4, price: '₹24,000', note: '' },
          { guests: 5, price: '₹29,000', note: '' },
        ],
        included: 'Hi-tea, Dinner & Breakfast',
      },
      {
        type: 'Weekdays',
        details: [
          { guests: 2, price: '₹10,000', note: 'Room only – à la carte menu available' },
          { guests: 4, price: '₹16,000', note: 'Room only – à la carte menu available' },
          { guests: 5, price: '₹18,000', note: 'Room only – extra bed included' },
        ],
        included: null,
      },
    ],
  },
  {
    key: 'garden1',
    label: 'Private Room – Garden View (Type 1)',
    description: 'Cozy garden-side room for couples or solo travelers. 1 King bed, luxury comfort.',
    images: [
      '/images/stays/g1a.jpg',
      '/images/stays/g1b.jpg',
      '/images/stays/g1c.jpg',
      '/images/stays/g1d.jpg',
      '/images/stays/g1e.jpg',
      '/images/stays/g1f.jpg',
    ],
    pricing: [
      {
        type: 'Weekends & Festivals',
        details: [
          { guests: 2, price: '₹12,000', note: '' },
        ],
        included: 'Hi-tea, Dinner & Breakfast',
      },
      {
        type: 'Weekdays',
        details: [
          { guests: 2, price: '₹8,000', note: 'Room only – à la carte menu available' },
        ],
        included: null,
      },
    ],
  },
  {
    key: 'garden2',
    label: 'Private Room – Garden View (Type 2)',
    description: 'Spacious for families & groups. 2 King beds and beautiful green views.',
    images: [
      '/images/stays/g2a.jpg',
      '/images/stays/g2b.jpg',
      '/images/stays/g2c.jpg',
      '/images/stays/g2d.jpg',
      '/images/stays/g2e.jpg',
    ],
    pricing: [
      {
        type: 'Weekends & Festivals',
        details: [
          { guests: 2, price: '₹12,000', note: '' },
          { guests: 4, price: '₹20,000', note: '' },
        ],
        included: 'Hi-tea, Dinner & Breakfast',
      },
      {
        type: 'Weekdays',
        details: [
          { guests: 2, price: '₹8,000', note: 'Room only – à la carte menu available' },
          { guests: 4, price: '₹12,000' },
          { guests: 6, price: '₹15,000', note: '' },
        ],
        included: null,
      },
    ],
  },
];

// ---------------- Carousel with Zoom ----------------
function StayCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-200 shadow-lg cursor-pointer">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[idx]}
            src={images[idx]}
            alt={`Gallery ${idx + 1}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="object-cover w-full h-full select-none"
            onClick={() => setZoomed(true)}
          />
        </AnimatePresence>

        {/* Carousel arrows */}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex justify-center items-center shadow"
          onClick={() => setIdx((idx - 1 + images.length) % images.length)}
        >‹</button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex justify-center items-center shadow"
          onClick={() => setIdx((idx + 1) % images.length)}
        >›</button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-2.5 h-2.5 rounded-full ${i === idx ? 'bg-yellow-400' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Zoom Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
          >
            <motion.img
              src={images[idx]}
              alt={`Gallery ${idx + 1}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="max-h-[90%] max-w-[90%] rounded-2xl shadow-xl object-cover"
              onClick={(e) => e.stopPropagation()} // prevent closing
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ---------------- Main Stays Page ----------------
export default function StaysPage() {
  return (
    <section className="min-h-screen bg-white py-10 px-2 md:px-8 lg:px-24">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 text-center font-gaegu mb-12">Our Stays</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mx-auto mb-10">
        Choose your peaceful sanctuary—each space is shaped for comfort, views, and unforgettable moments. All prices are for 1 night, inclusive of taxes.
      </p>

      <div className="grid gap-12 max-w-6xl mx-auto">
        {stays.map((stay) => (
          <motion.div
            key={stay.key}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-center rounded-2xl bg-white shadow-lg p-6 md:p-10"
          >
            <div className="w-full md:w-2/5">
              <StayCarousel images={stay.images} />
            </div>
            <div className="w-full md:w-3/5 flex flex-col">
              <h2 className="font-gaegu text-3xl text-yellow-600 mb-2">{stay.label}</h2>
              <p className="text-gray-700 mb-3">{stay.description}</p>
              {stay.pricing.map((block) => (
                <div key={block.type} className="mb-3">
                  <div className="font-bold text-gray-800 mb-1">{block.type}</div>
                  <table className="w-full mb-1">
                    <tbody>
                      {block.details.map(({ guests, price, note }, rIdx) => (
                        <tr key={rIdx}>
                          <td className="py-1 text-gray-700 text-md">{guests} guest{guests > 1 ? 's' : ''}</td>
                          <td className="py-1 text-yellow-600 pl-2 font-medium">{price}</td>
                          <td className="py-1 text-gray-500 italic text-xs pl-4">{note || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {block.included && (
                    <div className="text-green-600 text-xs font-bold mt-1">Includes: {block.included}</div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <a
                  href="https://wa.me/918095999833"
                  target="_blank"
                  className="inline-block bg-green-500 text-white px-7 py-2 rounded-full font-semibold shadow hover:bg-green-600 transition"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-gray-700 text-base mt-12 font-medium">
        Want help planning a group retreat or celebration? <br />
        Message us your dates and group size, and our team will share the best options for you!
      </div>
    </section>
  );
}
