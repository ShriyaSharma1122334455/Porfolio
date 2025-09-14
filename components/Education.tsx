import React from "react";
import SectionWrapper from "./SectionWrapper";
import { EDUCATION_DATA } from "../constants";

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 space-y-12">
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-emerald-400 ring-8 ring-slate-50 dark:ring-slate-900"></div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </p>
                </div>
                <h4 className="text-lg font-semibold text-emerald-500 dark:text-emerald-400 mb-3">
                  {edu.degree}
                </h4>
                {edu.details && (
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {edu.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
