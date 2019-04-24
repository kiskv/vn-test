import { v1 as uuid } from "uuid";
// Константы
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHANGE_ITEM = "CHANGE_ITEM";
export const CLEAR_ITEMS = "CLEAR_ITEMS";
export const SET_PAGE = "SET_PAGE";

// Создатели действий для приложения

export function addItem() {
  return dispatch => {
    const uniqueId = uuid();
    console.log("button pressed");
    dispatch({
      type: ADD_ITEM,
      payload: {
        id: uniqueId,
        price: 500,
        name: `Торт`
      }
    });
  };
}

export function removeItem(id) {
  return dispatch => {
    dispatch({
      type: REMOVE_ITEM,
      payload: {
        id
      }
    });
  };
}

export function changeItem(item) {
  return dispatch => {
    dispatch({
      type: CHANGE_ITEM,
      payload: item
    });
  };
}

export function clearItems() {
  return dispatch => {
    dispatch({
      type: CLEAR_ITEMS
    });
    dispatch({
      type: SET_PAGE,
      payload: { number: 1, currentItems: [] }
    });
  };
}
