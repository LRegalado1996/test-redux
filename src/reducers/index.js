import { combineReducers } from 'redux';

import superheroesReducer from './superheroesReducer';
import tabBarReducer from './tabBarReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  superheroes: superheroesReducer,
  tabId: tabBarReducer,
  dataReducer
});
