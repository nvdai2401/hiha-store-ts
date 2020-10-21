import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'core/config';

import Routes from './Routes';

function WithRouter(props) {
  return (
    <ConnectedRouter history={history}>
      <Routes {...props} />
    </ConnectedRouter>
  );
}

export default WithRouter;
