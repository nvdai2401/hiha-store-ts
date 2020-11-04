import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'modules/cart/state/cart.selectors';

import {
  CustomButton as GoToCheckoutButton,
  CustomButton as ExploreMoreButton,
} from 'components';
import { CartItem } from 'modules/cart/components';

type Props = {
  open: boolean;
  isEmpty: boolean;
  hideCart: () => void;
};

function Cart(props: Props): React.ReactElement {
  const { open, isEmpty, hideCart } = props;
  const history = useHistory();
  const items = useSelector(selectCartItems);

  return (
    <div className={`o-drawer c-cart ${open ? 'is-visible' : 'is-invisible'}`}>
      <div className="c-cart__header p-b-12">
        <span>Your cart</span>
        <span onClick={hideCart} className="pointer">
          &#10005;
        </span>
      </div>
      <div className="c-cart__items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <span className="is-empty">Your cart is empty!</span>
        )}
      </div>

      {!isEmpty ? (
        <GoToCheckoutButton onClick={() => history.push('/checkout')}>
          GO TO CHECKOUT
        </GoToCheckoutButton>
      ) : (
        <ExploreMoreButton onClick={() => history.push('/shop')}>
          EXPLORE MORE
        </ExploreMoreButton>
      )}
    </div>
  );
}

export default Cart;
