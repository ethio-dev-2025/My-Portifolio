import SectionHeading from "../common/SectionHeading";
import profile from "../../data/profile.json";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-[1800px] mx-auto px-6 py-12 border-t border-[#334155]"
    >
      <SectionHeading title="About Me" centered />

      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 xl:gap-16 items-stretch md:min-h-[400px]">

        {/* LEFT — image */}
        <div className="relative w-full h-[300px] md:h-auto md:min-h-[400px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src={profile.aboutImage}
              alt={profile.name}
              width={720}
              height={720}
              className="block w-full h-full object-cover object-top select-none"
              draggable="false"
            />
          </div>
        </div>

        {/* RIGHT — bio (no rectangle frame) */}
        <div className="relative w-full h-full">
          <div className="relative h-full p-0 overflow-hidden">

            <div
              className="relative flex flex-col justify-center gap-5 text-white h-full"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >

              {/* Opening line */}
              <p className="text-3xl lg:text-4xl font-bold text-white leading-snug">
                <span className="text-[#14b8a6]">Self-taught</span> full-stack developer based in Bahir Dar, Ethiopia.
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-[#334155]" />

              <p className="text-xl leading-relaxed text-white">
                I studied at <span className="font-semibold">Injibara University</span>,
                but my real education came from{" "}
                <span className="font-semibold">five years</span> of building,
                breaking, and rebuilding things.
              </p>

              <p className="text-xl leading-relaxed text-white">
                Today I work as a{" "}
                <span className="font-semibold">self-employed developer</span>. My
                main project is a{" "}
                <span className="text-[#14b8a6] font-semibold">
                  real-estate listing and rental management system
                </span>{" "}
                — from property listings and tenant onboarding to lease agreements
                and admin dashboards. I build the entire stack:{" "}
                <span className="font-semibold">React + Vite + Tailwind CSS</span>{" "}
                on the frontend,{" "}
                <span className="font-semibold">FastAPI + PostgreSQL</span> on the
                backend.
              </p>

              <p className="text-xl leading-relaxed text-white">
                I like problems where the{" "}
                <span className="font-semibold">database design</span>, the{" "}
                <span className="font-semibold">API</span>, and the{" "}
                <span className="font-semibold">UI</span> all have to line up —
                where getting the details right matters to the people using it
                daily.
              </p>

              {/* Currently */}
              <div className="pt-3">
                <p
                  className="text-lg uppercase tracking-[0.15em] text-white font-bold mb-3"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  Currently
                </p>
                <ul className="space-y-2">
                  <Bullet>
                    Building a{" "}
                    <span className="font-semibold">
                      real-estate platform
                    </span>{" "}
                    with React, FastAPI, and PostgreSQL
                  </Bullet>
                  <Bullet>
                    Running my own development practice —{" "}
                    <span className="font-semibold">design, code, deploy, support</span>
                  </Bullet>
                  <Bullet>
                    Deepening backend skills:{" "}
                    <span className="font-semibold">API design, auth, database modeling</span>
                  </Bullet>
                </ul>
              </div>

              {/* Goals */}
              <div className="pt-1">
                <p
                  className="text-lg uppercase tracking-[0.15em] text-white font-bold mb-3"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  Goals for 2026
                </p>
                <ul className="space-y-2">
                  <Bullet>
                    Launch the real-estate platform and{" "}
                    <span className="font-semibold">onboard the first paying customers</span>
                  </Bullet>
                  <Bullet>
                    Contribute to an{" "}
                    <span className="font-semibold">open-source Python or React project</span>
                  </Bullet>
                  <Bullet>
                    <span className="font-semibold">Mentor junior developers</span>{" "}
                    on larger-scale systems
                  </Bullet>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li
      className="flex gap-3 text-white text-lg leading-relaxed"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#14b8a6] shrink-0" />
      <span>{children}</span>
    </li>
  );
}