import profile from "../../data/profile.json";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Twitter", href: profile.social.twitter },
  ];

  return (
    <footer className="border-t border-[#334155]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* LEFT — copyright */}
          <p className="text-sm text-zinc-400 text-center lg:text-left">
            © {year} {profile.name}. All rights reserved.
          </p>

          {/* RIGHT — social links + back to top */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-white hover:text-[#14b8a6] transition-colors px-4 py-3 rounded-lg hover:bg-white/[0.04] inline-block"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}