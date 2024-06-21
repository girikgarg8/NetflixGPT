import React from "react";
import MovieCategory from "./MovieCategory";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="-mt-52 relative z-20 bg-black mb-12">
      <MovieCategory title="Now Playing Movies" movies={movies.nowPlayingMovies} />
      <MovieCategory title="Popular Movies" movies={movies.popularMovies} />
      <MovieCategory title="Top Rated Movies" movies={movies.topRatedMovies} />
      <MovieCategory title="Upcoming Movies" movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
