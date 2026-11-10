import { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  FileText,
  CheckCircle2
} from "lucide-react";
import profile from "../../data/profile.json";

const TYPING_PHRASES = [
  "Full-Stack Web Developer",
  "React & Tailwind CSS Builder",
  "FastAPI & Python Developer",
  "PostgreSQL Database Architect",
];

function useTypewriter(phrases, typeSpeed = 75, deleteSpeed = 35, pauseMs = 1800) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting
            ? current.substring(0, t.length - 1)
            : current.substring(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

export default function Hero({ onOpenResume }) {
  const typed = useTypewriter(TYPING_PHRASES);

  const highlights = [
    "3+ years building production web apps",
    "Full-Stack: React, FastAPI, PostgreSQL",
    "RESTful API design with JWT authentication",
    "Cloud deployments on Vercel & Render",
  ];

  return (
    <section
      id="top"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Mobile Profile Photo */}
          <div className="flex lg:hidden justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg border-2 border-white/80 dark:border-gray-800">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>

          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">{profile.name}</span>
            </h1>

            {/* Dynamic Role */}
            <div className="mt-2 text-base sm:text-xl font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center lg:justify-start gap-2 h-8">
              <span>I build web applications as</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{typed}</span>
              <span className="text-blue-600 dark:text-blue-400 animate-blink font-bold">|</span>
            </div>

            {/* Tagline */}
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Self-taught full-stack developer building real-estate and rental management platforms with React, FastAPI, and PostgreSQL. Focused on clean architecture, reliable APIs, and responsive interfaces.
            </p>

            {/* Highlights Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xs p-2 rounded-lg border border-slate-200/50 dark:border-gray-800/50"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Desktop Right Photo Card */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mx-auto max-w-[380px]">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full aspect-[4/5] object-cover object-top select-none"
                  loading="eager"
                />

                <div className="p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold text-sm">{profile.name}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Full-Stack Web Developer</p>
                  </div>
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-mono">
                    React · FastAPI
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
