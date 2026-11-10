import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import projects from "../../data/projects.json";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../common/SocialIcons";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["All", "Full-Stack", "Backend", "Frontend"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Backend") {
      return (
        p.tech.includes("FastAPI") ||
        p.tech.includes("Python") ||
        p.tech.includes("PostgreSQL")
      );
    }
    if (activeFilter === "Frontend") {
      return (
        p.tech.includes("React") ||
        p.tech.includes("Tailwind CSS") ||
        p.tech.includes("HTML")
      );
    }
    if (activeFilter === "Full-Stack") {
      return p.tech.includes("FastAPI") && p.tech.includes("React");
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800"
    >
      {/* Centered Heading */}
      <SectionHeading
        title="Featured Projects"
      />

      {/* Centered Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setActiveFilter(opt)}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeFilter === opt
                ? "bg-blue-600 text-white font-semibold shadow-sm"
                : "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Projects Grid — Equal Width & Equal Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((p) => (
          <article
            key={p.id}
            className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
          >
            {/* Top Container: Image & Text */}
            <div>
              {/* Project Image */}
              <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {p.id === 1 && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    Flagship Platform
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-1">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons (Pinned to bottom of equal-height card) */}
            <div className="p-5 sm:p-6 pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 flex items-center justify-between gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
