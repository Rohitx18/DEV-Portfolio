import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Systems from "./components/Systems";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";




// export default function App() {
//   return (
//     <div className="bg-black text-white">
//       <CursorGlow />
//       <Navbar />
//       <Hero />
//       <Systems />
//       <Projects />
//       <Experience />
//       <Contact />
//     </div>
//   );
// }

export default function App() {
    return (
      <div className="text-white">
        <Navbar />
        <Hero />
        <About />   {/* 👈 ADD HERE */}
        <Systems />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    );
  }