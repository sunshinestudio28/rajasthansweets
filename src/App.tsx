import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TESTIMONIALS, STORE_CONTACT } from './data';
import { Sparkles, Star, MessageSquareCode, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Scrollspy and Back-to-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      setShowBackToTop(window.scrollY > 500);

      // Determine active section by scroll position
      const sections = ['home', 'sweets', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better accuracy

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Testimonial auto-scroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal font-sans selection:bg-accent-pink/30 relative">
      
      {/* Premium Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero Presentation */}
      <Hero onNavigate={handleNavigate} />

      {/* Sweets Menu */}
      <Products />

      {/* Story & About */}
      <About />

      {/* Customer Review Section (Testimonials slider) */}
      <section className="py-20 bg-cream-100/60 border-y border-cream-200/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="inline-flex items-center gap-1 text-accent-red font-bold uppercase tracking-wider text-xs mb-3">
            <Sparkles className="w-4 h-4 text-accent-gold fill-accent-gold" />
            <span>Loved by Surat</span>
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal mb-8">
            What Our Customers Say
          </h3>

          <div className="relative min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReviewIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="space-y-4"
              >
                {/* Gold Stars */}
                <div className="flex justify-center gap-1 text-accent-gold">
                  {[...Array(TESTIMONIALS[activeReviewIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Review Comment */}
                <p className="font-serif text-lg sm:text-xl italic text-charcoal/85 max-w-2xl mx-auto leading-relaxed">
                  "{TESTIMONIALS[activeReviewIdx].comment}"
                </p>

                {/* Review Author */}
                <div>
                  <p className="font-bold text-accent-red text-sm sm:text-base">
                    {TESTIMONIALS[activeReviewIdx].name}
                  </p>
                  <p className="text-xs text-charcoal/50 font-medium">
                    {TESTIMONIALS[activeReviewIdx].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReviewIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeReviewIdx === idx ? 'bg-accent-red w-6' : 'bg-cream-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Sweets Grid Gallery */}
      <Gallery />

      {/* Interactive Contact & Map */}
      <Contact />

      {/* Detailed Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Button (FAB) / WhatsApp & Back to Top */}
      <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3.5 rounded-full bg-charcoal text-white hover:bg-accent-red active:scale-95 transition-all duration-300 shadow-xl border border-cream-200/10 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Chat Floating */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          href={STORE_CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white active:scale-95 transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer border-2 border-white hover:rotate-3"
          title="Inquire on WhatsApp"
        >
          <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.034 14.068 1 11.631 1 6.237 1 1.848 5.372 1.843 10.804c-.001 1.814.488 3.59 1.412 5.176l-.991 3.613 3.793-.989zm13.015-7.18c-.1-.166-.36-.265-.75-.465-.39-.199-2.31-1.14-2.67-1.27-.36-.13-.62-.195-.88.195-.26.39-.99 1.235-1.21 1.494-.22.26-.44.29-.83.09-.39-.2-1.64-.604-3.13-1.933-1.16-1.033-1.94-2.31-2.17-2.7-.22-.39-.02-.6.18-.798.18-.18.39-.465.59-.697.2-.23.26-.39.39-.663.13-.265.06-.5-.03-.7-.09-.2-.88-2.115-1.21-2.912-.315-.764-.64-.663-.88-.675-.23-.01-.49-.01-.75-.01-.26 0-.68.1-1.03.49-.36.39-1.36 1.33-1.36 3.237 0 1.907 1.39 3.75 1.58 4.015.2.265 2.734 4.178 6.624 5.856.924.4 1.647.64 2.21.822.93.295 1.77.25 2.44.15.74-.115 2.31-.94 2.63-1.85.32-.91.32-1.69.23-1.85z" />
          </svg>
        </motion.a>
      </div>

    </div>
  );
}
