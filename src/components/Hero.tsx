import { motion } from 'motion/react';
import { Phone, ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { STORE_CONTACT } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const badgeVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-radial from-cream-100 to-cream-50 overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Premium Typography and CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left space-y-6 md:space-y-8"
          >
            {/* Tagline/Chip */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start bg-accent-red/5 border border-accent-red/10 px-4 py-1.5 rounded-full text-accent-red text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-accent-gold fill-accent-gold" />
              <span>Taste of Rajasthan in Surat</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.1]"
            >
              Traditional Taste, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-accent-pink to-accent-gold">
                Crafted with Love
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-medium"
            >
              Fresh Indian Sweets Made with Pure Ingredients. Experiencing Rajasthan's rich royal sweets heritage and premium fresh dairy products crafted with the absolute finest care.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 md:gap-4 max-w-md pt-2"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-accent-pink/10 text-accent-pink">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-charcoal/80">100% Pure Ghee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-accent-pink/10 text-accent-pink">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-charcoal/80">Always Fresh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-accent-pink/10 text-accent-pink">
                  <Heart className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-charcoal/80">No Preservatives</span>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => onNavigate('sweets')}
                className="flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red/95 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-accent-red/15 hover:shadow-accent-red/25 active:scale-98 transition-all duration-200 group text-base"
              >
                <span>Explore Our Sweets</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
              
              <a
                href={`tel:${STORE_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-white hover:bg-cream-100 border-2 border-accent-pink/30 hover:border-accent-pink text-accent-red font-bold px-8 py-4 rounded-2xl active:scale-98 transition-all duration-200 text-base shadow-sm"
              >
                <Phone className="w-5 h-5 fill-accent-red/10" />
                <span>Call +91 92512 71008</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Sweets Collage / Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0"
          >
            {/* Rotating golden mandala ring behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-dashed border-accent-gold/20 flex items-center justify-center"
              >
                <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-dashed border-accent-gold/15" />
              </motion.div>
            </div>

            {/* Glowing gold backdrops */}
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-accent-gold/10 blur-2xl pointer-events-none" />

            {/* Hero Main Image (Glistening Kaju Katli / Assortment) */}
            <div className="relative z-10">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-cream-100">
                <img
                  src="/images/kaju-katli.jpg"
                  alt="Premium Kaju Katli"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                
                {/* Image overlay label */}
                <div className="absolute bottom-4 left-4 text-white text-left">
                  <p className="text-xs uppercase font-bold tracking-widest text-accent-gold">Signature Mithai</p>
                  <p className="font-serif text-lg font-bold">Premium Kaju Katli</p>
                </div>
              </div>

              {/* Floating Badge (Est. 1998) */}
              <motion.div
                variants={badgeVariants}
                animate="animate"
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-accent-pink text-white p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border-2 border-white transform rotate-12 z-20 min-w-[90px]"
              >
                <span className="block text-[10px] uppercase font-bold tracking-widest text-cream-200">Established</span>
                <span className="block font-serif text-xl font-black">2010</span>
                <span className="block text-[10px] uppercase font-bold text-accent-gold tracking-wide">Surat, Guj</span>
              </motion.div>

              {/* Floating Decorative Little Dish Image */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-6 hidden sm:block bg-cream-100 z-20 hover:rotate-0 transition-transform duration-300"
              >
                <img
                  src="/images/motichoor-laddu.jpg"
                  alt="Delicious Motichoor Laddu"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
