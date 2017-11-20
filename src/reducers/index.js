import { combineReducers } from 'redux';
import flat from './flat';
import flats from './flats';
import lists from './lists';
import filters from './filters';

const rootReducer = combineReducers({
  flat,
  flats,
  lists,
  filters,
});

export default rootReducer;
