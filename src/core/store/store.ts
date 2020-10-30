import { Store } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleWare from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import { history } from 'core/config';

import createReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureAppStore(initialState = {}): Store {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user'],
  };
  const rootReducer = persistReducer(persistConfig, createReducer());

  const logger = createLogger();
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleWare(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  let middlewares;
  if (process.env.NODE_ENV === 'development') {
    middlewares = [logger, sagaMiddleware, routerMiddleware(history)];
  } else {
    middlewares = [sagaMiddleware, routerMiddleware(history)];
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
