import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary/80 border-t border-slate-800 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              System Status: Fully Operational
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-100 italic">Deployment <span className="text-accent">Ready</span>.</h2>
            <p className="text-slate-500 text-xs font-mono mt-2">// Available for full-cycle engineering integrations.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-accent transition-all group">
              <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
            <a href="https://github.com/AnuragRawat22" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-accent transition-all group">
              <svg className="w-6 h-6 fill-slate-300 group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
            </a>
            <a href="mailto:anuragrawat2123@gmail.com" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-accent transition-all group">
              <span className="material-symbols-outlined text-slate-300 group-hover:text-white">mail</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © 2024 Anurag Singh Rawat. Built with precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;