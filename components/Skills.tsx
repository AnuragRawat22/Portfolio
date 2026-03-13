import React from 'react';

interface SkillCategoryProps {
  icon: string;
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills }) => (
  <div className="bg-primary/40 p-6 rounded-2xl border border-slate-800 hover:border-accent/30 transition-colors">
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-100">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-slate-800/50" id="skills">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
          <span className="material-symbols-outlined text-sm">layers</span> Core Stack
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-100">Technical <span className="text-accent">Infrastructure</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <SkillCategory
          icon="language"
          title="Languages"
          skills={['Java', 'Python', 'JavaScript', 'SQL']}
        />
        <SkillCategory
          icon="layers"
          title="Frameworks"
          skills={['React.js', 'Node.js', 'Spring Boot', 'Tailwind CSS']}
        />
        <SkillCategory
          icon="build"
          title="Tools"
          skills={['Git', 'GitHub', 'Framer', 'Docker']}
        />
      </div>
    </section>
  );
};

export default Skills;