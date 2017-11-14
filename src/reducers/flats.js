export const initialState = {
  data: [],
};

const flats = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FLATS':
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default flats;
