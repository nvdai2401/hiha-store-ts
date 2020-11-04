import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCurrentUser } from 'hooks/state/userState';
import {
  useSelectCartVisible,
  useSelectCartItemCount,
  useShowCart,
  useHideCart,
} from 'hooks/state/cartState';

import { ShoppingBag, UserOptionsMenu, Overlay } from 'components';
import { MiniCart } from 'modules/cart/components';
import { CrownIcon, UserIcon } from 'common/icons';

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
      <header className="c-nav-bar m-b-24">
        <Link to="/" className="c-nav-bar__logo">
          <CrownIcon className="c-nav-bar__logo" />
        </Link>
        <ul className="c-nav-bar__nav-list m-r-24 o-list-bare">
          <li className="c-nav-bar__nav-list__item ">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="c-nav-bar__nav-list__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="c-nav-bar__nav-list__item">
            {currentUser.id ? (
              <UserIcon
                className="c-nav-bar__logo pointer"
                onClick={handleOnToggleDropdownMenu}
              />
            ) : (
              <Link to="/sign-in">Sign in</Link>
            )}
          </li>
        </ul>
        <div className="c-nav-bar__cart">
          <ShoppingBag quantity={itemCount} toggleCart={handleToggleCart} />
        </div>
      </header>
      <MiniCart
        open={cartVisible}
        isEmpty={itemCount === 0}
        hideCart={hideCart}
      />

      <UserOptionsMenu
        open={dropdownMenuVisible}
        onClose={() => setDropdownMenuVisible(false)}
      />

      <Overlay
        open={cartVisible || dropdownMenuVisible}
        onClose={() => {
          hideCart();
          setDropdownMenuVisible(false);
        }}
      />
    </>
  );
}

export default NavBar;
