// Константы
export const SET_PAGE = "SET_PAGE";

export function setPage(page, size) {
  function paginate(array, page_size, page_number) {
    --page_number;
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }
  return (dispatch, getState) => {
    const itemsList = getState().items;
    const currentItems = paginate(itemsList, size, page);
    dispatch({
      type: SET_PAGE,
      payload: { number: page, currentItems }
    });
  };
}
