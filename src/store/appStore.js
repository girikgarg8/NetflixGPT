import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import moviesReducer from "../slice/moviesSlice";

const reducer = combineReducers({
  user: userReducer,
  movies: moviesReducer
});

const appStore = configureStore({
  reducer,
});

export default appStore;
