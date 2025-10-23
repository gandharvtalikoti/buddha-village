'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-4 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10">
        
        {/* Branding & WhatsApp Booking */}
        <div className="flex flex-col">
        <div className="flex justify-center mb-3">
  <Link href="/" className="flex items-center space-x-2">
    <Image
      src="/images/nav-logo-black.png"
      alt="Buddha Village"
      width={100}
      height={100}
      className="drop-shadow-lg select-none"
    />
  </Link>
</div>

          <p className="max-w-xs text-gray-700 text-sm mb-4 text-center">
          
            The best retreat one can find in or around Bangalore would be the Buddha Village.
            Just 50km from Bangalore, near Isha Foundation, you will find a whole different world.
            Surrounded by a lake, different types of plants and animals, you will discover peace
            like Buddha once did years ago. <br />


<span className='font-bold'>

            Come LOVE, LIFE, LIVE at the Buddha Village.
</span>
          </p>

          <a
            href="https://wa.me/918095999833"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition mb-4"
          >
            <FaWhatsapp className="text-xl" />
            Book on WhatsApp: +91 80959 99833
          </a>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <div className="font-semibold text-lg mb-3 text-black">Quick Links</div>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/" className="hover:text-black font-medium">Home</Link></li>
            <li><Link href="/stays" className="hover:text-black font-medium">Stays</Link></li>
            <li><Link href="/gallery" className="hover:text-black font-medium">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-black font-medium">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info, Location & Socials */}
        <div className="flex flex-col">
          <div className="font-semibold text-lg mb-2 text-black">Contact & Location</div>
          <div className="text-gray-700 text-sm mb-2">
            <span className="block">ashot833@gmail.com</span>
            <span className="block">+91 80958 99833</span>
          </div>
          <a
            href="https://maps.app.goo.gl/6AipgYeLgeKrcYdk6"
            className="inline-flex items-center gap-2 mt-2 text-black hover:text-gray-600 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="text-lg" />
            Find us on Google Maps
          </a>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.instagram.com/buddhavillage_india?igsh=ZTJ1Y2t3Mm8xZm1l"
              aria-label="Instagram"
              className="hover:text-black transition"
            >
              <FaInstagram size={20}/>
            </a>
            <span className="text-gray-700 text-sm">Follow us on Instagram</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Buddha Village. All rights reserved.
      </div>
    </footer>
  );
}
