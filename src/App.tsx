import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { WithRouter, routes } from 'common/routes';

import { store, persistor } from './core/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WithRouter routes={routes} />
      </PersistGate>
    </Provider>
  );
};

export default App;
