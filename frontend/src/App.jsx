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
      {/* Background layers — fixed behind all content */}
      <div className="page-bg" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      {/* Foreground content */}
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