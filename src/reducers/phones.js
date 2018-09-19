import { normalize } from '../utils';

import {
  ALL_PHONES_SET
} from '../actions/phones';

const initialPhones = {
  phones: {},
  phonesByName: []
};

export function phones(state = initialPhones, action) {
  let nextState;
  switch (action.type) {
    case ALL_PHONES_SET: {
      const phonesRaw = action.payload.phones;
      const {phones, phonesByName} = normalize(phonesRaw, 'phone', 'DeviceName');

      nextState = {
        phones,
        phonesByName
      };

      break;
    }
    default:
      return state;
  }
  return nextState || state;
}
