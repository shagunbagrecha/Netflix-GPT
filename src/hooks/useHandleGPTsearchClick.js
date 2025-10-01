import { useCallback } from "react";
import openai from "../utils/openai";
import { addGPTmovieResult, clearGPTResults } from "../utils/GPTslice";
import useSearchMovieTMDB from "../hooks/useSearchMovieTMDB";
import { useDispatch } from "react-redux";

const useHandleGPTsearchClick = (searchTextRef) => {
  const searchMovieTMDB = useSearchMovieTMDB();
  const dispatch = useDispatch();

  //Make an API call to GPT API get the Movie Results.

  const handleClick = useCallback(async () => {
    dispatch(clearGPTResults());
    const queryText = searchTextRef.current?.value ?? "";
    if (!queryText.trim()) return;

    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query: " +
      queryText +
      ". only give me names of 5 movies, comma separated.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o",
    });

    const gptMovieList =
      gptResults.choices?.[0]?.message?.content?.split(", ").filter(Boolean) ??
      [];

    const tmdbResults = await Promise.all(
      gptMovieList.map((movie) => searchMovieTMDB(movie))
    );

    dispatch(
      addGPTmovieResult({
        movieNames: gptMovieList, // the 5 titles from GPT
        movieResults: tmdbResults, // the TMDB searches for those titles
      })
    );
  }, [searchMovieTMDB, dispatch, searchTextRef]);

  return handleClick;
};

export default useHandleGPTsearchClick;
