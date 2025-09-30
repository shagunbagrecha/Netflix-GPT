import { React } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GPTsearch from "./GPTsearch.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTsearch = useSelector((store) => store.gpt.showGPTsearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGPTsearch ? (
        <GPTsearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
