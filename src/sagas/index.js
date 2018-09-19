import { all, fork } from 'redux-saga/effects';
import { watchPhones } from './phones';

export default function* rootSagas() {
  yield all([
    fork(watchPhones)
  ]);
}
