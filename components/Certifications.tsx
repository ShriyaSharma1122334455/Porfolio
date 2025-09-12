
import React from 'react';
import SectionWrapper from './SectionWrapper';
import type { Certification } from '../types';

const CheckBadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CERTIFICATIONS_DATA: Certification[] = [
    { name: "Google Data Analytics", icon: <CheckBadgeIcon /> },
    { name: "Google Project Management", icon: <CheckBadgeIcon /> },
    { name: "AWS- Introduction to Gen-AI", icon: <CheckBadgeIcon /> },
    { name: "AWS Academy-Cloud Foundation", icon: <CheckBadgeIcon /> },
];

const Certifications: React.FC = () => {
    return (
        <SectionWrapper id="certifications" title="Certifications">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS_DATA.map((cert) => (
                    <div key={cert.name} className="bg-slate-800/50 p-5 rounded-lg flex items-center space-x-4 shadow-lg border border-slate-700 transition-transform duration-300 hover:scale-105">
                        {cert.icon}
                        <p className="text-lg font-medium text-slate-200">{cert.name}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
