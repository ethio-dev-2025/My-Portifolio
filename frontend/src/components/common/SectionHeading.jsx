export default function SectionHeading({ title, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </div>
  );
}