import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { showCart, hideCart } from 'modules/cart/state/cart.slice';
import {
  selectCartVisible,
  selectCartItemCount,
} from 'modules/cart/state/cart.selectors';
import { selectCurrentUser } from 'modules/user/state/user.selectors';

import { ReactComponent as Logo } from 'assets/svg/crown.svg';
import { ReactComponent as User } from 'assets/svg/user.svg';
import { CartIcon, DropdownMenu } from 'components';
import { Cart } from 'modules/cart/components';

function NavBar(): React.ReactElement {
  const dispatch = useDispatch();
  const cartVisible = useSelector(selectCartVisible);
  const itemCount = useSelector(selectCartItemCount);
  const currentUser = useSelector(selectCurrentUser);
  const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);

  const handleToggleCart = () => {
    if (dropdownMenuVisible) {
      setDropdownMenuVisible(false);
    }
    if (cartVisible) {
      dispatch(hideCart());
      return;
    }
    dispatch(showCart());
  };

  const handleOnToggleDropdownMenu = () => {
    if (cartVisible) {
      dispatch(hideCart());
    }
    setDropdownMenuVisible(!dropdownMenuVisible);
  };

  return (
    <header className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <Logo className="nav-bar__logo" />
      </Link>
      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-list__item">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-bar__nav-list__item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-bar__nav-list__item">
          {currentUser.id ? (
            <>
              <User
                className="nav-bar__logo"
                onClick={handleOnToggleDropdownMenu}
              />
              {dropdownMenuVisible ? <DropdownMenu /> : null}
            </>
          ) : (
            <Link to="/sign-in">Sign in</Link>
          )}
        </li>
      </ul>
      <div className="nav-bar__cart">
        <CartIcon itemCount={itemCount} toggleCart={handleToggleCart} />
        {cartVisible ? <Cart /> : null}
      </div>
    </header>
  );
}

export default NavBar;
