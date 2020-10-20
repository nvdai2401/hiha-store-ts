import { all, call } from 'redux-saga/effects';

import { userSagas } from 'modules/user/state/user.sagas';

export default function* rootSaga() {
  yield all([call(userSagas)]);
}
