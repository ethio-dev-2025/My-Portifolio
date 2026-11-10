import SectionHeading from "../common/SectionHeading";
import profile from "../../data/profile.json";
import {
  FileText,
  Send,
  CheckCircle2,
  Building2,
  GraduationCap
} from "lucide-react";

export default function About({ onOpenResume }) {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800"
    >
      {/* Centered Heading */}
      <SectionHeading
        title="About Me"
      />

      {/* 2 Equal Columns: Left = Only Image, Right = Only One Section That Describes Me */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        {/* LEFT COLUMN: ONLY IMAGE */}
        <div className="h-full flex items-center justify-center">
          <div className="w-full h-full min-h-[380px] sm:min-h-[480px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 shadow-sm">
            <img
              src={profile.aboutImage}
              alt={profile.name}
              className="w-full h-full object-cover object-top select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: ONLY ONE SECTION THAT DESCRIBES ME */}
        <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm h-full">
          <div className="space-y-5">
            {/* Header Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Self-Taught Full-Stack Developer
              </h3>
            </div>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I'm <strong className="text-gray-900 dark:text-white font-semibold">{profile.name}</strong>, a full-stack web application developer based in Bahir Dar, Ethiopia with over 5 years of practical software engineering experience.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I studied Computer Science at <strong className="text-gray-900 dark:text-white font-semibold">Injibara University</strong>, establishing a solid foundation in data structures, algorithms, and relational database systems. Over the years, I forged my capabilities through hands-on architecture, continuous self-learning, and delivering production systems.
            </p>

            {/* Flagship Platform Callout */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-1.5">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>Flagship Platform</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                Real-Estate Listing & Rental Management System
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                An end-to-end platform managing property directories, tenant onboarding, automated digital lease agreements, rent tracking, and property manager dashboards.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["React", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL", "SQLAlchemy"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 pt-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Building fast, responsive, and accessible user interfaces with React and Tailwind CSS</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Engineering secure RESTful APIs with FastAPI, Pydantic validation, and JWT authentication</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Relational database design, query optimization, and schema migrations with PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>View Full Resume (CV)</span>
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
