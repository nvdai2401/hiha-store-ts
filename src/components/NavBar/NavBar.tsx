import React, { useState } from 'react';
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
import { CartIcon, DropdownMenu, Overlay, Drawer } from 'components';
import { Cart } from 'modules/cart/components';

function NavBar(): React.ReactElement {
  const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);
  const currentUser = useCurrentUser();
  const cartVisible = useSelectCartVisible();
  const itemCount = useSelectCartItemCount();
  const showCart = useShowCart();
  const hideCart = useHideCart();

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
    <>
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
              <User
                className="nav-bar__logo pointer"
                onClick={handleOnToggleDropdownMenu}
              />
            ) : (
              <Link to="/sign-in">Sign in</Link>
            )}
          </li>
        </ul>
        <div className="nav-bar__cart">
          <CartIcon itemCount={itemCount} toggleCart={handleToggleCart} />
        </div>

        {/* <DropdownMenu
        open={dropdownMenuVisible}
        onClose={() => setDropdownMenuVisible(false)}
      /> */}
      </header>
      <Cart open={cartVisible} isEmpty={itemCount === 0} hideCart={hideCart} />
      <Overlay
        open={cartVisible || dropdownMenuVisible}
        onClose={() => handleToggleCart()}
      />
      <Drawer
        open={dropdownMenuVisible}
        onClose={() => setDropdownMenuVisible(false)}
      />
    </>
  );
}

export default NavBar;
