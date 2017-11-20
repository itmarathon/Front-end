export const initialState = {
  rentalTypes: [],
  cities: [],
};

const flats = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RENTAL_TYPES_LIST':
      return { ...state, rentalTypes: action.payload };

    case 'SET_CITIES_LIST':
      return { ...state, cities: action.payload };

    default:
      return state;
  }
};

export default flats;
