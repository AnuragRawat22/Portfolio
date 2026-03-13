import React from 'react';
import heartBrainImg from '../Images/heartbrain.jpg';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, tags, github, liveLink }) => {
  const downloadUrl = github ? `${github}/archive/refs/heads/main.zip` : null;

  return (
    <div className="group bg-primary/40 rounded-2xl border border-slate-800 overflow-hidden hover:border-accent/40 transition-all flex flex-col h-full">
      <div className="aspect-video bg-slate-900 relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-accent/20 text-accent text-[10px] font-bold uppercase rounded border border-accent/30">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors text-slate-100">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="mt-auto pt-4">
          {downloadUrl ? (
            <a
              href={downloadUrl}
              className="flex items-center justify-center gap-2 w-full py-3 bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/20 rounded-xl font-bold text-sm transition-all"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download from GitHub
            </a>
          ) : (
            <div className="text-center text-slate-500 text-xs italic">
              Source code coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const githubBase = "https://github.com/AnuragRawat22";

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/50" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined text-sm">rocket_launch</span> Live Deployments
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-100 italic">Production <span className="text-accent">Showcase</span></h2>
        </div>
        <a href={githubBase} target="_blank" rel="noopener noreferrer" className="text-accent text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
          View_Terminal_Hub <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          imageSrc="https://images.unsplash.com/photo-1556742049-df7a19e5d4cb?auto=format&fit=crop&q=80&w=800"
          title="Momo Sushi Platform"
          description="A high-performance e-commerce solution for a sushi restaurant featuring seamless ordering and real-time order tracking. (Senior Capstone Project)"
          tags={['Next.js', 'Stripe', 'Tailwind']}
          github={`${githubBase}/481-Group-1-Project`}
        />
        <ProjectCard
          imageSrc={heartBrainImg}
          title="Health Symptom Diagnosis"
          description="An intelligent application designed to help users identify potential medical conditions based on symptom inputs, providing immediate guidance."
          tags={['React', 'Node.js', 'API']}
          github={`${githubBase}/HealthApp`}
        />
        <ProjectCard
          imageSrc="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800"
          title="CineSwipe Discovery"
          description="A movie selection app that makes movie nights easier with a streamlined discovery interface and personalized recommendations."
          tags={['React', 'TMDB API', 'CSS']}
          github={`${githubBase}/MovieApp`}
        />
        <ProjectCard
          imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
          title="Subscription Finance Tracker"
          description="A dedicated finance application designed to help users monitor and manage their recurring subscriptions and monthly expenses."
          tags={['React', 'Finance', 'Dashboard']}
          github={`${githubBase}/financeapp`}
        />
        <ProjectCard
          imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
          title="GPA Calculator"
          description="A precise academic tool for students to calculate and track their GPA accurately across multiple semesters."
          tags={['JavaScript', 'HTML', 'CSS']}
          github={`${githubBase}/GpaCalculator`}
        />
      </div>
    </section>
  );
};

export default Projects;