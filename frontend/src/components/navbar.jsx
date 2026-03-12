import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Linkedin, Twitter } from 'lucide-react';

// Make sure your white logo is in this path
import logoImg from '../assets/image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Training', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-5 flex justify-between items-center bg-transparent">
        {/* LEFT: COMPANY LOGO */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img 
            src={logoImg} 
            alt="Orphic Solution" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </motion.div>

        {/* RIGHT: ANIMATED HAMBURGER */}
        <button 
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-[#fbb034] transition-colors p-2 group"
        >
          <div className="space-y-2">
            <motion.div className="w-10 h-0.5 bg-white group-hover:bg-[#fbb034] transition-colors"></motion.div>
            <motion.div className="w-10 h-0.5 bg-white group-hover:bg-[#fbb034] transition-colors"></motion.div>
         
          </div>
        </button>
      </nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[500px] z-[120] bg-[#121212] flex flex-col shadow-2xl"
            >
              {/* HEADER INSIDE MENU */}
              <div className="flex justify-between items-center p-8 border-b border-white/5">
                <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase font-bold">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#fbb034] transition-all hover:rotate-90"
                >
                  <X size={32} strokeWidth={1.5} />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="flex flex-col justify-center px-10 py-12 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    className="relative group overflow-hidden"
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-block text-4xl md:text-6xl font-black text-white uppercase tracking-tighter transition-transform group-hover:translate-x-4 duration-300"
                    >
                      <span className="text-[#fbb034] text-xs font-mono mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        0{index + 1}
                      </span>
                      <span className="group-hover:text-[#fbb034] transition-colors italic">
                        {item.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* FOOTER INSIDE MENU */}
              <div className="mt-auto p-10 bg-white/[0.02] border-t border-white/5">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[10px] tracking-widest text-gray-600 uppercase mb-2">Get in touch</p>
                    <p className="text-white font-medium">hello@orphicsolution.com</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <Instagram size={20} className="text-gray-500 hover:text-[#fbb034] cursor-pointer" />
                      <Linkedin size={20} className="text-gray-500 hover:text-[#fbb034] cursor-pointer" />
                      <Twitter size={20} className="text-gray-500 hover:text-[#fbb034] cursor-pointer" />
                    </div>
                    <p className="text-[10px] text-gray-600 tracking-tighter uppercase">Bhopal, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;