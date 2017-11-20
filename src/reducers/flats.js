export const initialState = {
  data: [],
  isLoading: false,
};

const flats = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FLATS':
      return { ...state, data: action.payload };
    case 'GET_FLATS_REQUEST':
      return { ...state, isLoading: true };
    case 'GET_FLATS_SUCCESS':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default flats;
