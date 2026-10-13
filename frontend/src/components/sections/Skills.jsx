import { useEffect, useRef, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import skills from "../../data/skills.json";

export default function Skills() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative max-w-[1800px] mx-auto px-6 py-12 border-t border-[#334155]"
    >
      <SectionHeading title="Technical Skills" centered />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-14 xl:gap-16 items-stretch md:min-h-[400px]">
        {Object.entries(skills).map(([category, data], i) => (
          <div
            key={category}
            className="group flex flex-col rounded-2xl border border-[#334155] bg-[#1e293b] p-5 lg:p-6 min-h-[300px] hover:border-[#14b8a6]/40 transition-all duration-500 hover:-translate-y-1"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 90}ms`,
              transitionProperty: "opacity, transform, border-color",
              transitionDuration: "600ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {category}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 font-mono">
                  {data.items.length} technologies
                </p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md border text-[#14b8a6] border-[#14b8a6]/30 bg-[#14b8a6]/5">
                {data.level}
              </span>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono">
                  Proficiency
                </span>
                <span className="text-xs font-mono text-zinc-300">
                  {data.proficiency}%
                </span>
              </div>
              <div className="relative w-full h-1.5 bg-[#0f172a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] skill-bar-fill"
                  style={{
                    width: visible ? `${data.proficiency}%` : "0%",
                    transitionDelay: `${300 + i * 120}ms`,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {data.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-zinc-400 border border-[#334155] bg-[#0f172a] px-2.5 py-1 rounded-md hover:border-[#14b8a6]/50 hover:text-zinc-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}