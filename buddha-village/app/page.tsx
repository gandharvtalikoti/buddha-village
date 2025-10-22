'use client';

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";

// import HeroSection from './components/HeroSection';
// import ImageCarousel from './components/ImageCarousel';
// import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageCarousel />
      <Footer />
    </>
  );
}
