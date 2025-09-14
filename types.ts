export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  status?: string;
  tech: string[];
  description: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
}

export interface Skill {
  name: string;
  icon: string;
}
export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
    name: string;
    icon: JSX.Element;
}

export interface Activity {
  title: string;
  role: string;
  description: string[];
}

export interface OtherAccomplishment {
  category: string;
  items: string[];
}