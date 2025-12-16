'use client';

import { useState } from 'react';

const menuImages = [
  '/images/menu/image1.jpg',
  '/images/menu/image2.jpg',
];

export default function FoodMenu() {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <div className="relative bg-[rgb(255,206,41)] text-gray-900 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Buddha Village 
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            Food Menu
          </p>
        </div>
      </div>

      {/* Main Image Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-[80vh] md:h-[85vh] bg-gray-100 overflow-hidden">
            <img
              src={menuImages[currentImg]}
              alt={`Menu page ${currentImg + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation Arrows */}
            {menuImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImg((currentImg - 1 + menuImages.length) % menuImages.length)}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[rgb(255,206,41)] hover:text-gray-900 text-gray-800 p-4 rounded-full shadow-lg transition-all"
                >
                  <span className="text-3xl font-bold">‹</span>
                </button>
                <button
                  onClick={() => setCurrentImg((currentImg + 1) % menuImages.length)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[rgb(255,206,41)] hover:text-gray-900 text-gray-800 p-4 rounded-full shadow-lg transition-all"
                >
                  <span className="text-3xl font-bold">›</span>
                </button>
              </>
            )}

            {/* Image Counter */}
            {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm font-medium">
              Page {currentImg + 1} of {menuImages.length}
            </div> */}
          </div>

          {/* Thumbnails */}
          <div className="bg-gray-50 p-6">
            <div className="flex gap-4 justify-center">
              {menuImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 transition-all ${
                    idx === currentImg 
                      ? 'border-[rgb(255,206,41)] scale-105 ring-4 ring-[rgb(255,226,141)]' 
                      : 'border-gray-300 opacity-60 hover:opacity-100 hover:border-gray-400'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Menu thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                  {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Page {idx + 1}</span>
                  </div> */}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      {/* <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-[rgb(255,206,41)] to-[rgb(255,186,21)] rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Contact us to place your order or make a reservation
            </p>
            <a
              href="https://wa.me/918095998833"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
            >
              <span className="text-2xl">💬</span>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div> */}

      {/* Additional Info */}
      <div className="max-w-6xl mx-auto px-4 py-8 pb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="grid md:grid-cols-3 gap-6 text-white text-center">
            <div>
              <div className="text-3xl mb-2">🍽️</div>
              <h3 className="font-bold mb-2">À La Carte Menu</h3>
              <p className="text-sm text-gray-600">Order exactly what you crave</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-sm text-gray-600">Locally sourced & organic</p>
            </div>
            <div>
              <div className="text-3xl mb-2">👨‍🍳</div>
              <h3 className="font-bold mb-2">Expert Chefs</h3>
              <p className="text-sm text-gray-600">Authentic flavors & recipes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}