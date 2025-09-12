import React from "react";
import SectionWrapper from "./SectionWrapper";
import { ABOUT_DATA } from "../constants";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-4xl mx-auto text-center border-none">
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed ">
          {ABOUT_DATA.summary}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
