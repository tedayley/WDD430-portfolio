type TechStackCardProps = {
  category: string;
  skills: string[];
  number: string;
};

export default function TechStackCard({
  category,
  skills,
  number,
}: TechStackCardProps) {
  return (
    <article className="neon-panel group rounded-xl border bg-[#11162a] p-5 transition duration-300 hover:-translate-y-1 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-semibold text-white">{category}</h3>
        <span className="accent-label font-mono text-xs">{number}</span>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-white/15"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
