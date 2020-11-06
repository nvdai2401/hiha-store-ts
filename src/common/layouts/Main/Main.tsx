import React from 'react';
import { NavBar } from 'components';

import { ILayout } from 'common/definitions/routes';

const Main: React.FC<ILayout> = (props: ILayout) => {
  const { children } = props;

  return (
    <div className="o-layout-main">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Main;
