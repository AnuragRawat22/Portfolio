import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-accent material-symbols-outlined text-2xl">terminal</span>
            <span className="font-black tracking-tighter text-xl text-slate-100 uppercase">
              ASR<span className="text-accent"> SYSTEMS</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-[10px] font-bold uppercase tracking-tighter text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Status: <span className="text-emerald-500 ml-1">Operational</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-slate-100 transition-colors">Overview</a>
          <a href="#skills" className="hover:text-slate-100 transition-colors">Core Stack</a>
          <a href="#experience" className="hover:text-slate-100 transition-colors">Operational History</a>
          <a href="#projects" className="hover:text-slate-100 transition-colors">Live Deployments</a>
        </div>

        <a
          href="mailto:anuragrawat2123@gmail.com"
          className="bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-md text-[11px] font-black uppercase tracking-widest transition-all transform active:scale-95 shadow-lg shadow-accent/20"
        >
          [Initiate_Contact]
        </a>
      </div>
    </nav>
  );
};

export default Navbar;