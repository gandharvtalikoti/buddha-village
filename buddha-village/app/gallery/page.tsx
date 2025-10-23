'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Binary search to find the last existing image
async function findLastImage(max = 100): Promise<number> {
  const checkImage = async (i: number): Promise<boolean> => {
    try {
      const res = await fetch(`/images/gallery/landscape-${i}.jpg`, { method: 'HEAD' });
      return res.ok;
    } catch {
      return false;
    }
  };

  let left = 1;
  let right = max;
  let lastFound = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const exists = await checkImage(mid);

    if (exists) {
      lastFound = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lastFound;
}

// Ultra-fast image loader with binary search + parallel verification
function useLandscapeImages(maxImages = 100) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      // Step 1: Binary search to find the last image (log n complexity)
      const lastImageNum = await findLastImage(maxImages);
      
      if (lastImageNum === 0) {
        if (active) {
          setImages([]);
          setLoading(false);
        }
        return;
      }

      // Step 2: Generate array of existing images
      const existingImages = Array.from(
        { length: lastImageNum },
        (_, i) => `/images/gallery/landscape-${i + 1}.jpg`
      );

      if (active) {
        setImages(existingImages);
        setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [maxImages]);

  return { images, loading };
}

export default function GalleryCollage() {
  const { images, loading } = useLandscapeImages(100);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages((prev) => new Set(prev).add(idx));
          }
        });
      },
      { rootMargin: '50px' }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-white py-14 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl text-yellow-400 font-bold font-gaegu mb-12 text-center">
        Gallery
      </h1>

      <div
        className="mx-auto max-w-[1700px] grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gridAutoRows: '220px',
        }}
      >
        {loading && (
          <div className="text-white text-center w-full col-span-full py-32">
            <div className="inline-block w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Loading gallery...</p>
          </div>
        )}

        {!loading && images.length === 0 && (
          <div className="text-white text-center w-full col-span-full py-32">
            No photos yet. Add more to{' '}
            <span className="text-yellow-300">/public/images/gallery/</span>
          </div>
        )}

        {!loading && images.map((src, idx) => {
          const isLarge = idx % 9 === 0 || idx % 11 === 0;
          const isWide = idx % 6 === 2 || idx % 7 === 4;
          const isTall = idx % 5 === 3;

          const gridStyles: React.CSSProperties = {
            gridColumn: isWide ? 'span 2' : 'span 1',
            gridRow: isLarge || isTall ? 'span 2' : 'span 1',
          };

          return (
            <motion.div
              key={src}
              data-index={idx}
              ref={(el) => {
                if (el && observerRef.current && !visibleImages.has(idx)) {
                  observerRef.current.observe(el);
                }
              }}
              className="relative overflow-hidden rounded-2xl bg-yellow-100 shadow-md hover:shadow-xl transition-all duration-500"
              style={gridStyles}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.02, 0.5) }}
            >
              {visibleImages.has(idx) ? (
                <img
                  src={src}
                  alt={`Landscape ${idx + 1}`}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700 ease-out cursor-pointer"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full bg-yellow-200 animate-pulse" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* {!loading && images.length > 0 && (
        <p className="text-yellow-500 text-center mt-10 text-sm">
          Showing {images.length} photo{images.length !== 1 ? 's' : ''}. Add more{' '}
          <span className="font-semibold">landscape-#.jpg</span> files to{' '}
          <code>/public/images/gallery/</code> to expand your gallery!
        </p>
      )} */}
    </section>
  );
}