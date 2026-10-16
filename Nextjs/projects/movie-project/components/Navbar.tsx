"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // First click on the icon opens the search bar
    if (!open) {
      setOpen(true);
      inputRef.current?.focus();
      return;
    }

    // Submit when there is a query, otherwise collapse again
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-linear-to-b from-black/70 via-black/30 to-transparent">
      <nav className="flex h-20 items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="rounded-md text-xl font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
        >
          <span className="text-amber-400">M</span>oviezz
        </Link>

        {/* Search */}
        <form
          role="search"
          onSubmit={handleSubmit}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget) && !query) {
              setOpen(false);
            }
          }}
          className={`flex h-10 shrink-0 items-center overflow-hidden rounded-full border transition-all duration-300 ease-out focus-within:border-white/30 ${
            open
              ? "w-56 border-white/15 bg-black/40 backdrop-blur-md sm:w-80"
              : "w-10 border-transparent bg-transparent"
          }`}
        >
          <input
            ref={inputRef}
            type="search"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setQuery("");
                setOpen(false);
              }
            }}
            tabIndex={open ? 0 : -1}
            placeholder="Search movies"
            aria-label="Search movies"
            autoComplete="off"
            className={`min-w-0 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none [&::-webkit-search-cancel-button]:hidden ${
              open ? "flex-1 pl-4" : "w-0 flex-none p-0"
            }`}
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex size-9.5 shrink-0 items-center justify-center text-white/80 transition-colors hover:text-amber-400 focus-visible:text-amber-400 focus-visible:outline-none"
          >
            <Search className="size-5 shrink-0" strokeWidth={1.75} />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
