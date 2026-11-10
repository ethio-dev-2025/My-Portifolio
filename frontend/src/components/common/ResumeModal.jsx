import { useEffect } from "react";
import { X, Download, Printer, ExternalLink, Briefcase, GraduationCap, Award, Code2, Mail, Phone, MapPin, Globe } from "lucide-react";
import profile from "../../data/profile.json";
import education from "../../data/education.json";
import skills from "../../data/skills.json";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              {profile.initials}
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Curriculum Vitae (CV)
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {profile.name} • {profile.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 transition-colors"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={profile.resumeUrl}
              download="Melkamu_Enyew_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-gray-700 dark:text-gray-300 text-sm">
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {profile.name}
                </h1>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {profile.role}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {profile.location}
                </span>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-blue-600">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 hover:text-blue-600">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  {profile.phone}
                </a>
                <a href={profile.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  github.com/ethio-dev-2025
                </a>
              </div>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          {/* Work Experience */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Professional Experience</span>
            </h2>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5 bg-gray-50/50 dark:bg-gray-850">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Independent Full-Stack Developer
                </h3>
                <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                  2021 — Present
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Bahir Dar, Ethiopia
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <li>
                  Engineered complete <strong>Real-Estate Listing & Rental Management System</strong> using React, Tailwind CSS, FastAPI, and PostgreSQL.
                </li>
                <li>
                  Implemented robust REST APIs with JWT authentication, role authorization, and Pydantic data schemas.
                </li>
                <li>
                  Managed PostgreSQL database schema design, migrations, and query performance.
                </li>
                <li>
                  Deployed production web apps and APIs to Vercel and Render with CI/CD integration.
                </li>
              </ul>
            </div>
          </section>

          {/* Education & Certs */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education & Certifications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.degrees.map((deg) => (
                <div key={deg.degree} className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50/50 dark:bg-gray-850">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{deg.degree}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">{deg.institution}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-0.5">{deg.period}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {deg.relevantCourses.map((c) => (
                      <span key={c} className="text-[10px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50/50 dark:bg-gray-850">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>Certifications</span>
                </h4>
                <div className="space-y-2">
                  {education.certifications.map((cert) => (
                    <div key={cert.name} className="text-xs border-b border-gray-100 dark:border-gray-800 pb-1.5 last:border-0 last:pb-0">
                      <p className="font-semibold text-gray-900 dark:text-white">{cert.name}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">{cert.issuer} • {cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(skills).map(([cat, list]) => (
                <div key={cat} className="border border-gray-200 dark:border-gray-800 rounded-xl p-3 bg-gray-50/50 dark:bg-gray-850">
                  <p className="text-xs font-bold text-gray-900 dark:text-white mb-1.5">{cat}</p>
                  <div className="flex flex-wrap gap-1">
                    {list.map((item) => (
                      <span key={item.name} className="text-[11px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded">
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-5 sm:px-6 py-3 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Available for full-time & contractual roles</span>
          <a
            href="#contact"
            onClick={onClose}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
          >
            Contact me <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
