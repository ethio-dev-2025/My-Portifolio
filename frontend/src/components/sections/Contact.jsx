import SectionHeading from "../common/SectionHeading";
import useContactForm from "../../hooks/useContactForm";
import profile from "../../data/profile.json";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/SocialIcons";

export default function Contact() {
  const { form, errors, status, serverMessage, handleChange, handleSubmit } =
    useContactForm();

  const contactMethods = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      sub: "Typical response within 24h",
    },
    {
      label: "Phone / WhatsApp",
      value: profile.phone,
      href: `tel:${profile.phone}`,
      icon: Phone,
      sub: "Business hours (UTC+3)",
    },
    {
      label: "Location",
      value: profile.location,
      href: "https://maps.google.com/?q=Bahir+Dar+Ethiopia",
      icon: MapPin,
      sub: "East Africa Timezone",
    },
    {
      label: "GitHub",
      value: "@ethio-dev-2025",
      href: profile.social.github,
      icon: GithubIcon,
      sub: "Open source code & repos",
    },
    {
      label: "LinkedIn",
      value: "melkamuenyew",
      href: profile.social.linkedin,
      icon: LinkedinIcon,
      sub: "Professional network",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800"
    >
      {/* Centered Heading */}
      <SectionHeading
        title="Get In Touch"
      />

      {/* 2 Equal Columns — Equal Width (50% / 50%) & Equal Height */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* LEFT COLUMN: Contact Details (50% Width, Equal Height) */}
        <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm h-full">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Contact Information
              </h3>
            </div>
            <div className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isExternal = method.href.startsWith("http");
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-850 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {method.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {method.value}
                      </p>
                    </div>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500 hidden sm:inline">
                      {method.sub}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Response rate: &lt; 24h
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Available Now
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Message Form (50% Width, Equal Height) */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm h-full"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Send a Message
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6">
              Fill out the form and your message will be delivered straight to my inbox.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="John Doe"
                />

                <Field
                  label="Your Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="john@example.com"
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Project proposal / Job inquiry"
                required={false}
              />

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full rounded-lg border bg-white dark:bg-gray-950 p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700 focus:border-blue-600"
                  }`}
                  placeholder="Tell me about your project, timeline, or inquiry..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-sm transition-colors shadow-sm cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {serverMessage && (
              <div
                className={`text-xs sm:text-sm flex items-center gap-1.5 p-2 rounded-lg ${
                  status === "success"
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                    : "bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                )}
                <span>{serverMessage}</span>
              </div>
            )}
          </div>
        </form>

      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = true,
  placeholder = "",
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
        {label}
        {required ? (
          <span className="text-blue-600"> *</span>
        ) : (
          <span className="text-gray-400 font-normal"> (optional)</span>
        )}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-white dark:bg-gray-950 px-3.5 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors ${
          error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-700 focus:border-blue-600"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
