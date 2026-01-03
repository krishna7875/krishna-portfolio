import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SEO from "./components/SEO";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <SEO />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
