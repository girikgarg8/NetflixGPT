import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { YOUTUBE_EMBED_URL } from "../constants";

const VideoBackground = ({ movieID }) => {
  useMovieTrailer(movieID);

  const trailer = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="w-screen">
      {trailer && (
        <iframe
          className="w-screen aspect-video"
          src={
            YOUTUBE_EMBED_URL +
            trailer.key +
            "?enablejsapi=1&autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&iv_load_policy=3&loop=1&playlist=" +
            trailer.key
          }
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
