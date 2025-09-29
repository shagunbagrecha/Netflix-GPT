import { React } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* Main Container
           - VideoBackground
           - VideoTitle
        - Secondary Container
            - MovieList * n
              - MovieCard * n
      */}
    </div>
  );
};

export default Browse;
