import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Projects from "./components/Projects";
import SoftSkills from "./components/SoftSkills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Intro />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <SoftSkills />
        <Journey />
        <Contact />
      </main>
    </>
  );
}

export default App;
