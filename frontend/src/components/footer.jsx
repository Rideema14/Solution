import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook,ArrowUpRight, ArrowUp, Send, MapPin, Globe, Zap, Phone } from 'lucide-react';

const OrphicPremiumFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#1a1a1a] pt-32 pb-12 overflow-hidden border-t border-white/5 text-white">
      
      {/* --- LAYERED LIQUID WAVES (Background) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="absolute bottom-0 w-full h-[500px]" preserveAspectRatio="none" viewBox="0 0 1440 400">
          {/* Wave 1: Deep Slow Flow */}
          <motion.path
            initial={{ d: "M0,200 Q360,150 720,200 T1440,200 L1440,400 L0,400 Z" }}
            animate={{ 
              d: [
                "M0,200 Q360,150 720,200 T1440,200 L1440,400 L0,400 Z",
                "M0,200 Q360,250 720,200 T1440,200 L1440,400 L0,400 Z",
                "M0,200 Q360,150 720,200 T1440,200 L1440,400 L0,400 Z"
              ] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="#fbb034"
            opacity="0.1"
          />
          {/* Wave 2: Medium Flow (Inspired by image_0f7105.png) */}
          <motion.path
            initial={{ d: "M0,250 Q360,320 720,250 T1440,250 L1440,400 L0,400 Z" }}
            animate={{ 
              d: [
                "M0,250 Q360,320 720,250 T1440,250 L1440,400 L0,400 Z",
                "M0,250 Q360,180 720,250 T1440,250 L1440,400 L0,400 Z",
                "M0,250 Q360,320 720,250 T1440,250 L1440,400 L0,400 Z"
              ] 
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            fill="#fbb034"
            opacity="0.15"
          />
          {/* Wave 3: Bottom Sharp Flow */}
          <motion.path
            d="M0,320 Q360,280 720,320 T1440,320 L1440,400 L0,400 Z"
            fill="#fbb034"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 pb-20 border-b border-white/5">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Zap className="text-black" fill="black" size={20} />
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter">ORPHIC SOLUTION</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
                Orphic Solution is the Best Digital Marketing Company in Bhopal. We help businesses grow online with expert strategies in Web Development, SEO, Social Media, and PPC.
            </p>
            <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                    <Phone size={14} className="text-[#fbb034]" />
                    <span>Contact Our Experts</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                    <MapPin size={14} className="text-[#fbb034]" />
                    <span>Bhopal, Madhya Pradesh</span>
                </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-8 opacity-50">Quick Links</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              {['Home', 'About Us', 'Services', 'Training', 'Career', 'Blog', 'Privacy Policy'].map((link) => (
                <li key={link} className="hover:text-[#fbb034] transition-colors cursor-pointer">
                    {link}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-8 opacity-50">Featured Services</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              {[
                'Website Development', 
                'Social Media Marketing', 
                'Pay Per Click Management', 
                'Search Engine Optimization'
              ].map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#fbb034] rounded-full" />
                    {service}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-8 opacity-50">Follow The Best</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#fbb034] border border-yellow-500 rounded-xl p-4 text-sm focus:outline-none focus:border-[#fbb034] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white/10 px-4 rounded-lg hover:bg-[#fbb034] hover:text-black transition-all">
                <ArrowUpRight size={18} className="rotate-45" />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                Our skilled team promises impressive results for your success.
            </p>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-mono text-gray-600 tracking-[0.3em] uppercase space-y-2">
            <p>© Copyright Orphicsolution 2024 | All Rights Reserved</p>
            <p className="text-white/20">SEO • SMO • PPC • Web Design • Development</p>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              {[<Facebook />, <Instagram />, <Linkedin />].map((icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-[#fbb034] transition-colors">
                  {React.cloneElement(icon, { size: 20 })}
                </a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </footer>
  );
};

export default OrphicPremiumFooter;

