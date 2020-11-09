import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { IRoute } from 'common/definitions/routes';
import { useCurrentUser, useCheckUserSession } from 'hooks/state/userState';

import { Spinner } from 'components';

import { SIGN_IN_PAGE_PATH, SIGN_UP_PAGE_PATH } from 'modules/user/config';
import { HOME_PAGE_PATH } from 'modules/directory/config';
import { NOT_FOUND_PAGE_PATH } from 'common/pages';

type AppRoutesProps = {
  routes: IRoute[];
};

const AppRoutes: React.FC<AppRoutesProps> = (props: AppRoutesProps) => {
  const { routes } = props;
  const currentUser = useCurrentUser();
  const checkUserSession = useCheckUserSession();

  useEffect(() => {
    if (!currentUser.id) {
      checkUserSession();
    }
  }, [checkUserSession, currentUser.id]);

  const checkUserAuth = (location, history) => {
    if (
      (location.pathname === SIGN_IN_PAGE_PATH ||
        location.pathname === SIGN_UP_PAGE_PATH) &&
      currentUser.id
    ) {
      history.push(HOME_PAGE_PATH);
    }
  };

  const updatePageTitle = (title) => {
    document.title = title ? `${title} | HiHa Store` : 'HiHa Store';
  };

  const beforeRender = ({ location, history }, page) => {
    checkUserAuth(location, history);
    updatePageTitle(page.title);
  };

  return (
    <Switch>
      {routes.map((page) => {
        return (
          <Route
            key={page.path}
            path={page.path}
            exact={page.exact}
            render={(routeProps) => {
              const Layout = page.layout;
              const Component = page.component;

              beforeRender(routeProps, page);

              return (
                <Suspense fallback={<Spinner classes="m-t-210" />}>
                  <Layout>
                    <Component />
                  </Layout>
                </Suspense>
              );
            }}
          />
        );
      })}
      <Redirect to={NOT_FOUND_PAGE_PATH} />
    </Switch>
  );
};

export default AppRoutes;
