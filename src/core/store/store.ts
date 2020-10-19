import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';

import createReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureAppStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleWare(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  sagaMiddleware.run(rootSaga);
  return store;
}
