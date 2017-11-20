import { combineReducers } from 'redux';
import flats from './flats';
import lists from './lists';
import filters from './filters';

const rootReducer = combineReducers({
  flats,
  lists,
  filters,
});

export default rootReducer;
