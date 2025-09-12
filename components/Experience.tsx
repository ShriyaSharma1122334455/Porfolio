import React from "react";
import SectionWrapper from "./SectionWrapper";
import { EXPERIENCE_DATA } from "../constants";

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto space-y-5">
        <div className="relative border-l-2 border-slate-700 pl-8 space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-emerald-400 ring-8 ring-slate-900"></div>
              <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-100">
                    {job.role}
                  </h3>
                  <p className="text-sm text-slate-400">{job.period}</p>
                </div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                  {job.company}
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
