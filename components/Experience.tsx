import React from 'react';

interface JobProps {
  date: string;
  title: string;
  company: string;
  points: string[];
  isLast?: boolean;
}

const Job: React.FC<JobProps> = ({ date, title, company, points, isLast }) => (
  <div className="relative pl-8 md:pl-0">
    {/* Line */}
    <div className="hidden md:block absolute left-[-4px] top-0 bottom-0 w-[2px] bg-slate-800"></div>

    <div className="flex flex-col md:flex-row gap-4 md:gap-12 relative">
      <div className="md:w-1/4 text-slate-500 font-bold text-sm uppercase tracking-widest pt-1 font-mono">
        {date}
      </div>

      <div className="md:w-3/4">
        {/* Dot */}
        <div className={`absolute left-[-36px] md:left-[-12px] top-1 w-6 h-6 rounded-full bg-primary border-4 ${isLast ? 'border-slate-700' : 'border-accent'} z-10`}></div>

        <h3 className="text-xl font-black text-slate-100 mb-1 uppercase tracking-tighter">{title}</h3>
        <div className="text-accent font-bold mb-4 uppercase text-xs tracking-widest">{company}</div>

        <ul className="space-y-3 text-slate-400">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="material-symbols-outlined text-accent text-sm mt-1">terminal</span>
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-slate-800/50" id="experience">
      <div className="flex flex-col items-center md:items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
          <span className="material-symbols-outlined text-sm">history_edu</span> Operational History
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-100">System <span className="text-accent">Evolution</span></h2>
      </div>

      <div className="space-y-12">
        <Job
          date="Jan 2023 — Jun 2023"
          title="IT Intern"
          company="Paras Hospital"
          points={[
            "Optimized hospital IT workflows, reducing internal support ticket resolution time by 15%.",
            "Assisted in maintaining robust database systems for patient records ensuring 99.9% uptime."
          ]}
        />

        <Job
          date="Aug 2022 — Dec 2022"
          title="Social Media Manager"
          company="Independent Housing Inc."
          points={[
            "Developed a comprehensive digital strategy that increased organic engagement by 40%.",
            "Created data-driven content calendars focused on user-centric community growth."
          ]}
          isLast={true}
        />
      </div>
    </section>
  );
};

export default Experience;