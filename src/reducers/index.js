import { combineReducers } from 'redux';
import flats from './flats';
import lists from './lists';
import filters from './filters';
import sorting from './sorting';

const rootReducer = combineReducers({
  flats,
  lists,
  filters,
  sorting,
});

export default rootReducer;
