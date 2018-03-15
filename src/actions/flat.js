/* eslint-disable arrow-body-style, arrow-parens, import/prefer-default-export */
import Api from '../services/api';

const setFlatAction = flat => ({ type: 'SET_FLAT', payload: flat });
const getFlatRequestAction = () => ({ type: 'GET_FLAT_REQUEST' });
const getFlatSuccessAction = () => ({ type: 'GET_FLAT_SUCCESS' });

export const getFlat = (id) => (dispatch) => {
  dispatch(getFlatRequestAction());
  return Api.getFlat(id).then(flat => {
    dispatch(setFlatAction(flat));
    dispatch(getFlatSuccessAction());
  });
};
