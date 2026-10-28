import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Taeg Dayley · Portfolio</p>
        <div className="flex gap-5">
          <Link className="neon-link transition-colors" href="/">
            Home
          </Link>
          <Link
            className="neon-link transition-colors"
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className="neon-link transition-colors"
            href="/#skills"
          >
            Skills
          </Link>
          <Link
            className="neon-link transition-colors"
            href="/about"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}