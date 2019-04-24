import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";
import initialState from "./initialState";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : initialState;

export const store = createStore(
  rootReducer(),
  persistedState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
