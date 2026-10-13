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

        {/* RIGHT — bio inside rectangle card */}
        <div className="relative w-full h-full">
          <div className="relative h-full rounded-2xl border border-[#334155] bg-[#1e293b] p-6 md:p-7 overflow-hidden">

            {/* Accent corner glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#14b8a6]/8 blur-[100px]" />

            <div className="relative flex flex-col justify-center gap-5 text-white h-full">

              {/* Opening line */}
              <p className="text-2xl lg:text-3xl font-semibold text-white leading-snug">
                I'm a{" "}
                <span className="text-[#14b8a6]">self-taught</span> full-stack
                developer based in Bahir Dar, Ethiopia.
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-[#334155]" />

              <p className="text-lg leading-relaxed text-white">
                I studied at{" "}
                <span className="text-white font-semibold">Injibara University</span>,
                but my real education has come from{" "}
                <span className="text-white font-semibold">five years of building things</span>,
                breaking them, and rebuilding them better.
              </p>

              <p className="text-lg leading-relaxed text-white">
                Today I work as a{" "}
                <span className="text-white font-semibold">self-employed full-stack developer</span>.
                My main project is a{" "}
                <span className="text-[#14b8a6] font-semibold">
                  real-estate listing and rental management system
                </span>{" "}
                — handling everything from property listings and tenant onboarding
                to rental agreements and admin dashboards. I build the entire stack:{" "}
                <span className="text-white font-semibold">React</span> and{" "}
                <span className="text-white font-semibold">Vite</span> on the frontend,{" "}
                <span className="text-white font-semibold">Tailwind CSS</span> for the interface,{" "}
                <span className="text-white font-semibold">FastAPI</span> for the backend, and{" "}
                <span className="text-white font-semibold">PostgreSQL</span> for the data layer.
              </p>

              <p className="text-lg leading-relaxed text-white">
                I like problems where the{" "}
                <span className="text-white font-semibold">database design</span>, the{" "}
                <span className="text-white font-semibold">API</span>, and the{" "}
                <span className="text-white font-semibold">UI</span> all have to line up.
                Real-estate software is full of those — listings, leases, payments,
                permissions — and getting the details right matters to the people who
                use it every day.
              </p>

              {/* Currently */}
              <div className="pt-3">
                <p className="text-sm uppercase tracking-[0.2em] text-white font-bold mb-3">
                  Currently
                </p>
                <ul className="space-y-2">
                  <Bullet>
                    Building a{" "}
                    <span className="text-white font-semibold">
                      real-estate listing and rental management system
                    </span>{" "}
                    with React, FastAPI, and PostgreSQL
                  </Bullet>
                  <Bullet>
                    Working as a{" "}
                    <span className="text-white font-semibold">self-employed full-stack developer</span>,
                    handling design, development, and deployment end to end
                  </Bullet>
                  <Bullet>
                    Sharpening my backend skills with{" "}
                    <span className="text-white font-semibold">API design, auth, and database modeling</span>
                  </Bullet>
                </ul>
              </div>

              {/* Goals */}
              <div className="pt-1">
                <p className="text-sm uppercase tracking-[0.2em] text-white font-bold mb-3">
                  Goals for 2026
                </p>
                <ul className="space-y-2">
                  <Bullet>
                    Launch the real-estate platform publicly and{" "}
                    <span className="text-white font-semibold">onboard the first paying customers</span>
                  </Bullet>
                  <Bullet>
                    Contribute to an{" "}
                    <span className="text-white font-semibold">open-source project</span>{" "}
                    in the Python or React ecosystem
                  </Bullet>
                  <Bullet>
                    Grow into a role where I can{" "}
                    <span className="text-white font-semibold">mentor junior developers</span>{" "}
                    and work on larger-scale products
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
    <li className="flex gap-3 text-white text-base leading-relaxed">
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#14b8a6] shrink-0" />
      <span>{children}</span>
    </li>
  );
}