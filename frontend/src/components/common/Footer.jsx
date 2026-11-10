import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import profile from "../../data/profile.json";

export default function Footer({ onOpenResume }) {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-[#0b0f19]/70 backdrop-blur-md text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-600 shadow-sm">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-base">
                {profile.name}
              </span>
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Full-Stack Web Developer • React & FastAPI
            </p>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-gray-600 dark:text-gray-400">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={onOpenResume}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Right: Social icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer ml-1"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 dark:text-gray-500 gap-2 text-center sm:text-left">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
