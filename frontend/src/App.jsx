import { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ResumeModal from "./components/common/ResumeModal";
import { ThemeProvider } from "./context/ThemeContext";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <div className="site-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-200">
        {/* Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content */}
        <main className="flex-1">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About onOpenResume={() => setResumeOpen(true)} />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setResumeOpen(true)} />

        {/* Resume Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

        {/* Floating Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-30 p-2.5 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </ThemeProvider>
  );
}
