import React from 'react';
import { motion } from 'framer-motion';

const NearExactHero = () => {
  return (
    <div className="relative w-full min-h-[600px] bg-[#1a1a1a] overflow-hidden font-sans flex items-center">
      
      {/* 1. BACKGROUND TEXTURE LAYER */}
      {/* This adds that subtle "wrinkled paper" feel from the image */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* 2. THE YELLOW GEOMETRIC SHAPES */}
      {/* Main Yellow Block */}
      <div 
        className="absolute right-0 top-0 w-[55%] h-full bg-[#fbb034] z-0 shadow-[-20px_0_50px_rgba(0,0,0,0.3)]"
        style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        {/* Halftone Dots Overlay (inside the yellow) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(black 1.5px, transparent 0)`, backgroundSize: '12px 12px' }} />
      </div>

      {/* Secondary Orange Stripe (Darker yellow/orange) */}
      <div 
        className="absolute right-[-10%] top-0 w-[20%] h-[120%] bg-[#f7931e] z-10 rotate-12 origin-top shadow-2xl"
      />

      {/* 3. DECORATIVE OUTLINES (The white loop shapes) */}
      <div className="absolute top-20 left-10 w-40 h-80 border-[1.5px] border-white/20 rounded-full -rotate-[35deg] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[40%] w-60 h-60 border-[1.5px] border-white/20 rounded-full pointer-events-none" />

      {/* 4. MAIN CONTENT */}
      <div className="relative z-30 container mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-0 items-center">
        
        {/* TEXT CONTENT */}
        <div className="flex flex-col mt-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* "We're" script */}
            <span className="text-[#fbb034] font-['Permanent_Marker',cursive] text-3xl ml-4 block -mb-4 drop-shadow-md">
              We're
            </span>
            
            <h1 className="text-white leading-[0.85] tracking-tighter">
              <span className="block text-6xl md:text-7xl font-black italic">Creative</span>
              <span className="block text-[#fbb034] text-6xl md:text-8xl font-black uppercase drop-shadow-xl">Business</span>
              <div className="flex items-center gap-2">
                <span className="text-white text-8xl md:text-9xl font-black uppercase">Solution</span>
              </div>
              <div className=" ml-113 flex items-center gap-2">
                 <span className="text-[#97dadf] font-['Permanent_Marker',cursive] text-5xl md:text-6xl -rotate-12 translate-y-4">Agency</span>
              </div>
            </h1>

            <p className=" text-gray-300 text-sm md:text-base max-w-sm leading-snug font-medium opacity-80">
              Best Digital Marketing Agency in Bhopal. We help business grow online with expert strategies in web development, SEO, social media, PPC, and More.</p>

            {/* BUTTON: REGISTER NOW */}
           <motion.button 
  whileHover="hover"
  whileTap={{ scale: 0.97 }}
  className="mt-8 flex items-center group cursor-pointer"
>
  {/* LEFT SIDE: TEXT BLOCK */}
  <motion.div 
    variants={{
      hover: { backgroundColor: "#f3f4f6" } // Subtle off-white on hover
    }}
    className="bg-[#fbb034] px-10 py-3.5 rounded-l-md text-black font-[900] uppercase tracking-tighter text-sm transition-colors duration-200 border-y-2 border-l-2 border-transparent group-hover:border-white/10"
  >
    Register Now
  </motion.div>

  {/* RIGHT SIDE: ICON BLOCK */}
  <div className="bg-white px-4 py-4 rounded-r-md flex items-center justify-center border-y-1 border-r-2 border-white group-hover:border-white/10 relative overflow-hidden h-[52px]">
   
    
    <motion.div
      variants={{
        initial: { x: 0 },
        hover: { x: 3 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Sharp, clean geometric arrow */}
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="black" 
        strokeWidth="4" 
        strokeLinecap="square"
      >
        <path d="M9 5l7 7-7 7"/>
      </svg>
    </motion.div>
  </div>
</motion.button>
          </motion.div>
        </div>

        {/* IMAGE AREA */}
        <div className="relative h-full flex items-end justify-center">
          {/* Handwritten Note + Arrow */}
          <div className="absolute top-15 left-0 z-40 text-white hidden xl:block">
            <p className="font-['Permanent_Marker',cursive] text-2xl rotate-[-5deg]">"Help you to grow your <br/> Business."</p>
            <div className="ml-20 mt-2">
               {/* Custom SVG Arrow to match the hand-drawn look */}
               <svg width="150" height="150" viewBox="0 0 60 60" fill="none" className="rotate-[160deg] opacity-70 -mt-12 ml-10">
                  <path d="M10 10C25 15 45 10 50 45M50 45L40 40M50 45L55 35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
               </svg>
            </div>
          </div>

         <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://www.pngarts.com/files/3/Man-Transparent-Background-PNG.png" 
            alt="Business Man"
            className="relative ml-40 z-30 h-[95%] w-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>

      {/* 5. BOTTOM GRID / DECORATION */}
      <div className="absolute bottom-8 left-12 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default NearExactHero;