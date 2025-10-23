'use client';

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram
} from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black py-16 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-none">
        {/* Info Section */}
        <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Contact Us for Booking
          </h1>

          <p className="mb-2">
            You didn’t come this far just to scroll by.<br />
          </p>
          <p className="mb-6">
            Reach out to us to plan your perfect stay at Buddha Village.<br />
            Whether it’s a weekend getaway or a peaceful retreat, we’re here to
            help you book the experience you deserve.<br />
            Call us or drop a message — your escape to nature is just a click away.
          </p>

         {/* Contact Info */}
<div className="space-y-3 mb-6">
  <div className="flex items-center justify-center md:justify-start gap-2">
    <FaMapMarkerAlt size={22} className="text-black" />
    <a
      href="https://maps.app.goo.gl/6AipgYeLgeKrcYdk6"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Chikkaballapur, Gangrekaluve, Bangalore, Karnataka 562101
    </a>
  </div>
  <div className="flex items-center justify-center md:justify-start gap-2">
    <FaEnvelope size={22} className="text-black" />
    <span>buddhavillage.blr@gmail.com</span>
  </div>
  <div className="flex items-center justify-center md:justify-start gap-2">
    <FaPhone size={22} className="text-black" />
    <span>+91 80959 99833 / +91 80958 99833</span>
  </div>
</div>

          {/* Instagram */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <a
              href="https://www.instagram.com/buddhavillage_india?igsh=ZTJ1Y2t3Mm8xZm1l"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <FaInstagram size={25} />
              <span className="font-semibold">Follow us on Instagram</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="font-semibold text-xl mb-4 text-black">
            For more details, contact us on WhatsApp
          </p>

          <a
            href="https://wa.me/918095999833"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white text-lg font-bold px-8 py-4 rounded-full shadow hover:bg-green-600 transition mb-4"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M20.52 3.47A11.85 11.85 0 0012 0.47c-6.63 0-12 5.37-12 12A11.85 11.85 0 003.47 20.53l-1.54 5.67 5.82-1.52A11.86 11.86 0 0012 23.53c6.63 0 12-5.37 12-12a11.85 11.85 0 00-3.48-8.06zm-8.52 18.38a10 10 0 01-5.35-1.54l-.38-.23-3.45.9.92-3.36-.25-.34A10 10 0 012.05 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.5-7.47c-.08-.14-.3-.22-.63-.39s-1.91-.94-2.21-1.05c-.3-.11-.52-.17-.73.17-.21.34-.84 1.05-1.03 1.26-.18.21-.38.23-.7.08a7.84 7.84 0 01-2.29-1.41 8.23 8.23 0 01-1.53-1.89c-.19-.32-.02-.5.14-.65.15-.15.33-.38.5-.58.17-.2.22-.34.33-.56.11-.22.06-.41-.02-.58-.08-.17-.7-1.66-.96-2.27-.25-.6-.5-.51-.69-.52-.18-.01-.39-.01-.6-.01s-.56.08-.85.41c-.28.33-1.1 1.07-1.1 2.61 0 1.53 1.13 3.01 1.29 3.22.16.21 2.23 3.39 5.43 4.43a6.03 6.03 0 002.96.31c.9-.13 1.77-.7 2.02-1.37.25-.67.25-1.25.18-1.37z" />
            </svg>
            +91 80959 99833
          </a>

          <span className="text-gray-500">
            Available on WhatsApp for instant info &amp; bookings!
          </span>
        </div>
      </div>
    </section>
  );
}
