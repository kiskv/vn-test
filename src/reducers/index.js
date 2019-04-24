import { combineReducers } from "redux";
import { itemsReducer } from "./itemsReducer";
import { pageReducer } from "./pageReducer";

export default () =>
  combineReducers({
    items: itemsReducer,
    page: pageReducer
  });
