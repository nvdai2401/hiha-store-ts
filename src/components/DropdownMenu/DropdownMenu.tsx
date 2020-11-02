import React from 'react';
import { Link } from 'react-router-dom';

import { useSignOutStart, useCurrentUser } from 'hooks/state/userState';

type Props = {
  open: boolean;
  onClose: () => void;
};

function DropdownMenu(props: Props): React.ReactElement {
  const { open, onClose } = props;
  const currentUser = useCurrentUser();
  const signOutStart = useSignOutStart();

  return (
    <div className={`drawer dropdown-menu  ${open ? 'is-visible' : 'is-invisible'}`}>
      <div className="dropdown-menu__user">
        <span>Signed in as </span>

        <span className="dropdown-menu__user__name">
          {currentUser.displayName}
        </span>
      </div>

      <div onClick={onClose} className="dropdown-menu__close-icon pointer">
        &#10005;
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
