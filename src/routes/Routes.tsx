import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IRoutePages } from 'definitions/routes';

import { selectCurrentUser } from 'modules/user/state/user.selectors';
import { SIGN_IN_PAGE_PATH } from 'modules/user/config';
import { HOME_PAGE_PATH } from 'modules/directory/config';

interface IRoutesProps {
  pages: IRoutePages[];
}

function Routes(props: IRoutesProps): React.ReactElement {
  const currentUser = useSelector(selectCurrentUser);
  const { pages } = props;

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

              if (location.pathname === SIGN_IN_PAGE_PATH && currentUser.id) {
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

export default Routes;
