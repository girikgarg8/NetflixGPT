import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_VIDEOS_API_URL } from "../constants";
import { addTrailerVideo } from "../slice/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  // fetch trailer video and update the store with trailer video data
  useEffect(() => {
    async function getVideosForMovieID() {
      const apiResponse = await fetch(
        TMDB_VIDEOS_API_URL +
          "/" +
          movieID +
          "/videos?api_key=" +
          process.env.REACT_APP_TMDB_API_KEY
      );
      const apiJsonResponse = await apiResponse.json();
      const videos = apiJsonResponse.results;
      const filteredData = videos.filter((video) => video.type === "Trailer");
      const trailer = filteredData.length ? filteredData[0] : videos[0];
      dispatch(addTrailerVideo(trailer));
    }
    getVideosForMovieID();
  }, []);
};

export default useMovieTrailer;
