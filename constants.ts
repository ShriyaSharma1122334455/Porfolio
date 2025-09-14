
import React from 'react';
import type { Experience, Project, SkillCategory, Certification, Skill, Activity, OtherAccomplishment, Education } from './types';

// Updated Icon component to handle multiple children (e.g., paths)
const Icon = ({ children, viewBox = "0 0 24 24", className = "h-10 w-10" }: { children: React.ReactNode, viewBox?: string, className?: string }) => (
  React.createElement('svg', {
    viewBox,
    fill: "currentColor",
    className,
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    'aria-hidden': true,
  }, children)
);

// Updated skill icons with more accurate and recognizable SVG logos
const SKILL_ICONS: { [key: string]: string } = {
  // FIX: Pass children in props object for React.createElement to satisfy TypeScript compiler.
    Python:  "/assets/icons/Python.png",
    JavaScript: "/assets/icons/JS.png",
    TypeScript: "/assets/icons/Typescript-01.png",
    SQL: "/assets/icons/SQL.png",
    ReactJS: "/assets/icons/React.png",
    NodeJS  : "/assets/icons/Node.png",
    MongoDB: "/assets/icons/mongodb.png",
    Docker: "/assets/icons/docker.png",
    AWS: "/assets/icons/aws.png",
    Figma: "/assets/icons/figma.png",
    GitHub: "/assets/icons/github.png",
    Java: "/assets/icons/java.png",
    Generic: "/assets/icons/generic.png",
    Express: "/assets/icons/express.png",
    PyTest: "/assets/icons/pytest.png",
    PowerBI: "/assets/icons/PowerBI.png",
    ServiceNow: "/assets/icons/ServiceNow.png",
    Shadcnui: "/assets/icons/shadcn.png",
    Agile: "/assets/icons/agile.png",
    CICD: "/assets/icons/cicd.webp",
    PMP: "/assets/icons/pmp.png",
    Nextjs: "/assets/icons/next.png",
};

export const PROFILE_DATA = {
    name: "Shriya Sharma",
    title: "Software Engineer | Machine Learning Enthusiast",
    tagline: "Building innovative solutions with a blend of data intelligence and robust development.",
    email: "shriyasharma2152@hotmail.com",
    linkedin: "https://www.linkedin.com/in/shriya-sharma-example", // Placeholder
    github: "https://github.com/shriya-sharma-example", // Placeholder
};

export const ABOUT_DATA = {
    summary: "A passionate and driven Computer Science graduate student with a strong foundation in software development, data analytics, and machine learning. My journey from Information Technology to Computer Science has equipped me with a versatile skill set, and I am dedicated to applying my knowledge to create impactful, data-driven applications. I thrive in collaborative environments and am always eager to tackle new challenges and learn emerging technologies.",
};
export const EDUCATION_DATA: Education[] = [
    {
        institution: "New Jersey Institute of Technology",
        degree: "Master of Science in Computer Science",
        period: "Jan 2025 - May 2026",
        details: ["Relevant Coursework: Data Structures & Algorithms, Cloud Computing, Database Management, Machine Learning, Artificial Intelligence, Web Development and API Development, Software Design & Product Methodology, Java, Internet & Higher Layer Protocols", "GPA:3.5/4.0"]
    },
    {
        institution: "University of Mumbai",
        degree: "Bachelor of Engineering in Information Technology",
        period: "Aug 2018 - June 2022",
        details: ["Relevant Coursework: Operating Systems, hardware systems, software development, computer networks, database management, cloud computing, and the software development lifecycle (SDLC). Gained exposure to algorithms, data structures, operating systems, and emerging technologies, building a well-rounded understanding of both theoretical concepts and practical applications in IT.", "GPA: 3.5/4.0"]
    }
];

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: "Office Assistant",
        company: "New Jersey Institute of Technology",
        period: "May 2025 - Present",
        description: [
            "Managed and updated student housing databases (500+ records) in compliance with data privacy policies.",
            "Generated reports and spreadsheets in Excel and Google Sheets to track program participation and occupancy trends.",
            "Provided administrative support, creating digital forms, event materials, and communications."
        ]
    },
    {
        role: "System Engineer",
        company: "Tata Consultancy Services",
        period: "August 2022 - August 2024",
        description: [
            "Enhanced the Transport Management Tool (TMA) by developing Python scripts to automate SAP transport deployment.",
            "Supported monitoring for SAP landscapes, collaborating with senior developers on fixes.",
            "Contributed to backend tasks for Procure-to-Manage (PTM) and Procure-to-Pay (PTP) modules.",
            "Integrated deployment workflows with ServiceNow for smoother incident tracking."
        ]
    },
    {
        role: "Machine Learning Trainee",
        company: "Knowledge Solutions India",
        period: "June 2021 - August 2021",
        description: [
            "Analyzed healthcare datasets (10K+ records) to build predictive models for heart attack risk.",
            "Delivered actionable health risk insights through visualization and stakeholder-friendly reports.",
            "Enhanced understanding of trend correlation between comorbidities for improved decision-making."
        ]
    }
];

