export const initialState = {
  data: [],
  isLoading: false,
};

const flat = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FLAT':
      return { ...state, data: action.payload };
    case 'GET_FLAT_REQUEST':
      return { ...state, isLoading: true };
    case 'GET_FLAT_SUCCESS':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default flat;
