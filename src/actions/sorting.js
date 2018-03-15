/* eslint-disable arrow-body-style, arrow-parens, import/prefer-default-export */
import { getFlats } from './flats';

export const setSorting = (sorting) => (dispatch) => {
  dispatch({ type: 'SET_SORT', payload: sorting });
  dispatch(getFlats(sorting));
};