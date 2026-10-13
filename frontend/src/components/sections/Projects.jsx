import { useEffect, useRef, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import projects from "../../data/projects.json";

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative max-w-[1800px] mx-auto px-6 py-12 border-t border-[#334155]"
    >
      <SectionHeading title="Featured Projects" centered />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-14 xl:gap-16 items-stretch md:min-h-[400px]">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="group relative flex flex-col rounded-2xl border border-[#334155] bg-[#1e293b] overflow-hidden hover:border-[#14b8a6]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(20,184,166,0.35)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transitionDelay: `${i * 100}ms`,
              transitionProperty: "opacity, transform, border-color, box-shadow",
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Image */}
            <a
              href={p.demo || p.github}
              target="_blank"
              rel="noreferrer"
              className="block aspect-[16/10] overflow-hidden bg-[#0f172a] relative"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover label */}
              <div className="absolute inset-0 flex items-end p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-semibold text-white inline-flex items-center gap-2 bg-[#14b8a6]/15 border border-[#14b8a6]/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {p.demo ? "View live demo" : "Explore on GitHub"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 lg:p-6">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight group-hover:text-[#14b8a6] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                {p.tech.slice(0, 4).map((t, j) => (
                  <span
                    key={t}
                    className="text-[11px] text-zinc-400 border border-[#334155] bg-[#0f172a] px-2 py-0.5 rounded transition-colors group-hover:border-[#14b8a6]/40 group-hover:text-zinc-300"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(8px)",
                      transition:
                        "opacity 500ms ease-out, transform 500ms ease-out, border-color 300ms, color 300ms",
                      transitionDelay: `${500 + i * 100 + j * 50}ms`,
                    }}
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="text-[11px] text-zinc-500 px-1 py-0.5">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#334155] mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Code
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f172a] bg-gradient-to-br from-[#14b8a6] to-[#0ea5e9] hover:opacity-90 px-3 py-1.5 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] overflow-hidden group/demo"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] opacity-0 group-hover/demo:opacity-100 transition-opacity duration-500" />
                    <span className="relative inline-flex items-center gap-1.5">
                      Live Demo
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Subtle glow */}
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#14b8a6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </article>
        ))}
      </div>
    </section>
  );
}