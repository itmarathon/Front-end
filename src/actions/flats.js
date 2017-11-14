import { getFlats as getFlatsApi } from '../services/api';

export const setFlatsAction = flats => ({ type: 'SET_FLATS', payload: flats });

export const getFlats = () => (dispatch) => {
  return getFlatsApi()
    .then((flats) => {
      dispatch(setFlatsAction(flats));
    });
};