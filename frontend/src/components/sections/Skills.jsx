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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 border-t border-[#334155]"
    >
      <SectionHeading title="Technical Skills" centered />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 xl:gap-12">
        {Object.entries(skills).map(([category, items], i) => (
          <div
            key={category}
            className="rounded-2xl border border-[#334155] bg-[#1e293b] p-6 md:p-7 hover:border-[#14b8a6]/40 transition-colors duration-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1), border-color 300ms",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#14b8a6]" />
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {category}
              </h3>
            </div>

            {/* Skill list */}
            <div className="space-y-5">
              {items.map((skill, j) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm font-mono font-semibold text-white">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-1.5 bg-[#0f172a] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9]"
                      style={{
                        width: visible ? `${skill.level}%` : "0%",
                        transition: "width 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: `${400 + i * 100 + j * 80}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}