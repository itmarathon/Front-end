/* eslint-disable arrow-body-style, arrow-parens */
import Api from '../services/api';

const setFlatsAction = flats => ({ type: 'SET_FLATS', payload: flats });
const setCitiesAction = cities => ({ type: 'SET_CITIES_LIST', payload: cities });
const setRentalTypesAction = cities => ({ type: 'SET_RENTAL_TYPES_LIST', payload: cities });

export const getFlats = () => (dispatch) => {
  const flats = Api.getFlats();
  dispatch(setFlatsAction(flats));
};

export const getCities = () => (dispatch) => {
  return Api.getCities().then(cities => {
    dispatch(setCitiesAction(cities));
  });
};

export const getRentalTypes = () => (dispatch) => {
  return Api.getRentalTypes().then(types => {
    dispatch(setRentalTypesAction(types));
  });
};