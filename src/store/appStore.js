import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

const reducer = combineReducers({
  user: userReducer,
});

const appStore = configureStore({
  reducer,
});

export default appStore;
