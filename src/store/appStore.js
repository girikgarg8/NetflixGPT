import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import moviesReducer from "../slice/moviesSlice";
import gptReducer from "../slice/gptSlice";

const reducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  gpt: gptReducer,
});

const appStore = configureStore({
  reducer,
});

export default appStore;
