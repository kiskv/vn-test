import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
  CLEAR_ITEMS
} from "../actions/itemsActions";

export function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload.id);
    case CHANGE_ITEM:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case CLEAR_ITEMS:
      return [];
    default:
      return state;
  }
}
