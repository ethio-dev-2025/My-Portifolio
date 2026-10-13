import profile from "../../data/profile.json";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Twitter", href: profile.social.twitter },
  ];

  return (
    <footer className="border-t-2 border-[#2d4a7c] bg-[#1a2744]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-300 text-center lg:text-left">
            © {year} {profile.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-base font-bold text-white hover:text-[#14b8a6] transition-colors px-4 py-3 rounded-lg hover:bg-white/[0.08]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}