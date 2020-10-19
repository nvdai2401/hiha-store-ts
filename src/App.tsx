import React from 'react';
import { Provider } from 'react-redux';

import { store } from './core/store';

const App = (): React.ReactElement => {
  return <Provider store={store}>React app</Provider>;
};

export default App;
