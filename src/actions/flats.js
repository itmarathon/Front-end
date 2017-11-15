/* eslint-disable import/prefer-default-export */
import Api from '../services/api';

const setFlatsAction = flats => ({ type: 'SET_FLATS', payload: flats });

export const getFlats = () => async (dispatch) => {
  const flats = Api.getFlats();
  dispatch(setFlatsAction(flats));
};