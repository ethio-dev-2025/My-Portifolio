import SectionHeading from "../common/SectionHeading";
import useContactForm from "../../hooks/useContactForm";
import profile from "../../data/profile.json";

export default function Contact() {
  const { form, errors, status, serverMessage, handleChange, handleSubmit } =
    useContactForm();

  const cards = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "@ethio-dev-2025",
      href: profile.social.github,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative max-w-[1800px] mx-auto px-6 py-12 border-t border-[#334155]"
    >
      <SectionHeading title="Get in Touch" centered />

      <div className="grid md:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-stretch md:min-h-[500px]">

        {/* LEFT — info cards inside ONE rectangle card */}
        <div className="relative w-full h-full">
          <div className="relative h-full rounded-2xl border border-[#334155] bg-[#1e293b] p-6 md:p-7 overflow-hidden">

            {/* Accent corner glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#14b8a6]/8 blur-[100px]" />

            <div className="relative flex flex-col h-full gap-4">

              {/* Card title */}
              <p className="text-lg md:text-xl uppercase tracking-[0.2em] text-[#14b8a6] font-bold mb-1">
                Contact Info
              </p>

              {/* Info cards */}
              {cards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={
                    card.href.startsWith("mailto") || card.href.startsWith("tel")
                      ? undefined
                      : "_blank"
                  }
                  rel="noreferrer"
                  className="group flex-1 flex items-center gap-4 rounded-xl border border-[#334155] bg-[#0f172a] px-5 py-4 hover:border-[#14b8a6]/60 hover:bg-[#0f172a]/80 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14b8a6]/10 border border-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] shrink-0 group-hover:bg-[#14b8a6]/20 transition-colors">
                    {card.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm uppercase tracking-widest text-[#14b8a6] font-mono font-bold">
                      {card.label}
                    </p>
                    <p className="text-lg text-white truncate mt-1 group-hover:text-[#14b8a6] transition-colors">
                      {card.value}
                    </p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600 group-hover:text-[#14b8a6] transition-colors shrink-0">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT — form card */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative flex flex-col gap-4 rounded-2xl border border-[#334155] bg-[#1e293b] p-6 md:p-7 h-full overflow-hidden"
        >

          {/* Accent corner glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#0ea5e9]/8 blur-[100px]" />

          <div className="relative flex flex-col gap-4 h-full">

            <Field
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />

            <Field
              label="Your Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
              required={false}
            />

            <div className="flex-1 flex flex-col">
              <label className="block text-sm uppercase tracking-widest text-[#14b8a6] mb-2 font-mono font-bold">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`flex-1 w-full min-h-[160px] bg-[#0f172a] border rounded-xl px-4 py-3 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-[#14b8a6] transition-colors resize-none ${
                  errors.message ? "border-red-500/60" : "border-[#334155]"
                }`}
                placeholder="Tell me about your project…"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1.5">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#14b8a6] to-[#0ea5e9] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-[#0f172a] text-base font-bold px-8 py-3.5 rounded-xl transition-all duration-300 outline-none focus:outline-none w-full sm:w-auto hover:shadow-[0_0_24px_rgba(20,184,166,0.4)]"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              {serverMessage && (
                <p className={`text-sm text-center sm:text-left ${status === "success" ? "text-emerald-400" : "text-red-400"}`}>
                  {serverMessage}
                </p>
              )}
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text", required = true }) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-widest text-[#14b8a6] mb-2 font-mono font-bold">
        {label}
        {!required && <span className="text-zinc-500"> · optional</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-[#0f172a] border rounded-xl px-4 py-3.5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-[#14b8a6] transition-colors ${
          error ? "border-red-500/60" : "border-[#334155]"
        }`}
      />
      {error && <p className="text-red-400 text-sm mt-1.5">{error}</p>}
    </div>
  );
}