import { combineReducers } from '@reduxjs/toolkit';

export let rootReducer = combineReducers({});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
