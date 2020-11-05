import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'core/config';

import { IRoutePages } from 'common/definitions/routes';
import { ScrollToTop, HideCart } from 'components';
import { AppRoutes } from './components';

type Props = {
  pages: IRoutePages[];
};

function WithRouter(props: Props): React.ReactElement {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <HideCart />
      <AppRoutes {...props} />
    </ConnectedRouter>
  );
}

export default WithRouter;