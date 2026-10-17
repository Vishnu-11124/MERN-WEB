"use client";

import { Movie } from "@/dataType/types";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0F]"
    >
      {/* Poster */}
      <div className="aspect-2/3 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-amber-400/50">
        <img
          src={movie.image}
          alt={`${movie.title} poster`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="mt-3 px-0.5">
        <h2 className="truncate text-sm font-medium text-white transition-colors group-hover:text-amber-400">
          {movie.title}
        </h2>
        <p className="mt-0.5 text-xs text-white/50">{movie.language}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