export const EXTRACURRICULAR_DATA: {
    njit: Activity[];
    other: OtherAccomplishment[];
} = {
    njit: [
        {
            title: "NJIT - GWICS (Graduate Women in Computer Science)",
            role: "President",
            description: [
                "Create and manage content for social media platforms to promote events and resources.",
                "Collaborate with student leaders and faculty to ensure wide campus outreach.",
                "Foster an engaging and inclusive digital presence for the GWICS community."
            ]
        },
        {
            title: "NJIT - Food Pantry",
            role: "Volunteer",
            description: [
                "Assist in daily operations including sorting, stocking, and distributing supplies.",
                "Provide friendly support and information to students accessing pantry services.",
                "Contribute to campus events and initiatives that support student wellness and inclusion."
            ]
        }
    ],
    other: [
        {
            category: "Leadership",
            items: [
                "Project Newsletter Lead – Tetra Pak: Created monthly updates for internal and client distribution.",
                "Organizer – INFOSEC Fest (TCS): Spearheaded a 4 day cybersecurity awareness fest for two years."
            ]
        },
        {
            category: "Awards",
            items: [
                "On-Spot Award for contributions during SAP system upgrades.",
                "Special Initiative Awards for leadership in internal events."
            ]
        }
    ]
};


const skills: { [key: string]: Skill } = {
  Python: { name: 'Python', icon: SKILL_ICONS.Python },
  JavaScript: { name: 'JavaScript', icon: SKILL_ICONS.JavaScript },
  Java: {name:'Java', icon: SKILL_ICONS.Java},
  TypeScript: { name: 'TypeScript', icon: SKILL_ICONS.TypeScript },
  SQL: { name: 'SQL', icon: SKILL_ICONS.SQL },
  ReactJS: { name: 'ReactJS', icon: SKILL_ICONS.ReactJS },
  NodeJS: { name: 'NodeJS', icon: SKILL_ICONS.NodeJS },
  Express: { name: 'Express.js', icon: SKILL_ICONS.Express },
  Nextjs: { name: 'Next.js', icon: SKILL_ICONS.Nextjs },
  MongoDB: { name: 'MongoDB', icon: SKILL_ICONS.MongoDB },
  Pandas: { name: 'Pandas', icon: SKILL_ICONS.Python },
  PyTest: { name: 'PyTest', icon: SKILL_ICONS.PyTest },
  Pylint: { name: 'Pylint', icon: SKILL_ICONS.Python },
  Figma: { name: 'Figma', icon: SKILL_ICONS.Figma },
  PowerBI: { name: 'PowerBI', icon: SKILL_ICONS.PowerBI },
  GitHub: { name: 'GitHub', icon: SKILL_ICONS.GitHub },
  AWS: { name: 'AWS', icon: SKILL_ICONS.AWS },
  CICD: { name: 'CI/CD', icon: SKILL_ICONS.CICD },
  DevOps: { name: 'DevOps', icon: SKILL_ICONS.Generic },
  Docker: { name: 'Docker', icon: SKILL_ICONS.Docker },
  Agile: { name: 'Agile/Scrum', icon: SKILL_ICONS.Agile },
  ServiceNow: { name: 'ServiceNow', icon: SKILL_ICONS.ServiceNow },
  Shadcnui: { name: 'Shadcnui', icon: SKILL_ICONS.Shadcnui },
  PMP: { name: 'PMP', icon: SKILL_ICONS.PMP },
};

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [skills.Python, skills.JavaScript, skills.TypeScript, skills.Java, skills.SQL]
    },
    {
        title: "Frameworks/Tools",
        skills: [skills.ReactJS, skills.NodeJS, skills.Express, skills.Nextjs, skills.MongoDB, skills.Pandas, skills.PyTest, skills.Pylint, skills.Figma, skills.PowerBI, skills.ServiceNow, skills.Shadcnui, skills.GitHub]
    },
    {
        title: "Technologies & Concepts",
        skills: [skills.AWS, skills.PMP,skills.Docker, skills.CICD, skills.DevOps, skills.Agile]
    }
];


