import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, DollarSign, FileText, Send } from 'lucide-react';

const OrphicPremiumFAQ = () => {
  const faqs = [
    {
      question: "WHAT SERVICES DO WE PROVIDE IN OUR DIGITAL MARKETING COMPANY?",
      answer: "Orphic Solution is a digital marketing company in Bhopal. We provide services in digital marketing, website development, social media marketing, SEO, PPC, content writing & more.",
      icon: <MessageCircle size={22} />,
      color: "#fbb034", 
      rotation: -1.5
    },
    {
      question: "WHERE IS OUR OFFICE LOCATED?",
      answer: "The office of our digital marketing company Orphic Solution is located in PLOT NO. 178, Chitra Complex, F-13A, ZONE-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011, India.",
      icon: <MapPin size={22} />,
      color: "#97dadf", 
      rotation: 2
    },
    {
      question: "WHAT CHARGES DO WE TAKE FROM CLIENTS?",
      answer: `Our charges depend on the services. Furthermore, we follow a flexible pricing policy. Clients get the multiple payment options as follows:
      A) Payment is on an monthly basis. 
      B) The project charges depends on the requirements.
      C) We charge 50% advance payment from new clients on the monthly system.`,
      icon: <DollarSign size={22} />,
      color: "#fbb034",
      rotation: -1
    },
    {
      question: "DO YOU PROVIDE A WEEKLY OR MONTHLY REPORT TO THE CLIENT?",
      answer: "We prepare the project reports based on the client's requirements. It can be weekly or monthly.",
      icon: <FileText size={22} />,
      color: "#97dadf",
      rotation: 1.5
    },
    {
      question: "HOW CAN I GET IN TOUCH WITH YOU FOR MORE INFORMATION?",
      answer: "You can contact us via our phone: 099937 72685 or visit us during office hours: Mon-Sat: 10:30AM - 6:30PM.",
      icon: <Send size={22} />,
      color: "#fbb034",
      rotation: -2
    }
  ];

  return (
    <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      
      {/* --- ANIMATED SVG BACKGROUND LINES --- */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M-100 300C200 150 400 600 800 400C1200 200 1500 500 1600 300" 
            stroke="#fbb034" strokeWidth="1" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
            d="M-100 500C300 600 600 300 900 600C1200 900 1500 500 1600 700" 
            stroke="#97dadf" strokeWidth="1" 
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* REFINED HERO HEADING */}
        <div className="text-center mb-24">
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[6vw] md:text-[4.5vw] font-black uppercase tracking-tighter leading-none"
            >
              <span className="text-white italic">FREQUENTLY</span>
              <span className="text-transparent mx-3" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>ASKED</span>
              <span className="text-[#fbb034]">QUESTIONS</span>
            </motion.h2>
          </div>
        </div>

        {/* TILTED GRID (Optimized Sizes) */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.01, rotate: 0 }}
              style={{ rotate: faq.rotation }}
              className="flex flex-col md:flex-row items-center gap-0 group cursor-default"
            >
              {/* COMPACT CIRCLE ICON */}
              <div 
                className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full flex items-center justify-center text-black shadow-xl z-20 transition-all group-hover:rotate-[360deg] duration-1000"
                style={{ backgroundColor: faq.color }}
              >
                {faq.icon}
              </div>

              {/* REFINED DARK CARD */}
              <div 
                className="flex-1 -mt-4 md:-mt-0 md:-ml-6 bg-[#222] border border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl transition-all group-hover:bg-[#282828] group-hover:border-white/10"
                style={{ borderLeft: `3px solid ${faq.color}` }}
              >
                <h3 
                  className="text-lg md:text-xl font-black mb-3 uppercase tracking-tight italic"
                  style={{ color: faq.color }}
                >
                  {faq.question}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrphicPremiumFAQ;