export default function AboutSnapshot() {
    return (
      <section className="py-20 bg-black text-white px-8 md:px-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400 select-none">About Buddha Village</h2>
        <p className="text-lg max-w-4xl mx-auto font-light leading-relaxed">
          Nestled in the heart of nature, [translate:Buddha Village] offers a tranquil escape from the chaos, where peace meets luxury.
          Inspired by the wise teachings of [translate:Buddha], every corner promises rejuvenation and harmony.
        </p>
        <div className="mt-10">
          {/* Optional: Add SVG or image icon of Buddha or leaf */}
        </div>
      </section>
    );
  }
  