import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-slate-800/50" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">settings_input_component</span> System Overview
          </div>

          <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-slate-100">
            Engineered for <span className="text-accent">Efficiency</span>, Scaled for <span className="text-accent">Impact.</span>
          </h2>

          <p className="text-slate-400 leading-relaxed">
            From hospital management systems to interactive chatbots, I focus on code efficiency and user-centric design. I bridge the gap between complex backend architectures and intuitive frontend experiences.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-primary/40 border border-slate-800 rounded-xl">
              <div className="text-accent font-bold text-2xl">3+</div>
              <div className="text-xs text-slate-500 uppercase font-bold">Years Coding</div>
            </div>
            <div className="p-4 bg-primary/40 border border-slate-800 rounded-xl">
              <div className="text-accent font-bold text-2xl">10+</div>
              <div className="text-xs text-slate-500 uppercase font-bold">Projects Done</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-card-dark to-primary p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-9xl text-slate-500">code</span>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            <code className="block text-sm text-slate-300 leading-relaxed font-mono">
              <span className="text-accent">const</span> profile = {'{'}<br />
              &nbsp;&nbsp;name: <span className="text-orange-300">"Anurag Singh Rawat"</span>,<br />
              &nbsp;&nbsp;role: <span className="text-orange-300">"Full-Stack Dev"</span>,<br />
              &nbsp;&nbsp;focus: [<span className="text-orange-300">"Scalability"</span>, <span className="text-orange-300">"UX"</span>],<br />
              &nbsp;&nbsp;loves: <span className="text-orange-300">"Clean Code"</span><br />
              {'}'};
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;