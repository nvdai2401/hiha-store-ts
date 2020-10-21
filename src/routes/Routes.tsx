import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Routes(props) {
  const { pages } = props;

  return (
    <Switch>
      {pages.map((page) => {
        return (
          <Route
            key={page.title}
            path={page.path}
            exact={page.exact}
            render={(props) => {
              // const Layout = page.layout;
              const Component = page.component;
              console.log(props);
              return (
                <Component {...props} title={page.title} />
                // <Layout pages={pages} {...props}>
                //   <Component {...props} {...route.props} />
                // </Layout>
              );
            }}
          />
        );
      })}
    </Switch>
  );
}

export default Routes;
