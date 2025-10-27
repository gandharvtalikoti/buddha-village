'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const stays = [
  {
    id: 'dhyana',
    name: 'DHYANA',
    subtitle: 'Wooden Duplex Cottage / Lake Cottage',
    type: 'cottage',
    capacity: 5,
    beds: '1 King + 1 Queen + 1 Single',
    description: 'Experience tranquility in our spacious lake-view duplex cottage, perfect for families and groups seeking serenity.',
    thumbnail: '/images/stays/cottage1.jpg',
    images: [
      '/images/stays/cottage1.jpg',
      '/images/stays/cottage2.jpg',
      '/images/stays/cottage3.jpg',
      '/images/stays/cottage4.jpg',
      '/images/stays/cottage5.jpg',
      '/images/stays/cottage6.jpg',
      '/images/stays/cottage7.jpg',
    ],
    pricing: {
      weekend: [
        { guests: 2, price: '₹12,000', included: true },
        { guests: 4, price: '₹18,000', included: true },
        { guests: 5, price: '₹22,000', included: true },
      ],
      weekday: [
        { guests: 2, price: '₹8,000', included: false },
        { guests: 4, price: '₹12,000', included: false },
        { guests: 5, price: '₹15,000', included: false },
      ],
    },
  },
  {
    id: 'vitarka',
    name: 'VITARKA',
    subtitle: 'Wooden Room - 1',
    type: 'room',
    capacity: 4,
    beds: '2 King Size Beds',
    description: 'Spacious wooden room with twin king beds, ideal for families or two couples traveling together.',
    thumbnail: '/images/stays/g1a.jpg',
    images: [
      '/images/stays/g1a.jpg',
      '/images/stays/g1b.jpg',
      '/images/stays/g1c.jpg',
      '/images/stays/g1d.jpg',
      '/images/stays/g1e.jpg',
      '/images/stays/g1f.jpg',
    ],
    pricing: {
      weekend: [
        { guests: 2, price: '₹8,000', included: true },
        { guests: 4, price: '₹12,000', included: true },
      ],
      weekday: [
        { guests: 2, price: '₹4,000', included: false },
        { guests: 4, price: '₹7,000', included: false },
      ],
    },
  },
  {
    id: 'varada',
    name: 'VARADA',
    subtitle: 'Wooden Room - 2',
    type: 'room',
    capacity: 4,
    beds: '1 King Bed + King Sofa Cum Bed',
    description: 'Comfortable wooden room with flexible sleeping arrangements, perfect for small families.',
    thumbnail: '/images/stays/g2a.jpg',
    images: [
      '/images/stays/g2a.jpg',
      '/images/stays/g2b.jpg',
      '/images/stays/g2c.jpg',
      '/images/stays/g2d.jpg',
      '/images/stays/g2e.jpg',
    ],
    pricing: {
      weekend: [
        { guests: 2, price: '₹8,000', included: true },
        { guests: 4, price: '₹12,000', included: true },
      ],
      weekday: [
        { guests: 2, price: '₹4,000', included: false },
        { guests: 4, price: '₹7,000', included: false },
      ],
    },
  },
  {
    id: 'abhaya',
    name: 'ABHAYA',
    subtitle: 'Wooden Room - 3',
    type: 'room',
    capacity: 4,
    beds: '1 King Bed + Queen Sofa Cum Bed',
    description: 'Cozy wooden retreat with garden views and versatile sleeping options for your comfort.',
    thumbnail: '/images/stays/g2a.jpg',
    images: [
      '/images/stays/g2a.jpg',
      '/images/stays/g2b.jpg',
      '/images/stays/g2c.jpg',
      '/images/stays/g2d.jpg',
      '/images/stays/g2e.jpg',
    ],
    pricing: {
      weekend: [
        { guests: 2, price: '₹8,000', included: true },
        { guests: 4, price: '₹12,000', included: true },
      ],
      weekday: [
        { guests: 2, price: '₹4,000', included: false },
        { guests: 4, price: '₹7,000', included: false },
      ],
    },
  },
  {
    id: 'dharmachakra',
    name: 'DHARMACHAKRA',
    subtitle: 'Wooden Room - 4',
    type: 'room',
    capacity: 6,
    beds: '1 King Bed + 2 Queen Sofa Cum Beds',
    description: 'Our most spacious wooden room, designed for larger groups seeking comfort and togetherness.',
    thumbnail: '/images/stays/g1a.jpg',
    images: [
      '/images/stays/g1a.jpg',
      '/images/stays/g1b.jpg',
      '/images/stays/g1c.jpg',
      '/images/stays/g1d.jpg',
      '/images/stays/g1e.jpg',
      '/images/stays/g1f.jpg',
    ],
    pricing: {
      weekend: [
        { guests: 2, price: '₹8,000', included: true },
        { guests: 4, price: '₹12,000', included: true },
        { guests: 6, price: '₹15,000', included: true },
      ],
      weekday: [
        { guests: 2, price: '₹4,000', included: false },
        { guests: 4, price: '₹7,000', included: false },
        { guests: 6, price: '₹10,000', included: false },
      ],
    },
  },
  {
    id: 'anjali',
    name: 'ANJALI',
    subtitle: 'Tent Stay',
    type: 'tent',
    capacity: 2,
    beds: 'Sleeping Bags & Pillows',
    description: 'Embrace nature with our comfortable tent stay, complete with quality sleeping arrangements.',
    thumbnail: '/images/stays/cottage1.jpg',
    images: [
      '/images/stays/cottage1.jpg',
      '/images/stays/cottage2.jpg',
      '/images/stays/cottage3.jpg',
    ],
    pricing: {
      weekend: [
        { guests: 2, price: '₹5,000', included: true },
      ],
      weekday: [
        { guests: 2, price: '₹3,000', included: false },
      ],
    },
  },
  {
    id: 'karana',
    name: 'KARANA',
    subtitle: 'Tent Stay',
    type: 'tent',
    capacity: 2,
    beds: 'Sleeping Bags & Pillows',
    description: 'Sleep under the stars in our well-equipped tent with all essentials for a memorable night.',
    thumbnail: '/images/stays/cottage2.jpg',
    images: [
      '/images/stays/cottage2.jpg',
      '/images/stays/cottage3.jpg',
      '/images/stays/cottage4.jpg',
    ],
    pricing: {
      weekend: [
        { guests: 2, price: '₹5,000', included: true },
      ],
      weekday: [
        { guests: 2, price: '₹3,000', included: false },
      ],
    },
  },
];

