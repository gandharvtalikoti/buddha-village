'use client';

import { motion } from 'framer-motion';

const cottages = [
  {
    id: 1,
    name: 'Lake View Cottage',
    price: '₹16,000 for 2 Guests (Weekend)',
    image: '/cottages/lake-view.jpg', // replace with your images
  },
  {
    id: 2,
    name: 'Garden View Cottage (Type 1)',
    price: '₹6,000 for 2 Guests (Weekend)',
    image: '/cottages/garden-view-1.jpg',
  },
  {
    id: 3,
    name: 'Garden View Cottage (Type 2)',
    price: '₹8,000 for 2 Guests (Weekend)',
    image: '/cottages/garden-view-2.jpg',
  },
];

export default function FeaturedCottages() {
  return (
    <section className="py-16 bg-white px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-black text-center">
        Our Exquisite Accommodations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cottages.map(({ id, image, name, price }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg shadow-lg overflow-hidden border border-yellow-400"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-2">{name}</h3>
              <p className="text-black font-light">{price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
