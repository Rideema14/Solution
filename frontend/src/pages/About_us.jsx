import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Rocket, Sparkles, ArrowDownRight, Zap, Globe } from 'lucide-react';

const AboutUsPage = () => {
  const team = [
    { name: "Sandeep", role: "Visionary", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500", rotation: "-4deg" },
    { name: "Anjali", role: "Creative Head", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", rotation: "2deg" },
    { name: "Rajesh", role: "SEO Architect", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500", rotation: "-2deg" },
    { name: "Priya", role: "Growth", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500", rotation: "5deg" }
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white selection:bg-[#fbb034] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- 1. HERO SECTION (ORGANIC & INTERESTING) --- */}
      <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center">
        {/* Background Organic Scribble */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
            <svg className="absolute top-20 right-[-10%] w-[600px] h-[600px] text-[#fbb034]" viewBox="0 0 200 200">
                <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,70.3,-59,78.8,-46.2C87.3,-33.4,92.1,-18.1,90.3,-3.1C88.5,11.8,80.1,26.4,70.5,39.1C60.9,51.8,50,62.6,37.3,71.1C24.5,79.6,10,85.8,-4.2,89.5C-18.4,93.2,-32.2,94.3,-44.7,89.1C-57.2,83.9,-68.3,72.4,-76.3,59.3C-84.3,46.1,-89.3,31.3,-91,16.2C-92.6,1.1,-90.9,-14.3,-84.9,-28.4C-78.9,-42.4,-68.6,-55,-55.8,-62.5C-43,-70,-27.7,-72.4,-13.2,-74.3C1.2,-76.1,15.7,-77.4,31.4,-78.9C36,-79.3,40.4,-80.1,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-3/5"
            >
              <h4 className="text-[#fbb034] font-black uppercase tracking-[0.3em] text-xs mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#fbb034]"></span> Our Digital Voyage
              </h4>
              <h1 className="text-[10vw] md:text-[7vw] font-serif leading-[0.9] tracking-tight mb-10">
                Crafting <span className="italic font-light text-[#97dadf]">Transformative</span> <br /> 
                Digital <span className="font-black italic underline decoration-[#fbb034]">Journeys.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl">
                "Our services are designed to drive results, and we're committed to partnering with you to achieve digital success."
              </p>
            </motion.div>

            {/* Right Side: Organic UI Composition */}
            <div className="w-full lg:w-2/5 relative h-[500px] flex items-center justify-center">
              
              {/* Main Organic Photo Mask */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-80 h-80 md:w-96 md:h-96 z-10"
              >
                <div className="absolute inset-0 bg-[#fbb034] rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="w-full h-full overflow-hidden border-2 border-white/20 shadow-2xl" 
                     style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" 
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="Creative process"
                  />
                </div>
              </motion.div>


            </div>
          </div>
        </div>
      </section>

      {/* --- 2. BENTO STRATEGY SECTION (REMAINS SAME) --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[3rem] bg-[#222] border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                alt="Orphic Team"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-[#1a1a1a] to-transparent">
                <h3 className="text-4xl font-black mb-4 uppercase italic tracking-tighter">Our Story</h3>
                <p className="text-gray-300 max-w-sm font-medium">
                  The date of our establishment serves as a constant reminder of our dedication to shaping a digital future filled with innovation.
                </p>
              </div>
            </div>

            <motion.div whileHover={{ y: -10 }} className="p-10 bg-[#fbb034] rounded-[3rem] text-black shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <Rocket size={40} />
                <Sparkles size={20} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase italic">Mission</h4>
              <p className="font-bold text-sm leading-relaxed">
                Elegantly simple: to guide and support you on your digital journey to the pinnacle of excellence.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-10 bg-[#97dadf] rounded-[3rem] text-black shadow-xl">
              <Eye size={40} className="mb-6" />
              <h4 className="text-2xl font-black mb-4 uppercase italic">Vision</h4>
              <p className="font-bold text-sm leading-relaxed">
                Crafting a transformative digital journey that leaves an indelible mark on your industry.
              </p>
            </motion.div>

            <div className="md:col-span-2 p-12 bg-[#262626] border border-white/10 rounded-[3rem] flex items-center gap-10 shadow-xl">
              <div className="hidden md:flex w-20 h-20 rounded-full bg-[#1a1a1a] items-center justify-center text-[#fbb034] border border-[#fbb034]/20 shadow-[0_0_15px_rgba(251,176,52,0.1)]">
                <Target size={36} />
              </div>
              <div>
                <h4 className="text-xl font-black mb-2 uppercase text-[#fbb034] italic tracking-widest">Our Strategy</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Grounded in our understanding of the digital realm's intricate nuances to tailor solutions that align perfectly with your unique goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE SQUAD (FAVORITE PART REFINED) --- */}
      <section className="py-40 relative overflow-hidden">
        <div className="text-center mb-32 relative z-10">
            <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none opacity-5 absolute inset-0 flex items-center justify-center -z-10 text-white">ORPHIC</h2>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              THE <span className="italic font-light text-[#fbb034]">SQUAD.</span>
            </h2>
            <p className="font-bold uppercase tracking-[0.5em] text-[10px] mt-6 text-[#97dadf]">Innovation driven by humans</p>
        </div>

        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: 0 }}
              style={{ rotate: member.rotation }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-black px-4 py-1 rounded-full text-[10px] font-black text-black uppercase shadow-xl whitespace-nowrap">
                {member.role}
              </div>
              <div className="w-64 h-80 bg-white p-3 border-4 border-black shadow-[15px_15px_0px_rgba(0,0,0,1)] group-hover:shadow-[20px_20px_0px_#fbb034] transition-all duration-500 overflow-hidden">
                <img src={member.img} className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
                <div className="absolute bottom-6 left-0 w-full text-center">
                    <h4 className="text-xl font-black uppercase tracking-tighter bg-black text-white inline-block px-5 py-1 italic">
                      {member.name}
                    </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;