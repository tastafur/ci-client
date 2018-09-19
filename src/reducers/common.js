import {
  IS_LOADING
} from '../actions/commons';

const initialCommon = {
  isLoading: true,
};

export function common(state = initialCommon, action) {
  let nextState;
  switch (action.type) {
    case IS_LOADING:
      nextState = {
        ...state,
        isLoading: action.payload.isLoading
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
