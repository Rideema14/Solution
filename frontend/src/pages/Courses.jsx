import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Palette, MonitorPlay, Award, BookOpen, Settings, CheckCircle2, ArrowRight } from 'lucide-react';

const AcademyPage = () => {
  const courses = [
    { title: "Front-end Development", level: "UI/UX & Design", desc: "HTML, CSS, JavaScript, and creating responsive engagement.", icon: <Palette size={32}/> },
    { title: "Back-end Development", level: "Server-side", desc: "Server technologies, database management, and PHP.", icon: <Settings size={32}/> },
    { title: "Full Stack Development", level: "Complete Web", desc: "End-to-end applications from front-end to databases.", icon: <Code2 size={32}/> },
    { title: "Advanced WordPress", level: "CMS Mastery", desc: "Build and manage professional sites with WordPress.", icon: <Globe size={32}/> }
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white font-sans selection:bg-[#fbb034] selection:text-black pt-20">
      
      {/* --- HERO SECTION (CONTENT-DRIVEN) --- */}
      <section className="relative pt-24 pb-20 px-6 border-b-8 border-black overflow-hidden">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-block bg-[#fbb034] text-black px-6 py-1 mb-8 font-black uppercase text-xs italic border-2 border-black shadow-[4px_4px_0px_#fff]">
              Best Training Institute In Bhopal
            </div>
            <h1 className="text-[10vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter mb-10">
              You Came To The <br />
              <span className="italic font-light text-[#97dadf]">Right Place.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-bold max-w-2xl border-l-8 border-[#fbb034] pl-6">
              "Led by seasoned professionals, our courses promise a transformative learning experience, combining theoretical knowledge with live project immersion."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THE THREE PILLARS (PRICRIC STYLE) --- */}
      <section className="py-24 px-6 bg-white text-black border-b-8 border-black">
        <div className="container mx-auto">
          <div className="text-center mb-20">
             <p className="text-[#fbb034] font-black uppercase tracking-[0.4em] text-xs mb-4">THERE IS MORE THAN WHAT YOU THINK</p>
             <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">HOW WE <span className="text-[#97dadf] stroke-black" style={{ WebkitTextStroke: '2px black' }}>SCALE</span> YOU.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {[
              { title: "Training", label: "The Best Offline Training", desc: "Explore local bootcamps for hands-on, offline training in HTML, CSS, JavaScript, WordPress, PHP and more.", icon: <BookOpen />, color: "#fbb034" },
              { title: "Live Projects", label: "Practicing On Live Projects", desc: "Gain practical experience by working on real scenarios from our esteemed clients to build a strong portfolio.", icon: <MonitorPlay />, color: "#97dadf" },
              { title: "Certification", label: "ISO Certified Programs", desc: "Earn a valid certification to enhance your career prospects. Our programs are ISO accredited.", icon: <Award />, color: "#fff" }
            ].map((step, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="relative bg-[#eee] border-4 border-black p-10 shadow-[10px_10px_0px_#000] flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-4 border-black bg-white flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000]">
                  {step.icon}
                </div>
                <h4 className="text-[#e67e22] font-black uppercase text-xs tracking-widest mb-2">{step.title}</h4>
                <h3 className="text-2xl font-black uppercase mb-4 italic leading-tight">{step.label}</h3>
                <p className="font-bold text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ALL COURSES (SOLID GRID) --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#fbb034]">All Courses.</h2>
            <p className="font-black text-gray-500 uppercase tracking-widest text-xs">Meticulously designed for your education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-[#222] border-4 border-black p-8 group hover:bg-[#fbb034] transition-colors duration-300">
                <div className="text-[#fbb034] group-hover:text-black mb-6 transition-colors">{course.icon}</div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-[#97dadf] group-hover:text-black mb-2">{course.level}</h5>
                <h4 className="text-2xl font-black uppercase italic mb-4 leading-tight group-hover:text-black">{course.title}</h4>
                <p className="text-gray-400 group-hover:text-black font-bold text-xs mb-8 transition-colors">{course.desc}</p>
                <button className="bg-white text-black font-black uppercase text-[10px] py-2 px-4 border-2 border-black flex items-center gap-2 group-hover:bg-black group-hover:text-white transition-colors">
                  Contact Us <ArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FACULTY CARD (CONTENT-VERIFIED) --- */}
      <section className="py-24 px-6 bg-[#97dadf] border-y-8 border-black text-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative inline-block">
               <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
               <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600" className="relative z-10 w-full h-[400px] object-cover border-4 border-black grayscale" alt="Faculty" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="font-black uppercase tracking-widest text-sm mb-4">Meet The Instructor</h4>
            <h2 className="text-6xl font-black uppercase italic leading-none mb-6">Mr. Shivam <br /> Beldar</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-black text-white p-4 border-2 border-black">
                <p className="text-[10px] uppercase font-black text-gray-400">Duration</p>
                <p className="font-black italic uppercase">30 Days</p>
              </div>
              <div className="bg-white p-4 border-2 border-black">
                <p className="text-[10px] uppercase font-black text-gray-400">Total Lessons</p>
                <p className="font-black italic uppercase">15-20 Sessions</p>
              </div>
            </div>
            <p className="font-bold leading-relaxed mb-8">
              "Gaining access to a faculty dedicated to your success. Our instructors guide you through real-world projects, ensuring you navigate the challenges of the industry."
            </p>
            <button className="px-10 py-4 bg-black text-white font-black uppercase italic shadow-[8px_8px_0px_#fff] border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Register Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AcademyPage;