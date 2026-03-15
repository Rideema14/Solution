import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const OrphicCompactReviews = () => {
  const reviews = [
    {
      name: "Sandeep Kumar",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "Orphic Solution truly lives up to its reputation as the best SEO Company In Bhopal. Exceptional services.",
      color: "#fbb034"
    },
    {
      name: "Anjali Sharma",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "Their meticulous SEO strategies and Ethical Practices set them apart from the rest. Invaluable dedication.",
      color: "#97dadf"
    },
    {
      name: "Rajesh Varma",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "As a Business Owner in Bhopal, finding the right SEO agency was paramount. Orphic exceeded expectations.",
      color: "#fbb034"
    }
  ];

  return (
    <section className="py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* COMPACT HEADER */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#97dadf] font-mono tracking-[0.4em] text-[9px] mb-3 uppercase"
          >
            [ Trusted by the Experts ]
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
            CUSTOMER <span className="text-[#fbb034]">REVIEWS</span>
          </h2>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#222] rounded-[2rem] overflow-hidden border border-white/5 shadow-xl group"
            >
              {/* COMPACT IMAGE HEADER */}
              <div className="relative h-44 overflow-hidden">
                <img src={rev.img} alt={rev.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent opacity-60" />
                <div className="absolute top-4 left-4 bg-[#1a1a1a]/80 p-2 rounded-xl backdrop-blur-sm">
                  <Quote size={16} fill={rev.color} stroke="none" />
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#fbb034" stroke="none" />
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden line-clamp-4 italic">
                  "{rev.text}"
                </p>

                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-white font-black uppercase text-xs tracking-tight">{rev.name}</div>
                  </div>
                  {/* GOOGLE BADGE */}
                  <div className="flex items-center gap-1 opacity-50">
                    <CheckCircle className="text-green-500" size={10} />
                    <span className="text-[8px] text-white font-bold uppercase tracking-widest">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrphicCompactReviews;