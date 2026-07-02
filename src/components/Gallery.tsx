import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_DATA[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-accent-red font-semibold uppercase tracking-wider text-sm mb-3">
            <Camera className="w-4 h-4 text-accent-gold" />
            <span>Visual Showcase</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight">
            Our Sweet Gallery
          </h2>
          
          <div className="h-1 w-20 bg-accent-gold mx-auto mt-4 mb-5" />
          
          <p className="text-charcoal/70 text-base sm:text-lg font-medium">
            Take a look at the artistic perfection of our traditional Indian sweets. Every single creation is molded, garnished, and finished by master confectioners.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl aspect-square shadow-md border-4 border-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-cream-100"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Interactive Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6 text-left">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-extrabold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-cream-100 text-xs font-semibold">
                  <Maximize2 className="w-4.5 h-4.5 text-accent-pink" />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Enlarged Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark backdrop with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-cream-50 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl z-10 border border-cream-200"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Big Image */}
                <div className="aspect-4/3 bg-cream-100">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption Bar */}
                <div className="p-6 text-left">
                  <span className="inline-flex items-center gap-1 bg-accent-pink/10 text-accent-pink px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-accent-gold fill-accent-gold" />
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-2xl font-black text-charcoal">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 mt-2 font-medium">
                    Our master chefs prepare each batch with pure milk fat, organic cardamoms, and real saffron threads to achieve this premium presentation.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
