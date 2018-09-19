/* eslint no-console: 0 */

import { put, takeLatest, call } from 'redux-saga/effects';

// Actions
import { PHONES_FETCH, phonesSet } from '../actions/phones';
import { mainLoading } from '../actions/commons';

// Srvs
import { getPhones } from '../services/phones';

export function* phonesProcess() {
  try {
    const phones = yield call(getPhones, { baseUrl: 'https://ci-workshop-server.herokuapp.com'});
    yield put(phonesSet(phones));
    yield put(mainLoading(false));
  } catch (error) {
    yield console.log(error);
    yield put(mainLoading(false));
  }
}

export function* watchPhones() {
  yield takeLatest(PHONES_FETCH, phonesProcess);
}
