import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <section className="relative flex min-h-[min(760px,calc(100svh-72px))] flex-col justify-center py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-36 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]"
          />
          <p className="accent-label mb-7 flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(103,232,249,0.65)]" />
            Portfolio / Selected projects
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-7xl">
            Building web experiences with{" "}
            <span className="neon-text">purpose.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Hi, I&apos;m Taeg Dayley. I make interactive web projects and full-stack
            applications, with a focus on bringing useful ideas to life.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              className="neon-button rounded-lg px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              href="#projects"
            >
              View projects <span aria-hidden="true">↓</span>
            </Link>
            <Link
              className="neon-outline-button rounded-lg border px-5 py-3 text-sm font-medium text-slate-200 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              href="/about"
            >
              About me <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
            Scroll to explore <span className="text-cyan-300">↓</span>
          </p>
        </section>
        <ProjectList />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
