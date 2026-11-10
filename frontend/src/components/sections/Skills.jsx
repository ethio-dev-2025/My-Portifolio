import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import skills from "../../data/skills.json";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Cloud,
  Sparkles,
  Layers
} from "lucide-react";

const CATEGORY_ICONS = {
  Frontend: Code2,
  Backend: Server,
  "Tools & Workflow": Wrench,
  Deployment: Cloud,
  Databases: Database,
  "Currently Learning": Sparkles,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...Object.keys(skills)];

  const displayedSkills =
    activeFilter === "All"
      ? Object.entries(skills)
      : Object.entries(skills).filter(([category]) => category === activeFilter);

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800"
    >
      {/* Centered Heading */}
      <SectionHeading
        title="Technical Skills"
      />

      {/* Centered Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                isSelected
                  ? "bg-blue-600 text-white font-semibold shadow-sm"
                  : "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Grid — Equal Width & Equal Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {displayedSkills.map(([category, items]) => {
          const Icon = CATEGORY_ICONS[category] || Layers;
          return (
            <div
              key={category}
              className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl p-5 sm:p-6 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors h-full"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-gray-400">
                    {items.length} skills
                  </span>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-5 border-t border-gray-100 dark:border-gray-850 flex items-center justify-between text-[11px] text-gray-400">
                <span>Proficiency Level</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