function StayCard({ stay, onClick }) {
  const getTypeColor = (type) => {
    switch (type) {
      case 'cottage': return 'bg-amber-500';
      case 'tent': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'cottage': return '🏡';
      case 'tent': return '⛺';
      default: return '🏠';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={stay.thumbnail}
          alt={stay.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 ${getTypeColor(stay.type)} text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2`}>
          <span>{getTypeIcon(stay.type)}</span>
          <span>{stay.type.charAt(0).toUpperCase() + stay.type.slice(1)}</span>
        </div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
          Up to {stay.capacity} guests
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
          {stay.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 font-medium">{stay.subtitle}</p>
        <p className="text-gray-600 mb-4 line-clamp-2">{stay.description}</p>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <span>🛏️</span>
          <span>{stay.beds}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-amber-600">{stay.pricing.weekday[0].price}</p>
            <p className="text-xs text-gray-500">per night</p>
          </div>
          <button className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-md">
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function StaysPage() {
  const [selectedStay, setSelectedStay] = useState(null);

  if (selectedStay) {
    return <StayDetailPage stay={selectedStay} onBack={() => setSelectedStay(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-amber-500 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Buddha Village Stays
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto"
          >
            Find your peaceful sanctuary in the heart of nature
          </motion.p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <span className="text-3xl">ℹ️</span>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Pricing Information</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Weekend & Festival dates:</strong> Buffet meals included (Hi-tea, Dinner & Breakfast)<br />
                <strong>Weekdays (Mon-Thu):</strong> À la carte menu available for order
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stays Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} onClick={() => setSelectedStay(stay)} />
          ))}
        </div>
      </div>

      {/* Pet Stay Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🐾</span>
            <h2 className="text-3xl font-bold">Pet-Friendly Stay</h2>
          </div>
          <p className="text-lg mb-6 text-green-50">Bring your furry friends along! We provide special care for your pets.</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <p className="font-semibold text-xl mb-4">₹1,500 per pet (includes bed + 1 meal)</p>
            <ul className="space-y-2 text-green-50">
              <li>• Steamed Chicken Egg & Rice</li>
              <li>• Steamed Soya Bean & Rice</li>
              <li>• Milk available on request</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning a Group Retreat?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Message us your dates and group size, and our team will share the best options for you!
        </p>
        <a
          href="https://wa.me/918095999833"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
        >
          <span className="text-2xl">💬</span>
          Book via WhatsApp
        </a>
      </div>
    </div>
  );
}

// Separate Detail Page Component
function StayDetailPage({ stay, onBack }) {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600 font-semibold transition-colors"
          >
            <span className="text-xl">←</span>
            <span>Back to All Stays</span>
          </button>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src={stay.images[currentImg]}
          alt={`${stay.name} ${currentImg + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        {stay.images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImg((currentImg - 1 + stay.images.length) % stay.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-amber-500 hover:text-white text-black p-4 rounded-full shadow-xl transition-all"
            >
              <span className="text-2xl font-bold">‹</span>
            </button>
            <button
              onClick={() => setCurrentImg((currentImg + 1) % stay.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-amber-500 hover:text-white text-black p-4 rounded-full shadow-xl transition-all"
            >
              <span className="text-2xl font-bold">›</span>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
          {currentImg + 1} / {stay.images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {stay.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImg(idx)}
              className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentImg ? 'border-amber-500 scale-105' : 'border-gray-200 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Info */}
          <div className="md:col-span-2">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">{stay.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{stay.subtitle}</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <span>👥</span>
                <span className="font-semibold text-black">Up to {stay.capacity} guests</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <span>🛏️</span>
                <span className="font-semibold text-black">{stay.beds}</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">{stay.description}</p>

            {/* Pricing Tables */}
            <div className="space-y-8">
              {/* Weekend Pricing */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <span>🌟</span>
                  Weekend & Festival Pricing
                </h3>
                <p className="text-sm text-amber-800 mb-6 font-medium">
                  Includes buffet: Hi-tea, Dinner & Breakfast
                </p>
                <div className="space-y-3">
                  {stay.pricing.weekend.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/70 px-6 py-4 rounded-xl">
                      <span className="font-semibold text-gray-700">{p.guests} Guest{p.guests > 1 ? 's' : ''}</span>
                      <span className="text-2xl font-bold text-amber-600">{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekday Pricing */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>📅</span>
                  Weekday Pricing (Mon-Thu)
                </h3>
                <p className="text-sm text-blue-800 mb-6 font-medium">
                  À la carte menu available for order
                </p>
                <div className="space-y-3">
                  {stay.pricing.weekday.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/70 px-6 py-4 rounded-xl">
                      <span className="font-semibold text-gray-700">{p.guests} Guest{p.guests > 1 ? 's' : ''}</span>
                      <span className="text-2xl font-bold text-blue-600">{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">Starting from</p>
                <p className="text-4xl font-bold text-amber-600 mb-1">{stay.pricing.weekday[0].price}</p>
                <p className="text-sm text-gray-500">per night</p>
              </div>

              <a
                href="https://wa.me/918095999833"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl mb-4"
              >
                💬 Book via WhatsApp
              </a>

              <p className="text-xs text-center text-gray-500">
                Message us for availability and special group rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}