"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className={`flex items-center gap-2 rounded-md text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-white ${focusRing}`}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-white" />
          NextJS
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${focusRing} ${
                  isActive(href)
                    ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`relative h-9 w-9 rounded-md text-neutral-900 dark:text-white md:hidden ${focusRing}`}
        >
          <span
            className={`absolute left-2 h-px w-5 bg-current transition-all duration-300 ${
              open ? "top-4.5 rotate-45" : "top-3.25"
            }`}
          />
          <span
            className={`absolute left-2 h-px w-5 bg-current transition-all duration-300 ${
              open ? "top-4.5 -rotate-45" : "top-3.25"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-neutral-200/70 px-6 py-3 dark:border-neutral-800/70 md:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive(href) ? "page" : undefined}
                className={`block rounded-md py-3 text-base transition-colors ${focusRing} ${
                  isActive(href)
                    ? "font-medium text-neutral-900 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
