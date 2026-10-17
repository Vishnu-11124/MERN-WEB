import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/constant";

const Movies = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0F] px-4 py-18 text-white sm:px-6 lg:px-12">
      {/* Movie Collection Header */}
      <section>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">All Movies</h2>

            <p className="mt-1 text-sm text-gray-400">
              Explore the complete collection
            </p>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            {movies.length} Movies
          </span>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Movies;
