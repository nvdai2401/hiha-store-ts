import React from 'react';
import { NavBar } from 'components';

interface IProps {
  children: React.Component | React.Component[];
}

function Main(props: IProps): React.ReactElement<IProps> {
  const { children } = props;

  return (
    <div className="o-layout-main">
      <NavBar currentUser={{}} hidden={false} signOutStart={() => {}} />
      <main>{children}</main>
    </div>
  );
}

export default Main;
