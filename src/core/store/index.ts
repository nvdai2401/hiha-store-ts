import { persistStore } from 'redux-persist';
import configureAppStore from './store';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const initialState = {};

const store = configureAppStore(initialState);

const persistor = persistStore(store);

export { store, persistor, rootSaga, rootReducer };
export type RootState = ReturnType<typeof store.getState>;
