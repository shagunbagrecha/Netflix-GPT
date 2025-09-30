import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import GPTreducer from "./GPTslice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GPTreducer,
    config: configReducer,
},
});

export default appStore;