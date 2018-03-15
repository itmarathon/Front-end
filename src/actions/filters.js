/* eslint-disable arrow-body-style, arrow-parens, import/prefer-default-export */
const setFilterAction = filter => ({ type: 'SET_FILTER', payload: filter });

export const setFilter = (filter) => (dispatch) => {
  dispatch(setFilterAction(filter));
};