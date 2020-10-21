import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { userPages } from 'modules/user/config';
import { WithRouter } from 'routes';
import { store, persistor } from './core/store';

function App(): React.ReactElement {
  const pages = [...userPages];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WithRouter pages={pages} />
      </PersistGate>
    </Provider>
  );
}

export default App;
