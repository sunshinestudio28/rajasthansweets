import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_CONTACT } from '../data';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    sweetChoice: 'Kaju Katli'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sweetOptions = [
    'Kaju Katli', 'Motichoor Laddu', 'Gulab Jamun', 'Rasgulla', 
    'Rasmalai', 'Milk Cake', 'Peda', 'Jalebi', 'Ghewar', 'Rabri'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Build WhatsApp message URL
      const text = `Hello Rajasthan Sweet & Dairy! my name is *${formData.name}* (Phone: ${formData.phone}). I am interested in ordering *${formData.sweetChoice}*. Here is my inquiry: "${formData.message}"`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/919251271008?text=${encodedText}`;
      
      // Auto-open WhatsApp after a brief moment
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        // Reset form
        setFormData({ name: '', phone: '', message: '', sweetChoice: 'Kaju Katli' });
        setSubmitSuccess(false);
      }, 1500);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-cream-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-accent-red font-semibold uppercase tracking-wider text-sm mb-3">
            <MessageSquare className="w-4 h-4 text-accent-gold" />
            <span>Visit Or Contact</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight">
            Connect With Us
          </h2>
          <div className="h-1 w-20 bg-accent-gold mx-auto mt-4 mb-5" />
          <p className="text-charcoal/70 text-base sm:text-lg font-medium">
            Have an upcoming wedding, festive celebration, or custom catering inquiry? Visit our Surat store or send us a quick message directly.
          </p>
        </div>

        {/* Contact info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Block: Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
              Store Information
            </h3>
            
            {/* Address Card */}
            <div className="bg-cream-50 p-6 rounded-3xl shadow-sm border border-cream-200/50 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-red/10 text-accent-red flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-lg">Physical Address</h4>
                <p className="text-sm text-charcoal/80 font-medium leading-relaxed mt-1.5">
                  Rajasthan Sweet & Dairy <br />
                  311312, New Bamroli Rd, Rameshwar Nagar, <br />
                  Nem Nagar, Pandesara, Udhana, <br />
                  Surat, Gujarat 394210
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-cream-50 p-6 rounded-3xl shadow-sm border border-cream-200/50 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-pink/10 text-accent-pink flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-lg">Order Hotline</h4>
                <p className="text-sm text-charcoal/80 font-bold leading-relaxed mt-1.5">
                  <a href={`tel:${STORE_CONTACT.phoneRaw}`} className="text-accent-red hover:underline block text-base">
                    +91 92512 71008
                  </a>
                  <span className="text-xs font-medium text-charcoal/60 block mt-0.5">
                    Tap to dial directly from your smartphone
                  </span>
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-cream-50 p-6 rounded-3xl shadow-sm border border-cream-200/50 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 text-accent-gold flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-lg">Working Hours</h4>
                <p className="text-sm text-charcoal/80 font-medium leading-relaxed mt-1.5">
                  Monday to Sunday <br />
                  <span className="text-accent-red font-bold text-sm">7:00 AM - 10:00 PM</span> <br />
                  <span className="text-xs text-charcoal/50 mt-1 block">Open all days during festivals</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Message Form */}
          <div className="lg:col-span-7 bg-cream-50 p-8 rounded-3xl shadow-sm border border-cream-200/50 text-left relative">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">
              Quick WhatsApp Inquiry
            </h3>
            <p className="text-xs text-charcoal/60 font-semibold uppercase tracking-wider mb-6">
              Inquire online, Chat on WhatsApp instantly
            </p>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-charcoal/70 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:border-accent-red focus:bg-white text-sm font-semibold transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-charcoal/70 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 98765 43210"
                        className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:border-accent-red focus:bg-white text-sm font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Choice of Sweet */}
                  <div className="space-y-1.5">
                    <label htmlFor="sweetChoice" className="text-xs font-bold text-charcoal/70 uppercase tracking-wider">
                      Select Sweet of Interest
                    </label>
                    <select
                      id="sweetChoice"
                      name="sweetChoice"
                      value={formData.sweetChoice}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:border-accent-red focus:bg-white text-sm font-semibold transition-all cursor-pointer"
                    >
                      {sweetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-charcoal/70 uppercase tracking-wider">
                      Inquiry Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Specify quantities, date of event, or ask about our fresh sweets..."
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:border-accent-red focus:bg-white text-sm font-semibold transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red/95 text-white py-4 rounded-xl font-bold shadow-lg shadow-accent-red/10 hover:shadow-accent-red/20 active:scale-[0.99] transition-all disabled:opacity-75 cursor-pointer text-base"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message & Open WhatsApp</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-black text-charcoal">
                    Connecting to WhatsApp...
                  </h4>
                  <p className="text-charcoal/70 text-sm font-medium max-w-sm">
                    Thank you, {formData.name}! We are preparing your message about {formData.sweetChoice} to chat with our shop manager instantly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Google Map Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Interactive Google Map
              </h3>
              <p className="text-sm text-charcoal/60 font-semibold mt-0.5">
                Rameshwar Nagar, Pandesara, Surat, Gujarat 394210
              </p>
            </div>
            
            <a
              href="https://maps.google.com/?q=Rajasthan+Sweet+%26+Dairy+Rameshwar+Nagar+Pandesara+Surat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 border border-cream-300 px-5 py-2.5 rounded-xl text-sm font-bold text-accent-red transition-all shadow-sm shrink-0 self-start sm:self-center cursor-pointer"
            >
              <Navigation className="w-4.5 h-4.5 text-accent-red fill-accent-red/10" />
              <span>Get GPS Directions</span>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="w-full h-[360px] sm:h-[450px] rounded-3xl overflow-hidden shadow-md border-4 border-white bg-cream-200"
          >
            <iframe
              src={STORE_CONTACT.mapIframe}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rajasthan Sweet & Dairy Location Map"
              className="w-full h-full"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
