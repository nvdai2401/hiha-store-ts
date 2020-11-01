import React from 'react';
import { Link } from 'react-router-dom';

import { useSignOutStart, useCurrentUser } from 'hooks/state/userState';

function DropdownMenu(): React.ReactElement {
  const currentUser = useCurrentUser();
  const signOutStart = useSignOutStart();

  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu__user">
        <span>Signed in as </span>

        <span className="dropdown-menu__user__name">
          {currentUser.displayName}
        </span>
      </div>
      <ul className="dropdown-menu__nav-list">
        <li className="dropdown-menu__nav-list__item">
          <Link to="/user">Your profile</Link>
        </li>
        <li className="dropdown-menu__nav-list__item">
          <Link to="/checkout">Cart</Link>
        </li>
        <li className="dropdown-menu__nav-list__item" onClick={signOutStart}>
          Sign out
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
