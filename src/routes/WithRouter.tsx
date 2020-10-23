import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'core/config';

import { IRoutePages } from 'definitions/routes';
import Routes from './Routes';

type Props = {
  pages: IRoutePages[];
};

function WithRouter(props: Props): React.ReactElement {
  return (
    <ConnectedRouter history={history}>
      <Routes {...props} />
    </ConnectedRouter>
  );
}

export default WithRouter;
