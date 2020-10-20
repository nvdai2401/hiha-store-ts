import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { UserInfo } from 'modules/user/pages';
import { store, persistor } from './core/store';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserInfo />
      </PersistGate>
    </Provider>
  );
}

export default App;
