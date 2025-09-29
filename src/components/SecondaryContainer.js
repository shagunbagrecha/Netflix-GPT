import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          {/* <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} /> */}
        </div>

        <MovieCard />
        {/* 
          Movie List - Popular Movies, Trending Movies, Top Rated Movies
            multiple movie cards - cards * n
          TV Shows List - Popular TV Shows, Trending TV Shows, Top Rated TV Shows
          Each list item should be clickable and lead to a detailed view of the movie or TV show.
        */}
      </div>
    )
  );
};

export default SecondaryContainer;
