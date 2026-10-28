import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div className="site-shell">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-24 sm:px-8 sm:py-32">
        <section className="relative max-w-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]"
          />
          <p className="accent-label mb-5 font-mono text-xs uppercase tracking-[0.25em]">
            About this portfolio
          </p>
          <h1 className="neon-thrum text-4xl font-semibold tracking-tight sm:text-6xl">
            A little about the work.
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-400">
            I&apos;m Taeg Dayley. This portfolio brings together projects
            that explore interactive experiences and full-stack web
            development.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="neon-panel rounded-xl border bg-[#11162a] p-6">
              <p className="accent-label mb-3 font-mono text-xs uppercase tracking-widest">
                Interactive
              </p>
              <p className="leading-7 text-slate-300">
                Pokémon Companion makes it easy to search for any Pokémon. A web app I designed for 
                my personal playthrough of the classic game series.
              </p>
            </div>
            <div className="neon-panel rounded-xl border bg-[#11162a] p-6">
              <p className="accent-label mb-3 font-mono text-xs uppercase tracking-widest">
                Full-stack
              </p>
              <p className="leading-7 text-slate-300">
                The CSE 340 project is a full-stack web application. Its
                database is no longer active, so some functionality is limited.
              </p>
            </div>
          </div>
          <Link
            className="neon-link mt-10 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            href="/#projects"
          >
            Browse the projects <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}