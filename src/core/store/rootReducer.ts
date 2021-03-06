import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { history } from 'core/config';

import userReducer from 'modules/user/state/user.slice';
import directoryReducer from 'modules/directory/state/directory.slice';
import shopReducer from 'modules/shop/state/shop.slice';
import cartReducer from 'modules/cart/state/cart.slice';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    shop: shopReducer,
    cart: cartReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
