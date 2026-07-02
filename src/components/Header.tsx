import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Milk } from 'lucide-react';
import { STORE_CONTACT } from '../data';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'Our Sweets', href: 'sweets' },
    { label: 'About', href: 'about' },
    { label: 'Gallery', href: 'gallery' },
    { label: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-cream-50/80 backdrop-blur-md shadow-md border-b border-cream-200/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="relative w-11 h-11 rounded-full bg-accent-red flex items-center justify-center text-cream-50 shadow-md shadow-accent-red/20 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-accent-pink"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                />
                <Milk className="w-5.5 h-5.5 relative z-10 text-cream-50 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-accent-red group-hover:text-accent-pink transition-colors">
                  Rajasthan
                </span>
                <span className="block text-xs uppercase font-medium tracking-widest text-accent-gold -mt-1">
                  Sweet & Dairy
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${
                      isActive ? 'text-accent-red' : 'text-charcoal/80 hover:text-accent-red'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-accent-pink/10 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Call To Action */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${STORE_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 bg-accent-red hover:bg-accent-red/95 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-accent-red/20 active:scale-95 transition-all duration-200"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Actions and Hamburger Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${STORE_CONTACT.phoneRaw}`}
                className="p-2.5 rounded-full bg-accent-pink/10 text-accent-red hover:bg-accent-pink/20 active:scale-90 transition-transform"
                title="Call Store"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal active:scale-90 transition-transform focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-cream-50 z-50 p-6 shadow-2xl flex flex-col justify-between border-l border-cream-200 md:hidden"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-cream-200/60">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-accent-red flex items-center justify-center text-cream-50">
                      <Milk className="w-4 h-4 text-cream-50" />
                    </div>
                    <div>
                      <span className="block font-serif text-lg font-bold text-accent-red leading-tight">
                        Rajasthan
                      </span>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-accent-gold">
                        Sweet & Dairy
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-cream-100 text-charcoal active:scale-90 transition-transform"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href;
                    return (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleNavClick(item.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 text-left ${
                          isActive
                            ? 'bg-accent-red text-white shadow-md shadow-accent-red/10'
                            : 'text-charcoal/80 hover:bg-cream-100 hover:text-accent-red'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cream-50" />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="flex flex-col gap-3 pt-6 border-t border-cream-200/60">
                <p className="text-xs text-center text-charcoal/60 font-medium">
                  {STORE_CONTACT.hours}
                </p>
                <a
                  href={`tel:${STORE_CONTACT.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-accent-red text-white py-3.5 rounded-xl font-bold shadow-lg hover:bg-accent-red/90 transition-colors"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call Now (+91 92512 71008)</span>
                </a>
                <a
                  href={STORE_CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-colors"
                >
                  {/* Custom inline WhatsApp SVG */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.034 14.068 1 11.631 1 6.237 1 1.848 5.372 1.843 10.804c-.001 1.814.488 3.59 1.412 5.176l-.991 3.613 3.793-.989zm13.015-7.18c-.1-.166-.36-.265-.75-.465-.39-.199-2.31-1.14-2.67-1.27-.36-.13-.62-.195-.88.195-.26.39-.99 1.235-1.21 1.494-.22.26-.44.29-.83.09-.39-.2-1.64-.604-3.13-1.933-1.16-1.033-1.94-2.31-2.17-2.7-.22-.39-.02-.6.18-.798.18-.18.39-.465.59-.697.2-.23.26-.39.39-.663.13-.265.06-.5-.03-.7-.09-.2-.88-2.115-1.21-2.912-.315-.764-.64-.663-.88-.675-.23-.01-.49-.01-.75-.01-.26 0-.68.1-1.03.49-.36.39-1.36 1.33-1.36 3.237 0 1.907 1.39 3.75 1.58 4.015.2.265 2.734 4.178 6.624 5.856.924.4 1.647.64 2.21.822.93.295 1.77.25 2.44.15.74-.115 2.31-.94 2.63-1.85.32-.91.32-1.69.23-1.85z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
