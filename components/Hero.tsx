import React from 'react';
import profilePic from '../Images/pic2.jpeg';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 md:py-24 lg:py-32" id="home">
      {/* Boot Sequence */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-[10px] md:text-xs text-accent/60 mb-8 border border-accent/20 px-4 py-2 rounded bg-accent/5 backdrop-blur-sm"
      >
        <span className="text-emerald-500">➜</span> ASR_SYSTEMS_INIT: SUCCESS | STATUS: READY_FOR_DEPLOYMENT
      </motion.div>

      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full border-2 border-accent/30 p-1 bg-primary overflow-hidden">
          <img
            alt="Anurag Singh Rawat Profile"
            className="h-full w-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
            src={profilePic}
          />
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-slate-100 uppercase"
      >
        Build<span className="text-accent">.</span> Deploy<span className="text-accent">.</span><br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Scale.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl px-4"
      >
        <p className="text-sm md:text-lg text-slate-400 mb-10 leading-relaxed font-mono">
          <span className="text-slate-200 font-bold">// SYSTEM MISSION BRIEF:</span><br />
          Architecting high-performance digital ecosystems through scalable logic and defensive engineering. Specializing in Full-Stack Distributed Systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="group bg-accent text-white px-8 py-4 rounded-md font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2 hover:bg-orange-600 shadow-xl shadow-accent/20">
            [Initiate_Deployment_View]
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          <button className="bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 px-8 py-4 rounded-md font-black uppercase tracking-widest text-xs transition-all">
            [Pull_System_Resume]
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;