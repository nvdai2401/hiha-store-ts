import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IRoutePages } from 'definitions/routes';
import { useCurrentUser } from 'hooks/state/userState';

import { SIGN_IN_PAGE_PATH, SIGN_UP_PAGE_PATH } from 'modules/user/config';
import { HOME_PAGE_PATH } from 'modules/directory/config';

interface IAppRoutesProps {
  pages: IRoutePages[];
}

function AppRoutes(props: IAppRoutesProps): React.ReactElement {
  const { pages } = props;
  const currentUser = useCurrentUser();

  return (
    <Switch>
      {pages.map((page) => {
        return (
          <Route
            key={page.title}
            path={page.path}
            exact={page.exact}
            render={(routeProps) => {
              const { history, location } = routeProps;
              const Layout = page.layout;
              const Component = page.component;

              if (
                (location.pathname === SIGN_IN_PAGE_PATH ||
                  location.pathname === SIGN_UP_PAGE_PATH) &&
                currentUser.id
              ) {
                history.push(HOME_PAGE_PATH);
              }

              return (
                <Layout>
                  <Component />
                </Layout>
              );
            }}
          />
        );
      })}
    </Switch>
  );
}

export default AppRoutes;
