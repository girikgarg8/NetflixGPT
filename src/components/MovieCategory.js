import React from "react";
import MovieCard from "./MovieCard";

const MovieCategory = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6 text-white">
      <h1 className="text-2xl py-6"> {title} </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex mt-2">
          {movies.map((movie) => (
            <MovieCard imageID={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCategory;
