import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'modules/user/state/user.slice';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

// export type RootState = ReturnType<typeof rootReducer>;
