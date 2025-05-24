import React from "react";
import Introduction from "../components/home/Introduction.jsx";
import About from "../components/home/About.jsx";
import Skills from "../components/home/Skills.jsx";
import WorkExperience from "../components/home/WorkExperience.jsx";
import Projects from "../components/home/Projects.jsx";
import ContactMe from "../components/home/ContactMe.jsx";

function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <ContactMe />
    </>
  );
}

export default Home;
