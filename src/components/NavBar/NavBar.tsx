import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useCurrentUser } from 'hooks/state/userState';
import {
  useSelectCartVisible,
  useSelectCartItemCount,
  useShowCart,
  useHideCart,
} from 'hooks/state/cartState';

import { ReactComponent as Logo } from 'assets/svg/crown.svg';
import { ReactComponent as User } from 'assets/svg/user.svg';
import { CartIcon, DropdownMenu } from 'components';
import { Cart } from 'modules/cart/components';

function NavBar(): React.ReactElement {
  const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);
  const currentUser = useCurrentUser();
  const cartVisible = useSelectCartVisible();
  const itemCount = useSelectCartItemCount();
  const showCart = useShowCart();
  const hideCart = useHideCart();

  useEffect(() => {
    // cartVisible && document.body.style.overflow = 'hidden';
    // !cartVisible && document.body.style.overflow = 'unset';
  }, [cartVisible]);

  const handleToggleCart = () => {
    if (dropdownMenuVisible) {
      setDropdownMenuVisible(false);
    }
    if (cartVisible) {
      hideCart();
      return;
    }
    showCart();
  };

  const handleOnToggleDropdownMenu = () => {
    if (cartVisible) {
      hideCart();
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
      </div>
      <Cart open={cartVisible} isEmpty={itemCount === 0} hideCart={hideCart} />
      <div
        className={`overlay ${cartVisible ? 'is-visible' : ''}`}
        onClick={() => handleToggleCart()}
      />
    </header>
  );
}

export default NavBar;
