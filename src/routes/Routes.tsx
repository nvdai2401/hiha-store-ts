import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IRoutePages } from 'definitions/routes';
import { useAuthUser } from 'hooks/user';

import { SIGN_IN_PAGE_PATH } from 'modules/user/config';
import { HOME_PAGE_PATH } from 'modules/directory/config';

interface IRoutesProps {
  pages: IRoutePages[];
}

function Routes(props: IRoutesProps): React.ReactElement {
  const { pages } = props;
  const isUserAuthenticated = useAuthUser();

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
              if (
                location.pathname === SIGN_IN_PAGE_PATH &&
                isUserAuthenticated
              ) {
                history.push(HOME_PAGE_PATH);
              }
              const Layout = page.layout;
              const Component = page.component;

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

export default Routes;
