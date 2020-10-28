import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { showCart, hideCart } from 'modules/cart/state/cart.slice';
import {
  selectCartHidden,
  selectCartItems,
} from 'modules/cart/state/cart.selectors';

import { AddToCartButton } from 'components';
import { CartItem } from 'modules/cart/components';

function Cart(): React.ReactElement {
  const history = useHistory();
  const items = useSelector(selectCartItems);

  return (
    <div className="cart">
      <div className="cart__items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <span className="is-empty">Your cart is empty!</span>
        )}
      </div>
      <AddToCartButton onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </AddToCartButton>
    </div>
  );
}

export default Cart;
