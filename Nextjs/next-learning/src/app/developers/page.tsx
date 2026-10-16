import DevCard from "@/components/DevCard";
import { developers } from "@/constants/data";
import React from "react";

const DevelopersPage = () => {
  return (
    <main className="min-h-screen bg-[#FAF9F6] px-6 py-16 text-[#191919] dark:bg-[#0C0C0D] dark:text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="relative border-b border-neutral-200 pb-10 dark:border-neutral-800 md:pb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              The people behind the product
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl md:text-7xl">
                Meet the
                <br />
                <span className="text-neutral-400 dark:text-neutral-600">
                  builders.
                </span>
              </h1>
            </div>

            <div className="max-w-sm md:pb-2">
              <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 md:text-lg">
                A collective of creative minds turning ideas into meaningful
                digital experiences through design, code, and collaboration.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-500" />
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {developers.length} talented developers
                </p>
              </div>
            </div>
          </div>

          {/* Decorative background detail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-0 hidden select-none text-8xl font-bold tracking-tighter text-neutral-200/50 dark:text-neutral-800/30 lg:block"
          >
            01
          </div>
        </header>

        {/* Developers Grid */}
        <section className="pt-10 md:pt-14">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide">The team</h2>

            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              People &amp; expertise
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {developers.map((developer) => (
              <DevCard developer={developer} key={developer.devId} />
            ))}
          </div>
        </section>

        {/* Footer detail */}
        <footer className="mt-20 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Good things happen when great minds work together.</p>
          <p className="uppercase tracking-[0.18em]">Built with intention.</p>
        </footer>
      </div>
    </main>
  );
};

export default DevelopersPage;
