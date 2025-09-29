import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();

    // fetch trailer video from TMDB API && updating the store with trailer video data

  const getMovieVideos = async () => {
    if(!movieId) return;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );

    if (filterData?.length) {
      const videoId = filterData[0].key;
      dispatch(addTrailerVideo(videoId));
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
}

export default useMovieTrailer;