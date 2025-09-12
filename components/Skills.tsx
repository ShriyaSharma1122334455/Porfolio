import React from "react";
import SectionWrapper from "./SectionWrapper";
import { SKILLS_DATA } from "../constants";

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="max-w-6xl mx-auto space-y-12">
        {SKILLS_DATA.map((category) => (
          <div
            key={category.title}
            className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center gap-2 text-center w-28 h-28 bg-slate-800 p-4 rounded-full transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
                  // style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-25 w-25"
                    />
                  </div>
                  <span className="text-slate-300 text-sm font-medium transition-colors duration-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
