import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { showCart, hideCart } from 'modules/cart/state/cart.slice';
import {
  selectCartHidden,
  selectCartItemCount,
} from 'modules/cart/state/cart.selectors';

import { ReactComponent as Logo } from 'assets/svg/crown.svg';
import { Cart, CartIcon } from 'components';

function NavBar(): React.ReactElement {
  const hidden = useSelector(selectCartHidden);
  const itemCount = useSelector(selectCartItemCount);
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    if (hidden) {
      dispatch(hideCart());
      return;
    }
    dispatch(showCart());
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
          <Link to="/sing-in">Sign in</Link>
        </li>
      </ul>
      <div className="nav-bar__cart">
        <CartIcon itemCount={itemCount} toggleCart={handleToggleCart} />
        {hidden ? <Cart /> : null}
      </div>
    </header>
  );
}

export default NavBar;
