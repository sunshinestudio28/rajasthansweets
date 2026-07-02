import { motion } from 'motion/react';
import { ChefHat, Leaf, Heart, Sparkles, Award } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Leaf className="w-6 h-6 text-accent-red" />,
      title: '100% Pure Ingredients',
      desc: 'We use exclusively pure Desi Ghee, premium grade cashew-nuts, natural saffron strands (Kesar), and aromatic green cardamoms without any artificial thickeners.'
    },
    {
      icon: <ChefHat className="w-6 h-6 text-accent-red" />,
      title: 'Slow-Boiled Traditional Khoya',
      desc: 'Our dairy bases and khoya are prepared using the time-tested slow boiling method in huge iron taws, giving our sweets their legendary rich, caramelized taste.'
    },
    {
      icon: <Award className="w-6 h-6 text-accent-red" />,
      title: 'Rajasthani Royal Recipes',
      desc: 'Our chefs carry generations of sweetcraft secrets directly from Jodhpur and Bikaner, maintaining the perfect balance of moisture, sweetness, and aroma.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream-100 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Overlapping Premium Media Collage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual background rings */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-4 border-accent-pink/10 -z-10" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-accent-gold/5 blur-2xl -z-10" />

            {/* Main Image: Dairy processing or beautiful milk-based sweet */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="w-72 h-96 sm:w-80 sm:h-110 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-cream-50"
              >
                <img
                  src="/images/about-prep.jpg"
                  alt="Traditional Indian Sweet Preparation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlapping secondary image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute -bottom-10 -right-10 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block bg-cream-50"
              >
                <img
                  src="/images/about-rabri.jpg"
                  alt="Delicious saffron Rabri Milk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: About content and pillars */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-accent-red font-semibold uppercase tracking-wider text-sm">
                <Heart className="w-4 h-4 fill-accent-pink text-accent-pink" />
                <span>Our Heritage Story</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight">
                Crafting Authentic Rajasthani Sweetness Since 2010
              </h2>
              
              <div className="h-1 w-20 bg-accent-gold mt-3" />
            </div>

            <div className="text-charcoal/80 text-base md:text-lg leading-relaxed space-y-4 font-medium">
              <p>
                At <strong className="text-accent-red font-semibold">Rajasthan Sweet & Dairy</strong>, we believe that sweets are not just desserts; they are an integral part of our celebrations, heritage, and expressions of love.
              </p>
              <p>
                Founded in the heart of Surat, Gujarat, we have dedicated ourselves to recreating the timeless, majestic flavors of Rajasthani sweetcraft. We source our milk daily from trusted local pasture dairies to ensure absolute thickness, freshness, and cleanliness in every batch of Rabri, Milk Cake, and Peda we produce.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="space-y-6 pt-2">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent-pink/10 flex items-center justify-center text-accent-red group-hover:bg-accent-red group-hover:text-white transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal group-hover:text-accent-red transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed font-medium mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

        {/* Dynamic Showcase Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-cream-200/60 text-center">
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-accent-red">15+</p>
            <p className="text-xs sm:text-sm uppercase font-bold text-charcoal/60 tracking-wider mt-1">Years of Craft</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-accent-red">100%</p>
            <p className="text-xs sm:text-sm uppercase font-bold text-charcoal/60 tracking-wider mt-1">Pure Desi Ghee</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-accent-red">5,000+</p>
            <p className="text-xs sm:text-sm uppercase font-bold text-charcoal/60 tracking-wider mt-1">Happy Customers</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-accent-red">Fresh</p>
            <p className="text-xs sm:text-sm uppercase font-bold text-charcoal/60 tracking-wider mt-1">Daily Small Batches</p>
          </div>
        </div>

      </div>
    </section>
  );
}
