export const initialState = {
  city: '',
  type: '',
};

const flats = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default flats;
