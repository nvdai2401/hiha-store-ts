import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { history } from 'core/config';

import userReducer from 'modules/user/state/user.slice';
import directoryReducer from 'modules/directory/state/directory.slice';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
