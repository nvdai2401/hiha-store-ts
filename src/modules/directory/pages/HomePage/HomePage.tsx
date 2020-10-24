import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { increment } from 'modules/user/state/user.slice';
import { selectedCurrentUser } from 'modules/user/state/user.selectors';

import { NavBar } from 'components';

import { Directory } from './components';

type Props = RouteComponentProps;

function HomePage(props: Props): React.ReactElement {
  const count = useSelector(selectedCurrentUser);
  const dispatch = useDispatch();

  return (
    <>
      <NavBar currentUser={{}} hidden={false} signOutStart={() => {}} />
      <Directory {...props} />
    </>
  );
}

export default HomePage;
