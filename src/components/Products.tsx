import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SWEETS_DATA } from '../data';
import { Sparkles, Leaf, Award } from 'lucide-react';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'popular' | 'signature' | 'dairy'>('all');

  const filterTabs = [
    { label: 'All Delights', id: 'all' as const },
    { label: 'Popular Choices', id: 'popular' as const },
    { label: 'Chef Signatures', id: 'signature' as const },
    { label: 'Fresh Dairy', id: 'dairy' as const },
  ];

  const filteredSweets = SWEETS_DATA.filter((sweet) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'dairy') return sweet.type === 'dairy';
    return sweet.tag === activeFilter;
  });

  const getTagStyle = (tag: string) => {
    switch (tag) {
      case 'signature':
        return {
          bg: 'bg-amber-100 text-amber-800 border-amber-200/50',
          icon: <Award className="w-3.5 h-3.5 mr-1" />
        };
      case 'popular':
        return {
          bg: 'bg-rose-100 text-rose-800 border-rose-200/50',
          icon: <Sparkles className="w-3.5 h-3.5 mr-1" />
        };
      case 'fresh':
      default:
        return {
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-200/50',
          icon: <Leaf className="w-3.5 h-3.5 mr-1" />
        };
    }
  };

  return (
    <section id="sweets" className="py-24 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 text-accent-red font-semibold uppercase tracking-wider text-sm mb-3"
          >
            <Sparkles className="w-4 h-4 text-accent-gold fill-accent-gold" />
            <span>Pure Delicacies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight"
          >
            Our Handcrafted Sweets
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4 mb-5"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-charcoal/70 text-base sm:text-lg font-medium"
          >
            Savor the authentic taste of Rajasthan with our traditional sweets, prepared daily in small batches with pure Desi Ghee and high-quality milk.
          </motion.p>
        </div>

        {/* Dynamic Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-charcoal/70 bg-cream-100 hover:bg-cream-200/70 border border-cream-200/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="productFilterIndicator"
                    className="absolute inset-0 bg-accent-red rounded-full shadow-md shadow-accent-red/20 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sweets Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSweets.map((sweet, index) => {
              const tagStyle = getTagStyle(sweet.tag);
              return (
                <motion.div
                  key={sweet.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, type: 'spring', bounce: 0.15 }}
                  className="group bg-cream-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-cream-200/60 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-4/3 overflow-hidden bg-cream-50">
                    <img
                      src={sweet.image}
                      alt={sweet.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Sweet tag */}
                    <span className={`absolute top-4 left-4 flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${tagStyle.bg}`}>
                      {tagStyle.icon}
                      {sweet.tag === 'fresh' ? 'fresh dairy' : sweet.tag}
                    </span>
                  </div>

                  {/* Info Box */}
                  <div className="p-6 text-left flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal mb-2.5 group-hover:text-accent-red transition-colors duration-200">
                        {sweet.name}
                      </h3>
                      <p className="text-charcoal/70 text-sm leading-relaxed font-medium">
                        {sweet.description}
                      </p>
                    </div>

                    {/* Bottom visual separator */}
                    <div className="mt-5 pt-4 border-t border-cream-200/60 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                        Traditional Recipe
                      </span>
                      <span className="text-xs font-bold text-accent-pink uppercase tracking-wider">
                        Pure Quality
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
