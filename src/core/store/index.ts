import configureAppStore from './store';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const initialState = {};

const store = configureAppStore(initialState);

export { store, rootSaga, rootReducer };
