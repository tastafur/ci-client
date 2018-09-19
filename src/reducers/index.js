import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// actions
import { TOTAL_LOGOUT } from '../actions/root';

// reducers
import { phones } from './phones';
import { common } from './common';

const AppReducer = combineReducers({
  common,
  phones,
  routing
});

const rootReducer = (state, action) => {
  if (action.type === TOTAL_LOGOUT) {
    state = undefined;
  }
  return AppReducer(state, action);
};

export default rootReducer;
