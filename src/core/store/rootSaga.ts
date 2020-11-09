import { all, call } from 'redux-saga/effects';

import { userSagas } from 'modules/user/state/user.sagas';
import { directorySagas } from 'modules/directory/state/directory.sagas';
import { shopSagas } from 'modules/shop/state/shop.sagas';
import { cartSagas } from 'modules/cart/state/cart.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(directorySagas),
    call(shopSagas),
    call(cartSagas),
  ]);
}
