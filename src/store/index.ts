import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./reducers/searchReducer";


export const store = configureStore({
  reducer: {
    todos: searchReducer
  }
})