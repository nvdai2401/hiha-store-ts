import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from 'modules/user/state/user.slice';
import { selectedCurrentUser } from 'modules/user/state/user.selectors';

function UserInfo(): React.ReactElement {
  const count = useSelector(selectedCurrentUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <button type="button" onClick={() => dispatch(increment(2))}>
        Increase
      </button>
    </div>
  );
}

export default UserInfo;
