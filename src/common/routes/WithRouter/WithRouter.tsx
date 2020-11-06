import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'core/config';

import { IRoute } from 'common/definitions/routes';
import { ScrollToTop, HideCart } from 'components';
import { AppRoutes } from './components';

type Props = {
  routes: IRoute[];
};

const WithRouter: React.FC<Props> = (props: Props) => {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <HideCart />
      <AppRoutes {...props} />
    </ConnectedRouter>
  );
};

export default WithRouter;
