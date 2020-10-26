import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import { IRoutePages } from 'definitions/routes';

interface IRoutesProps {
  pages: IRoutePages[];
}

function Routes(props: IRoutesProps): React.ReactElement {
  const { pages } = props;

  return (
    <Switch>
      {pages.map((page) => {
        return (
          <Route
            key={page.title}
            path={page.path}
            exact={page.exact}
            render={() => {
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
