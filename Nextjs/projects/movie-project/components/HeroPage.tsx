"use client";

import { movies } from "@/data/constant";
import { Movie } from "@/dataType/types";
import { Play, Star } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SLIDE_COUNT = 4;
const SLIDE_INTERVAL = 6000;

// Fisher-Yates shuffle (unbiased, unlike sort(() => Math.random() - 0.5))
const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const formatDuration = (minutes: number) =>
  `${Math.floor(minutes / 60)}h ${minutes % 60}m`;

const HeroPage = () => {
  const [slides, setSlides] = useState<Movie[]>([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Pick the random movies after mount so server and client HTML match
  useEffect(() => {
    setSlides(shuffle(movies).slice(0, SLIDE_COUNT));
  }, []);

  // Auto-advance; pauses on hover/focus and for reduced-motion users
  useEffect(() => {
    if (paused || slides.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(
      () => setCurrent((c) => (c + 1) % slides.length),
      SLIDE_INTERVAL,
    );
    return () => clearTimeout(timer);
  }, [current, paused, slides.length]);

  if (slides.length === 0) {
    return <section className="h-svh min-h-160 bg-[#0B0B0F]" />;
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured movies"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative h-svh min-h-160 overflow-hidden bg-[#0B0B0F]"
    >
      {slides.map((movie, index) => {
        const active = index === current;

        return (
          <div
            key={movie.id}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ${
              active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {/* Background image */}
            <img
              src={movie.image}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover blur-md transition-transform duration-7000 ease-out ${
                active ? "scale-110" : "scale-125"
              }`}
            />

            {/* Overlays: text legibility, navbar fade, blend into the page */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0F] via-transparent to-black/50" />

            {/* Content */}
            <div className="relative mx-auto grid h-full max-w-6xl items-center gap-12 px-6 pb-24 pt-28 md:grid-cols-[1fr_280px] md:px-10">
              {/* Movie info */}
              <div
                className={`max-w-2xl transition-all delay-200 duration-700 ${
                  active ? "translate-y-0" : "translate-y-4"
                }`}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1.5 font-medium text-white">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    {movie.rating.toFixed(1)}
                  </span>
                  <span>{movie.releaseYear}</span>
                  <span>{movie.language}</span>
                  <span>{formatDuration(movie.duration)}</span>
                </div>

                <h3 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {movie.title}
                </h3>

                <p className="mt-5 line-clamp-3 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                  {movie.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {movie.genre.map((g) => (
                    <span
                      key={g}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/movies/${movie.id}`}
                  tabIndex={active ? 0 : -1}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <Play className="size-4 fill-current" />
                  Watch
                </Link>
              </div>

              {/* Poster */}
              <div
                className={`hidden justify-self-end transition-all delay-300 duration-700 md:block ${
                  active ? "translate-x-0" : "translate-x-6"
                }`}
              >
                <img
                  src={movie.image}
                  alt={`${movie.title} poster`}
                  className="aspect-2/3 w-70 rounded-2xl object-cover shadow-2xl shadow-black/60 ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide indicators */}
      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="mx-auto flex max-w-6xl gap-2 px-6 md:px-10">
          {slides.map((movie, index) => (
            <button
              key={movie.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show ${movie.title}`}
              aria-current={index === current}
              className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                index === current
                  ? "w-10 bg-amber-400"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
