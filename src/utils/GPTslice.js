import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "gpt",
  initialState: {
    showGPTsearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTsearchView: (state) => {
      state.showGPTsearch = !state.showGPTsearch;
    },
    addGPTmovieResult: (state, action) => {
      let { movieNames, movieResults } = action.payload;
      movieResults = movieResults.sort((a, b) => b.length - a.length);
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGPTResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGPTsearchView, addGPTmovieResult, clearGPTResults } =
  GPTslice.actions;

export default GPTslice.reducer;
