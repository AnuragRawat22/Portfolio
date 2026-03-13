import React from 'react';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, isActive }) => (
  <a href={href} className={`flex flex-col items-center gap-1 ${isActive ? 'text-accent' : 'text-slate-500'}`}>
    <span className="material-symbols-outlined">{icon}</span>
    <span className="text-[10px] font-bold">{label}</span>
  </a>
);

const MobileNav: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 glass-nav border-t border-slate-800/50 px-4 py-2 flex justify-around items-center">
      <NavItem icon="terminal" label="Systems" href="#home" isActive={true} />
      <NavItem icon="settings_input_component" label="Overview" href="#about" />
      <NavItem icon="layers" label="Stack" href="#skills" />
      <NavItem icon="rocket_launch" label="Deployments" href="#projects" />
    </div>
  );
};

export default MobileNav;