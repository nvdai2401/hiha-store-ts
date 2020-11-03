import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { IRoutePages } from 'common/definitions/routes';
import { useCurrentUser } from 'hooks/state/userState';

import { SIGN_IN_PAGE_PATH, SIGN_UP_PAGE_PATH } from 'modules/user/config';
import { HOME_PAGE_PATH } from 'modules/directory/config';
import { NOT_FOUND_PAGE_PATH } from 'common/pages';

type AppRoutesProps = {
  pages: IRoutePages[];
};

function AppRoutes(props: AppRoutesProps): React.ReactElement {
  const { pages } = props;
  const currentUser = useCurrentUser();

  const beforeRender = ({ location, history }) => {
    if (
      (location.pathname === SIGN_IN_PAGE_PATH ||
        location.pathname === SIGN_UP_PAGE_PATH) &&
      currentUser.id
    ) {
      history.push(HOME_PAGE_PATH);
    }
  };

  return (
    <Switch>
      {pages.map((page) => {
        return (
          <Route
            key={page.title}
            path={page.path}
            exact={page.exact}
            render={(routeProps) => {
              const Layout = page.layout;
              const Component = page.component;

              beforeRender(routeProps);

              return (
                <Layout>
                  <Component />
                </Layout>
              );
            }}
          />
        );
      })}
      <Redirect to={NOT_FOUND_PAGE_PATH} />
    </Switch>
  );
}

export default AppRoutes;
