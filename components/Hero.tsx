import React from "react";
import { PROFILE_DATA } from "../constants";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-row gap-10 min-h-screen flex items-center justify-center text-center -mt-12 overflow-hidden p-4"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradient 15s ease infinite",
        }}
      ></div>
      <style>
        {`
    @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    `}
      </style>
      <div className="z-10 w-full max-w-4xl animate-float  ">
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl space-y-6">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-100 tracking-tight opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {PROFILE_DATA.name}
          </h1>
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight animated-gradient-text opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            {PROFILE_DATA.title}
          </h2>
          <p
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            {PROFILE_DATA.tagline}
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Shriya_Sharma_Resume.pdf"
              className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
