import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTmovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black opacity-90 -mx-4">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            title={movieName}
            key={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTmovieSuggestions;
