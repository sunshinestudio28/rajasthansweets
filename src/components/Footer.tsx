import { STORE_CONTACT } from '../data';
import { Phone, CheckCircle2, Milk, Calendar, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLogoClick = () => {
    onNavigate('home');
  };

  return (
    <footer className="bg-charcoal text-cream-100 pt-16 pb-8 text-left border-t-4 border-accent-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-cream-200/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-10 h-10 rounded-full bg-accent-red flex items-center justify-center text-cream-50 shadow-md">
                <Milk className="w-5 h-5 text-cream-50" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-white leading-tight">
                  Rajasthan
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-accent-gold">
                  Sweet & Dairy
                </span>
              </div>
            </button>
            <p className="text-sm text-cream-200/65 leading-relaxed font-medium">
              Bringing you the authentic taste of royal Rajasthani sweets and high-quality, fresh, chemical-free dairy products crafted with pure Desi Ghee in Surat.
            </p>
            
            {/* Small trust lines */}
            <div className="flex items-center gap-3 text-xs text-accent-gold font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Hygienic</span>
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-accent-pink/20 text-accent-pink" />
                <span>Fresh Daily</span>
              </span>
            </div>
          </div>

          {/* Offerings Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-l-2 border-accent-pink pl-3">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-cream-200/75 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-pink shrink-0" />
                <span>In-store Shopping (Fresh Daily)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-pink shrink-0" />
                <span>Home Delivery Available</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-pink shrink-0" />
                <span>Custom Wedding Catering Boxes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-pink shrink-0" />
                <span>Festive & Corporate Sweet Hampers</span>
              </li>
            </ul>
          </div>

          {/* Working Hours Col */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-l-2 border-accent-pink pl-3">
              Working Hours
            </h4>
            <div className="space-y-2.5 text-sm text-cream-200/75 font-medium">
              <div className="flex items-start gap-2">
                <Calendar className="w-4.5 h-4.5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Monday - Sunday</p>
                  <p className="text-xs text-cream-200/60 mt-0.5">Open 7 Days a Week</p>
                  <p className="text-accent-gold font-bold text-sm mt-1">7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call & WhatsApp Quick Links Col */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-l-2 border-accent-pink pl-3">
              Quick Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              {/* Call Link */}
              <a
                href={`tel:${STORE_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now (+91 92512)</span>
              </a>

              {/* WhatsApp Link */}
              <a
                href={STORE_CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.034 14.068 1 11.631 1 6.237 1 1.848 5.372 1.843 10.804c-.001 1.814.488 3.59 1.412 5.176l-.991 3.613 3.793-.989zm13.015-7.18c-.1-.166-.36-.265-.75-.465-.39-.199-2.31-1.14-2.67-1.27-.36-.13-.62-.195-.88.195-.26.39-.99 1.235-1.21 1.494-.22.26-.44.29-.83.09-.39-.2-1.64-.604-3.13-1.933-1.16-1.033-1.94-2.31-2.17-2.7-.22-.39-.02-.6.18-.798.18-.18.39-.465.59-.697.2-.23.26-.39.39-.663.13-.265.06-.5-.03-.7-.09-.2-.88-2.115-1.21-2.912-.315-.764-.64-.663-.88-.675-.23-.01-.49-.01-.75-.01-.26 0-.68.1-1.03.49-.36.39-1.36 1.33-1.36 3.237 0 1.907 1.39 3.75 1.58 4.015.2.265 2.734 4.178 6.624 5.856.924.4 1.647.64 2.21.822.93.295 1.77.25 2.44.15.74-.115 2.31-.94 2.63-1.85.32-.91.32-1.69.23-1.85z" />
                </svg>
                <span>WhatsApp Shop</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower Tier / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-cream-200/50 font-semibold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Rajasthan Sweet & Dairy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Made with Pure Desi Ghee</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
            <span>Pandesara, Surat</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
