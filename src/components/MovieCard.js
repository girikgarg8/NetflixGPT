import React from "react";
import { TMDB_IMAGE_CDN_URL } from "../constants";

const MovieCard = ({ imageID }) => {
  return (
    <div className="w-48 pr-5">
      <img alt="Movie Card" src={TMDB_IMAGE_CDN_URL + imageID} />
    </div>
  );
};

export default MovieCard;
