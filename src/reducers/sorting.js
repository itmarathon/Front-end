export const initialState = 'desc';

const sorting = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return action.payload;

    default:
      return state;
  }
};

export default sorting;
