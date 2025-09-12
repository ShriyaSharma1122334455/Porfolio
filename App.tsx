import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Extracurricular from "./components/Extracurricular";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 bg-gradient-to-br from-slate-1000 via-emerald-900 to-emerald-600">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 md:px-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
