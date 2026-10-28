"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="neon-header sticky top-0 z-10 border-b border-white/10 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="neon-link text-sm font-semibold tracking-wide transition-colors"
        >
          <span className="mr-2">✳</span>
          Taeg Dayley
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="neon-link flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
        <ul
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#0b0f1a]/95 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl sm:static sm:flex sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none`}
        >
          <li>
            <Link
              className="neon-link block rounded-md px-3 py-2 transition-colors hover:bg-white/5 sm:p-0 sm:hover:bg-transparent"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="neon-link block rounded-md px-3 py-2 transition-colors hover:bg-white/5 sm:p-0 sm:hover:bg-transparent"
              href="/#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="neon-link block rounded-md px-3 py-2 transition-colors hover:bg-white/5 sm:p-0 sm:hover:bg-transparent"
              href="/#skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="neon-link block rounded-md px-3 py-2 transition-colors hover:bg-white/5 sm:p-0 sm:hover:bg-transparent"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
