import { combineReducers } from 'redux';
import flats from './flats';
import lists from './lists';

const rootReducer = combineReducers({
  flats,
  lists,
});

export default rootReducer;
