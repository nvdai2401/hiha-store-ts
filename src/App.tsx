import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { userPages } from 'modules/user/config';
import { directoryPages } from 'modules/directory/config';
import { WithRouter } from 'routes';
import { store, persistor } from './core/store';

function App(): React.ReactElement {
  const pages = [...userPages, ...directoryPages];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WithRouter pages={pages} />
      </PersistGate>
    </Provider>
  );
}

export default App;
