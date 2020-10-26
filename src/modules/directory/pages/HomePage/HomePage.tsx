import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { increment } from 'modules/user/state/user.slice';
import { selectedCurrentUser } from 'modules/user/state/user.selectors';

import { Directory } from './components';

function HomePage(): React.ReactElement {
  const count = useSelector(selectedCurrentUser);
  const dispatch = useDispatch();

  return <Directory />;
}

export default HomePage;
