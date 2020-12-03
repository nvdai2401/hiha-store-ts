import React from 'react';
import { Link } from 'react-router-dom';

import { useSignOutStart, useCurrentUser } from 'hooks/state/userState';

import { USER_INFO_PAGE_PATH } from 'modules/user/config';
import { CHECKOUT_PAGE_PATH } from 'modules/cart/config';

type Props = {
  open: boolean;
  onClose: () => void;
};

const UserOptionsMenu: React.FC<Props> = (props: Props) => {
  const { open, onClose } = props;
  const currentUser = useCurrentUser();
  const signOutStart = useSignOutStart();

  return (
    <div
      className={`o-drawer c-user-options-menu  ${
        open ? 'is-visible' : 'is-invisible'
      }`}
    >
      <div className="c-user-options-menu__user p-b-6">
        <span>Signed in as </span>

        <span className="c-user-options-menu__user__name bold">
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
          <Link to={USER_INFO_PAGE_PATH}>Your profile</Link>
        </li>
        <li className="c-user-options-menu__options__item">
          <Link to={CHECKOUT_PAGE_PATH}>Cart</Link>
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
};

export default React.memo(UserOptionsMenu);
