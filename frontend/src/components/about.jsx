import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, ArrowRight } from 'lucide-react';

const CreativeContact = () => {
  return (
    <section className="relative bg-[#1a1a1a] py-32 overflow-hidden">
      
      {/* --- STATIC BLUEPRINT BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-20">
          {/* Static Infinity Logo Sketch - Positioned in the top right empty corner */}
          <path 
            d="M850,50 C880,20 950,80 920,120 S850,150 880,180" 
            stroke="#fbb034" strokeWidth="2" fill="none" strokeDasharray="8 6" 
          />
          {/* Static Directional Chalk Lines - Positioned in the bottom right corner */}
          <path d="M900,850 L950,850 M925,825 L925,875" stroke="white" strokeWidth="1" opacity="0.5" />
          <circle cx="925" cy="850" r="40" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" fill="none" />

          {/* Static Rough Underline for the "Who We Are" area - Positioned specifically */}
          <path d="M60%,15% L75%,14%" stroke="#fbb034" strokeWidth="4" strokeLinecap="round" opacity="0.4" />

          {/* Static Geometric Detail - Positioned far left center */}
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* --- LEFT: THE "TAPED NOTE" CONTACT FORM --- */}
          <motion.div 
            initial={{ rotate: -2, opacity: 0, scale: 0.9 }}
            whileInView={{ rotate: -1, opacity: 1, scale: 1 }}
            className="w-full lg:w-[450px] bg-[#fbb034] p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)] relative"
          >
            {/* "Tape" elements to make it look like a note */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/20 backdrop-blur-sm -rotate-2 border border-white/10" />
            
            <h3 className="text-black text-5xl font-black uppercase tracking-tighter mb-2 leading-none">
              Get In<br/>Touch<span className="text-white">.</span>
            </h3>
            <p className="text-black/60 font-bold text-xs uppercase tracking-widest mb-10">
              Send a Request
            </p>

            <form className="space-y-6">
              {['Full name', 'Email', 'Phone number', 'Subject'].map((field) => (
                <div key={field} className="group">
                  <input 
                    type="text" 
                    placeholder={field}
                    className="w-full bg-transparent border-b-2 border-black/10 p-2 placeholder:text-black/40 text-black font-bold focus:outline-none focus:border-black transition-all"
                  />
                </div>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-black text-white py-5 flex items-center justify-center gap-4 font-black uppercase text-sm tracking-[0.2em]"
              >
                Send Request <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* --- RIGHT: ABOUT CONTENT --- */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 border border-[#fbb034] rounded-full mb-6">
                <span className="text-[#fbb034] font-black text-[10px] uppercase tracking-[0.4em]">Who We Are</span>
              </div>
              
              <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-10">
                Trusted <span className="text-[#fbb034]">Bhopal</span><br/>
                Marketing <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Experts</span>
              </h2>

              <div className="max-w-xl space-y-8">
                <p className="text-gray-400 text-xl font-medium leading-tight">
                  <span className="text-white font-bold">Orphic Solution</span> is your trusted Bhopal-based digital marketing company. We specialize in <span className="text-white underline decoration-[#fbb034] decoration-2">SEO, SMO, PPC</span>, and high-end web development.
                </p>

                {/* Services Checklist */}
                <div className="space-y-4">
                  {[
                    "Proven Pay-Per-Click Advertising",
                    "Innovative Web Development Solutions",
                    "Strategic Search Engine Optimization"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-[#fbb034] group-hover:scale-150 transition-transform" />
                      <span className="text-white font-black uppercase text-sm tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 pt-8">
                  <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer">
                    <Phone size={20} className="text-[#fbb034]" />
                    <span className="text-white font-black text-sm uppercase">+91 123 456 7890</span>
                  </div>
                  <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer">
                    <Mail size={20} className="text-[#fbb034]" />
                    <span className="text-white font-black text-sm uppercase">hello@orphic.in</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Static Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default CreativeContact;