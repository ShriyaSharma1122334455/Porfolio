
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, className = '' }) => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className={`py-20 md:py-28 transition-all duration-700 ease-out ${animationClasses} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100">
        {title}
        <span className="block h-1 w-20 bg-emerald-400 mx-auto mt-3 rounded"></span>
      </h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
