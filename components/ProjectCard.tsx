type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  href?: string;
  linkLabel?: string;
  note?: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  highlights,
  href,
  linkLabel,
  note,
}: ProjectCardProps) {
  return (
    <article
      className="neon-panel group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[#11162a] p-6 transition duration-300 hover:-translate-y-1 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="accent-card-glow pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition-opacity group-hover:opacity-150"
      />
      <div className="relative flex flex-1 flex-col">
        <div className="mb-12 flex items-center justify-between">
          <span className="accent-label font-mono text-sm">{number}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
            {category}
          </span>
        </div>
        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="max-w-lg leading-7 text-slate-400">{description}</p>
        {highlights && (
          <ul className="mt-5 space-y-2.5 text-sm leading-6 text-slate-400">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="accent-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {note && (
          <p className="mt-4 rounded-lg border border-amber-300/20 bg-amber-300/5 px-3 py-2 text-sm leading-6 text-amber-100/80">
            {note}
          </p>
        )}
        {href && linkLabel && (
          <a
            className="neon-link mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-medium transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkLabel}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        )}
      </div>
    </article>
  );
}