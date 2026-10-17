"use client";

import MovieCard from "./MovieCard";
import { Movie, MovieSectionDetails } from "@/dataType/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const MovieSection = ({
  movies,
  sectionTitle,
  subTitle,
}: MovieSectionDetails) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const list: Movie[] = [...movies]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    setFilteredMovies(list);
  }, [movies]);

  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {sectionTitle}
          </h2>

          <p className="mt-2 text-sm text-gray-400">{subTitle}</p>
        </div>

        <Link
          href="/movies"
          className="text-sm font-medium text-red-500 transition hover:text-red-400"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
