import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOutStart } from 'modules/user/state/user.slice';
import {
  selectCartVisible,
  selectCartItems,
} from 'modules/cart/state/cart.selectors';
import { selectCurrentUser } from 'modules/user/state/user.selectors';

import { AddToCartButton } from 'components';
import { UserProfile } from 'common/icons';
import { CartItem } from 'modules/cart/components';

function DropdownMenu(): React.ReactElement {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

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
        <li
          className="dropdown-menu__nav-list__item"
          onClick={() => dispatch(signOutStart())}
        >
          Sign out
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
