'use client';

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-center border-t border-yellow-400">
      <p className="text-white text-xl">
        For Bookings contact: 
        <a 
          href="tel:+919123343254" 
          className="text-yellow-400 font-bold ml-2 hover:text-yellow-300 transition-colors"
        >
          +91 9123343254
        </a>
      </p>
    </footer>
  );
}