export const PROJECTS_DATA: Project[] = [
    {
        title: "AI Voice Agent Interview Platform",
        // status: "In Progress",
        tech: ["Next.js", "React", "Node.js", "TypeScript", "VAPI", "OpenAI API"],
        description: [
            "Developing a real-time AI-powered voice assistant with speech-to-text/text-to-speech achieving >95% transcription accuracy.",
            "Built a responsive Next.js front-end, reducing page load time by 40% and enabling real-time agent status updates.",
            "Integrated low-latency APIs with Node.js and VAPI, achieving <300ms response time for smooth conversations.",
            "Leveraged OpenAI API to dynamically generate interview questions, improving interview flow efficiency by 30%."],
        githubUrl: "https://github.com/ShriyaSharma1122334455/AI-interview-Prep.git",
        liveUrl: "#",
  thumbnail: "./assets/AiInterview.png"
    },
    {
        title: "Money-Tracker Website",
        tech: ["MongoDB", "Express.js", "React", "Node.js (MERN)"],
        description: [
            "Built a full-stack expense tracker supporting 100+ concurrent users with secure authentication.",
            "Implemented transaction CRUD features, reducing manual tracking effort by 70%.",
            "Designed dynamic dashboards, helping users identify spending trends and cut costs by 15–20%.",
            "Optimized RESTful APIs for seamless integration, reducing backend response time by 35%."
        ],
        githubUrl: "https://github.com/ShriyaSharma1122334455/Money-Tracker.git",
        liveUrl: "#",
        thumbnail: "/assets/Money-tracker.png"
    },
    {
        title: "Adavnce Modular Python Calculator",
        tech: ["Python", "Pandas", "Pylint", "PyTest"],
        description: [
            "Developed a modular CLI-based calculator supporting 20+ operations including arithmetic, trigonometry, logarithms, statistics, and complex numbers.",
            "Implemented memory management (multi-slot store/recall) and calculation history tracking with Pandas, improving usability by 60%.",
            "Applied advanced design patterns (Facade, Command, Strategy, Singleton) and enforced code quality with Pylint, reducing linting issues by 85%.",
            "Achieved 90%+ test coverage with PyTest and integrated error handling & logging, decreasing runtime crashes by 70%."],
        githubUrl: "https://github.com/ShriyaSharma1122334455/Advance-Python-Calculator.git",
        liveUrl: "#",
        thumbnail: "/assets/python-calculator-operations-print-code.png"
    },
    {
        title: "E-Commerce Sales Analysis",
        // status: "In Progress",
        tech: [ "Power BI", "Excel", "SQL"],
        description: [
            "Analyzed $14.1M in YTD sales data across regions and categories, identifying 5.04% YoY growth and highlighting profit decline of 0.46%.",
            "Designed interactive Power BI dashboards tracking KPIs such as sales, profit, order quantity (157K orders, +15% YoY), and customer acquisition trends.",
            "Delivered insights on regional market share (LATAM 45.9%, Europe 43.4%) and category performance, uncovering areas of 20–26% decline (e.g., Cleats, Apparel).",
            "Enabled leadership to target underperforming product lines and regions, improving decision-making efficiency by 40%."
        ],
        githubUrl: "https://github.com/ShriyaSharma1122334455/E-Commerce_Sales_Analysis.git",
        liveUrl: "#",
        thumbnail: "/assets/Ecom.png"
    },
    {
        title: "HR Analytics Dashboard",
        // status: "In Progress",
        tech: ["Tableau", "Power BI", "Excel", "SQL"],
        description: [
            "Built an interactive dashboard analyzing 5 years of workforce data and tracking attrition trends.",
            "Conducted trend analysis that improved employee retention strategy, lowering attrition by 12%.",
            "Integrated Tableau with real-time sources, reducing manual reporting efforts by 40%.",
            "Delivered actionable HR insights that optimized hiring and saved 20+ analyst hours/month."],
        githubUrl: "https://github.com/ShriyaSharma1122334455/HR-AnalyticsDashboard.git",
        liveUrl: "#",
        thumbnail: "/assets/HR.png"
    },
     
];