import { combineReducers } from 'redux';
import flat from './flat';
import flats from './flats';
import lists from './lists';
import filters from './filters';
import sorting from './sorting';

const rootReducer = combineReducers({
  flat,
  flats,
  lists,
  filters,
  sorting,
});

export default rootReducer;
