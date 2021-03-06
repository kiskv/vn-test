import { SET_PAGE } from "../actions/pageActions";

export function pageReducer(state = {}, action) {
  switch (action.type) {
    case SET_PAGE:
      return { ...action.payload };
    default:
      return state;
  }
}
