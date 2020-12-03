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

import { HOME_PAGE_PATH } from 'modules/directory/config';
import { SHOP_PAGE_PATH } from 'modules/shop/config';
import { CONTACT_PAGE_PATH } from 'modules/user/config';

const NavBar: React.FC = () => {
  const [userOptionsMenuVisible, setUserOptionsMenuVisible] = useState(false);
  const currentUser = useCurrentUser();
  const cartVisible = useSelectCartVisible();
  const itemCount = useSelectCartItemCount();
  const showCart = useShowCart();
  const hideCart = useHideCart();

  const handleToggleCart = () => {
    if (userOptionsMenuVisible) {
      setUserOptionsMenuVisible(false);
    }

    if (cartVisible) {
      hideCart();
      return;
    }

    showCart();
  };

  const handleOnToggleUserOptionsMenu = () => {
    if (cartVisible) {
      hideCart();
    }

    setUserOptionsMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      <header className="c-nav-bar m-b-24">
        <Link to={HOME_PAGE_PATH} className="c-nav-bar__logo">
          <CrownIcon className="c-nav-bar__logo" />
        </Link>
        <ul className="c-nav-bar__nav-list m-r-24 o-list-bare">
          <li className="c-nav-bar__nav-list__item ">
            <Link to={SHOP_PAGE_PATH}>Shop</Link>
          </li>
          <li className="c-nav-bar__nav-list__item">
            <Link to={CONTACT_PAGE_PATH}>Contact</Link>
          </li>
          <li className="c-nav-bar__nav-list__item">
            {currentUser.id ? (
              <UserIcon
                className="c-nav-bar__logo pointer"
                onClick={handleOnToggleUserOptionsMenu}
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

      {cartVisible && (
        <MiniCart
          open={cartVisible}
          isEmpty={itemCount === 0}
          hideCart={hideCart}
        />
      )}

      {userOptionsMenuVisible && (
        <UserOptionsMenu
          open={userOptionsMenuVisible}
          onClose={() => setUserOptionsMenuVisible(false)}
        />
      )}

      {(cartVisible || userOptionsMenuVisible) && (
        <Overlay
          open={cartVisible || userOptionsMenuVisible}
          onClose={() => {
            hideCart();
            setUserOptionsMenuVisible(false);
          }}
        />
      )}
    </>
  );
};

export default NavBar;
