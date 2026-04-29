import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

const IMAGES = [
  'https://images.trvl-media.com/place/6354403/76e160f9-6c21-43cb-bd72-ef6218eaa18f.jpg',
  'https://krentdevstorage.blob.core.windows.net/krentfiles/property-677b2e221bed380011c16545-1736126129488-cover.jpeg',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'
];

const NAV_LINKS = ['EXPERIENCE', 'PORTFOLIO', 'SERVICES', 'INQUIRE'];

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-white/30">
      {/* Hero Wrapper */}
      <div className="relative h-screen flex flex-col overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeOut" },
                scale: { duration: 7, ease: "linear" }
              }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={IMAGES[currentImage]}
                alt="Luxury Real Estate"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="relative z-50 w-full flex items-center justify-between px-6 lg:px-12 py-8 max-w-[1800px] mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
              <span className="text-xs font-serif italic">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-white">Kachi The Realtor</span>
              <span className="text-[10px] text-white/50 tracking-tighter uppercase">& Management</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] font-medium tracking-[0.2em] text-white/90 hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
            <button className="border border-white/20 px-6 py-2 text-[11px] font-medium tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              INQUIRE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-[60] bg-black pt-24 px-6 md:hidden"
            >
              <div className="flex flex-col space-y-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-serif tracking-widest border-b border-white/10 pb-4 text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] tracking-[0.4em] text-white/60">ESTATE MANAGEMENT</span>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-light tracking-tight leading-[1.1] mb-8 text-balance">
            Where Investment <br />
            Meets <span className="font-serif italic font-normal text-[#E2C08D]">Elegance.</span>
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-base text-white/70 font-light leading-relaxed mb-12 text-balance">
            Fifteen years of ownership perspective applied to your portfolio. 
            We treat every property with the exacting standards we apply to our own.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto bg-white text-black px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all cursor-pointer">
              VIEW PORTFOLIO
            </button>
            <button className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all cursor-pointer">
              MANAGEMENT
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
        >
          <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-sans">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={14} className="text-white/40" />
          </motion.div>
        </motion.div>
      </section>
    </div>

    {/* Experience Section */}
      <section id="experience" className="relative z-10 bg-black py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[#E2C08D] text-[10px] tracking-[0.4em] font-sans uppercase mb-6 block">OUR PHILOSOPHY</span>
              <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight leading-tight mb-8">
                A legacy built on <br />
                <span className="font-serif italic text-white/90">trust and distinction.</span>
              </h2>
              <div className="space-y-6 text-white/60 font-light leading-relaxed">
                <p>
                  Kachi The Realtor represents the pinnacle of luxury real estate advisory. We serve as the bridge between 
                  unparalleled investment opportunities and the lifestyle of elegance our clients demand.
                </p>
                <p>
                  With over a decade and a half of experience, our approach is rooted in an ownership mentality. 
                  We don't just manage properties; we nurture assets and craft experiences that transcend the traditional 
                  notion of property management.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
                <div>
                  <span className="text-2xl font-sans font-light block mb-2">15+</span>
                  <span className="text-[10px] text-white/40 tracking-widest uppercase">Years Experience</span>
                </div>
                <div>
                  <span className="text-2xl font-sans font-light block mb-2">$2B+</span>
                  <span className="text-[10px] text-white/40 tracking-widest uppercase">Portfolio Value</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-black/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 bg-white text-black py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-black/40 text-[10px] tracking-[0.4em] font-sans uppercase mb-4 block">PORTFOLIO</span>
              <h2 className="text-4xl md:text-6xl font-sans font-light tracking-tight">Curated Listings</h2>
            </motion.div>
            <motion.button 
              whileHover={{ x: 10 }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase flex items-center space-x-4 group"
            >
              <span>EXPLORE ALL PROPERTIES</span>
              <div className="w-12 h-[1px] bg-black group-hover:w-16 transition-all" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Obsidian Penthouse",
                location: "New York, NY",
                price: "$12,500,000",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Azure Coast Villa",
                location: "Malibu, CA",
                price: "$18,200,000",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
              },
              {
                title: "The Glass House",
                location: "Jackson Hole, WY",
                price: "$8,900,000",
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((property, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    FOR SALE
                  </div>
                </div>
                <h3 className="text-xl font-sans font-light tracking-tight mb-1">{property.title}</h3>
                <p className="text-[10px] text-black/50 tracking-widest uppercase mb-4">{property.location}</p>
                <p className="text-sm font-serif italic text-[#C49B55]">{property.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 bg-[#0A0A0A] py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <span className="text-[#E2C08D] text-[10px] tracking-[0.4em] font-sans uppercase mb-6 block">BESPOKE SERVICES</span>
            <h2 className="text-4xl md:text-7xl font-sans font-light tracking-tight text-white mb-8">
              Excellence in <br />
              <span className="font-serif italic">Every Detail.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5 bg-white/2">
            {[
              {
                title: "Portfolio Management",
                desc: "Strategic oversight for your real estate investments.",
                icon: "01"
              },
              {
                title: "Global Acquisition",
                desc: "Securing exclusive properties across international markets.",
                icon: "02"
              },
              {
                title: "Interior Curation",
                desc: "Defining spaces with an uncompromising eye for aesthetics.",
                icon: "03"
              },
              {
                title: "Concierge Sales",
                desc: "Whisper listings and high-stakes negotiations handled with discretion.",
                icon: "04"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="p-12 border-b md:border-b-0 md:border-r border-white/5 last:border-0 text-left group transition-all"
              >
                <span className="text-white/10 text-4xl font-serif mb-8 block group-hover:text-[#E2C08D] transition-colors">{service.icon}</span>
                <h3 className="text-lg font-sans font-normal tracking-wide text-white mb-4">{service.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquire" className="relative z-10 bg-black py-32 px-6 lg:px-12 overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E2C08D]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-[1000px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-none mb-12">
                Begin your <br />journey.
              </h2>
              <p className="text-white/50 font-light mb-12 max-w-sm">
                Inquire today for a private consultation or to receive details on our exclusive whisper listings.
              </p>
              <div className="space-y-4 text-sm font-sans tracking-widest text-white/80">
                <p>E: PRIVATE@KACHI.REALTOR</p>
                <p>T: +1 (555) 890 2341</p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-8">
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  className="bg-transparent border-b border-white/20 pb-4 text-[10px] tracking-[0.2em] focus:border-white outline-none w-full uppercase transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent border-b border-white/20 pb-4 text-[10px] tracking-[0.2em] focus:border-white outline-none w-full uppercase transition-colors"
                />
                <select className="bg-transparent border-b border-white/20 pb-4 text-[10px] tracking-[0.2em] focus:border-white outline-none w-full uppercase appearance-none transition-colors">
                  <option className="bg-black">SELECT INTEREST</option>
                  <option className="bg-black">BUYING</option>
                  <option className="bg-black">SELLING</option>
                  <option className="bg-black">MANAGEMENT</option>
                </select>
                <textarea 
                  rows={4} 
                  placeholder="MESSAGE" 
                  className="bg-transparent border-b border-white/20 pb-4 text-[10px] tracking-[0.2em] focus:border-white outline-none w-full uppercase resize-none transition-colors"
                />
              </div>
              <button className="w-full bg-white text-black py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#E2C08D] hover:text-white transition-all cursor-pointer">
                SEND INQUIRY
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-white/10 py-20 px-6 lg:px-12 text-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-2xl font-serif italic text-white/90">K</span>
            <h2 className="text-sm font-sans tracking-[0.5em] text-white/50 uppercase mt-4">Kachi The Realtor</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
            {['INSTAGRAM', 'LINKEDIN', 'YOUTUBE', 'JOURNAL'].map((social) => (
              <a key={social} href="#" className="text-[10px] tracking-[0.3em] text-white/30 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>

          <div className="text-[9px] tracking-[0.4em] text-white/20 uppercase">
            © 2026 KACHI THE REALTOR & MANAGEMENT. ALL RIGHTS RESERVED. <br />
            DESIGNED FOR DISTINCTION.
          </div>
        </div>
      </footer>
    </div>
  );
}
