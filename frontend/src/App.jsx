import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}