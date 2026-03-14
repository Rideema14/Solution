import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Search, Megaphone, MousePointerClick, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    category: "Architecture",
    desc: "Building high-performance digital cathedrals with Next.js and high-end motion design.",
    icon: <Globe size={32} />,
    color: "#fbb034"
  },
  {
    title: "SEO Strategy",
    category: "Visibility",
    desc: "We don't just follow algorithms. We dictate them to put your brand at the top.",
    icon: <Search size={32} />,
    color: "#ffffff"
  },
  {
    title: "Social Marketing",
    category: "Growth",
    desc: "Viral narratives engineered for maximum impact and psychological brand resonance.",
    icon: <Megaphone size={32} />,
    color: "#fbb034"
  },
  {
    title: "Ads & PPC",
    category: "Revenue",
    desc: "Converting attention into capital with surgical precision and data-driven ROI.",
    icon: <MousePointerClick size={32} />,
    color: "#ffffff"
  }
];

const PremiumServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="relative bg-[#1a1a1a] py-24 overflow-hidden">
      
      {/* --- CHALK / HAND-DRAWN BG ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hand-drawn circle around the header area */}
          <motion.path
            d="M150,150 Q250,100 350,150 T550,150"
            stroke="#fbb034" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 10"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }}
          />
          
          {/* Rough chalk underline under Title */}
          <motion.path 
            d="M50,320 L400,310" 
            stroke="white" strokeWidth="3" strokeLinecap="round"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Abstract Chalk Scribble in corner */}
          <circle cx="900" cy="100" r="80" stroke="#fbb034" strokeWidth="2" strokeDasharray="15 5" opacity="0.5" />
          <path d="M850,50 L950,150 M950,50 L850,150" stroke="white" strokeWidth="2" opacity="0.8" />
{/* Added a sketchy 'asterisk' or star accent on the right as well */}

        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-6 lg:px-24 mb-16">
        <div className="flex items-center gap-4 mb-4">
        </div>
        <h2 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
          CORE <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>AGENCY</span><br/>
          SERVICES<span className="text-[#fbb034]">.</span>
        </h2>
      </div>

      {/* THE SMOOTH INTERACTIVE STACK (Exact code as provided) */}
      <div className="relative z-10 flex flex-col lg:flex-row h-[600px] lg:h-[500px] w-full px-4 lg:px-12 gap-3">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <motion.div
              key={index}
              onMouseEnter={() => setExpandedIndex(index)}
              animate={{ 
                flex: isExpanded ? 3 : 0.6,
                backgroundColor: isExpanded ? service.color : "rgba(255,255,255,0.03)"
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative h-full rounded-[2.5rem] cursor-pointer overflow-hidden flex flex-col p-10 border border-white/5"
            >
              {/* Vertical Title (Collapsed State) */}
              <AnimatePresence>
                {!isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <p className="whitespace-nowrap -rotate-90 text-white font-black text-2xl uppercase tracking-tighter opacity-20">
                      {service.title}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded Content */}
              <div className={`h-full flex flex-col transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-between items-start mb-12">
                  <div className={`p-5 rounded-2xl ${service.color === '#ffffff' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                    {service.category}
                  </span>
                </div>

                <div className="mt-auto">
                  <motion.h3 
                    className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6 text-black"
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-lg lg:text-xl font-medium leading-snug text-black/70 max-w-xl mb-10">
                    {service.desc}
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl"
                  >
                    View Details
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PremiumServices;