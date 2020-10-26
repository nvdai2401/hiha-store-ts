import { all, call } from 'redux-saga/effects';

import { userSagas } from 'modules/user/state/user.sagas';
import { directorySaga } from 'modules/directory/state/directory.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(directorySaga)]);
}
