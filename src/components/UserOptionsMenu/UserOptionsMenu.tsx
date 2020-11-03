import React from 'react';
import { Link } from 'react-router-dom';

import { useSignOutStart, useCurrentUser } from 'hooks/state/userState';

type Props = {
  open: boolean;
  onClose: () => void;
};

function UserOptionsMenu(props: Props): React.ReactElement {
  const { open, onClose } = props;
  const currentUser = useCurrentUser();
  const signOutStart = useSignOutStart();

  return (
    <div
      className={`o-drawer c-user-options-menu  ${
        open ? 'is-visible' : 'is-invisible'
      }`}
    >
      <div className="c-user-options-menu__user p-b-4">
        <span>Signed in as </span>

        <span className="c-user-options-menu__user__name">
          {currentUser.displayName}
        </span>
      </div>

      <div
        onClick={onClose}
        className="c-user-options-menu__close-icon pointer"
      >
        &#10005;
      </div>
      <ul className="c-user-options-menu__options o-list-bare">
        <li className="c-user-options-menu__options__item">
          <Link to="/user">Your profile</Link>
        </li>
        <li className="c-user-options-menu__options__item">
          <Link to="/checkout">Cart</Link>
        </li>
        <li
          className="c-user-options-menu__options__item"
          onClick={signOutStart}
        >
          Sign out
        </li>
      </ul>
    </div>
  );
}

export default UserOptionsMenu;
