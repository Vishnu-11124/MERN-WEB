import HeroPage from "@/components/HeroPage";
import MovieSection from "@/components/MovieSection";
import { movies } from "@/data/constant";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0F] px-4 py-8 text-white sm:px-6 lg:px-12">
      {/* Hero Section */}
      <HeroPage />

      {/* Trending Movies */}
      <MovieSection
        movies={movies}
        sectionTitle="Trending Movies"
        subTitle="Discover what everyone is watching"
      />
      {/* Most Watched Movies */}
      <MovieSection
        movies={movies}
        sectionTitle="Most Watched Movies"
        subTitle="Popular picks you shouldn't miss"
      />
    </main>
  );
};

export default Home;
