import { useEffect, useState } from "react";
import profile from "../../data/profile.json";

const TYPING_PHRASES = [
  "a Full-Stack Developer",
  "a React + FastAPI builder",
  "an API designer",
  "a problem solver",
];

function useTypewriter(phrases, typeSpeed = 80, deleteSpeed = 40, pauseMs = 1600) {
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

export default function Hero() {
  const typed = useTypewriter(TYPING_PHRASES);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[#14b8a6]/10 blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] rounded-full bg-[#0ea5e9]/8 blur-[160px] animate-float-slower pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-[1800px] mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 xl:gap-16 items-stretch md:min-h-[500px]">

          {/* LEFT — text card */}
          <div className="relative w-full h-full">
            <div className="relative h-full rounded-2xl border border-[#334155] bg-[#1e293b] p-6 md:p-8 overflow-hidden">

              {/* Accent corner glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#14b8a6]/8 blur-[100px]" />

              <div className="relative flex flex-col justify-center gap-4 md:gap-5 h-full">

                {/* Name */}
                <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Hi, I'm Melkamu <span className="inline-block">👋</span>
                </p>

                {/* Typewriter */}
                <p className="text-sm md:text-base font-mono h-6 flex items-center -mt-1">
                  <span className="text-[#14b8a6]">I'm also&nbsp;</span>
                  <span className="text-white">{typed}</span>
                  <span className="text-[#14b8a6] animate-blink ml-0.5">▊</span>
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-[#334155]" />

                {/* Headline */}
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-[-0.02em] leading-[1.25]">
                  <span className="text-white">Building </span>
                  <span className="text-gradient">scalable web apps</span>
                  <span className="text-white"> with clean architecture and thoughtful UX.</span>
                </h1>

                {/* Tagline */}
                <p className="text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed">
                  I turn complex requirements into clean, scalable products —
                  designing APIs with FastAPI, building interfaces with React,
                  and shipping them end-to-end to the cloud.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3 pt-1 max-w-xl">
                  {[
                    "3+ years building production apps",
                    "React · FastAPI · PostgreSQL",
                    "REST API design & auth systems",
                    "Deployment on Vercel & Render",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs md:text-sm text-zinc-400"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#14b8a6] shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 bg-gradient-to-br from-[#14b8a6] to-[#0ea5e9] hover:opacity-90 text-[#0f172a] text-sm font-semibold px-5 md:px-6 py-2.5 rounded-lg transition-opacity outline-none focus:outline-none"
                  >
                    View my work
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 border border-[#334155] hover:border-zinc-500 hover:bg-[#0f172a] px-5 md:px-6 py-2.5 rounded-lg transition-colors outline-none focus:outline-none"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                    Email me
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT — photo card */}
          <div className="relative w-full h-full">
            <div className="relative h-full rounded-2xl border border-[#334155] bg-[#1e293b] overflow-hidden">

              {/* Accent corner glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#0ea5e9]/8 blur-[100px] z-10" />

              <img
                src={profile.avatar}
                alt={profile.name}
                width={720}
                height={720}
                className="block w-full h-full object-cover object-top select-none"
                draggable="false"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}