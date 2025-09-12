import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXTRACURRICULAR_DATA } from '../constants';

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Extracurricular: React.FC = () => {
    return (
        <SectionWrapper id="extracurricular" title="Leadership & Extracurriculars">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* NJIT Activities */}
                <div className="space-y-8">
                    {EXTRACURRICULAR_DATA.njit.map((activity, index) => (
                        <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 transform hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-100">{activity.title}</h3>
                            <p className="text-md font-semibold text-emerald-400 mb-3">{activity.role}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                {activity.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Other Accomplishments */}
                <div className="space-y-8">
                    {EXTRACURRICULAR_DATA.other.map((accomplishment, index) => (
                        <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 transform hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-xl font-bold text-emerald-400 mb-4">{accomplishment.category}</h3>
                            <ul className="space-y-3">
                                {accomplishment.items.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 pt-1">
                                            <StarIcon />
                                        </div>
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Extracurricular;
