import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from 'common/definitions/routes';

import { SIGN_IN_PAGE_PATH } from 'modules/user/config';

function RouteWithSubRoutes(route: IRoute) {
  const authenticated = false;

  const changeDocumentTitle = (title) => {
    document.title = title ? `${title} | HiHa Store` : 'Unknown title';
  };

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) => {
          const Layout = route.layout;
          const Component = route.component;

          changeDocumentTitle(route.title);

          if (route.redirect) {
            return <Redirect to={route.redirect} />;
          }

          if (route.private) {
            if (authenticated) {
              return (
                <Layout>
                  <Component />
                </Layout>
              );
            }
            return <Redirect to={SIGN_IN_PAGE_PATH} />;
          }

          return (
            <Layout>
              <Component />
            </Layout>
          );
        }}
      />
    </Suspense>
  );
}

export default RouteWithSubRoutes;
