import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'modules/cart/state/cart.selectors';

import { AddToCartButton } from 'components';
import { CartItem } from 'modules/cart/components';

import { CHECKOUT_PAGE_PATH } from 'modules/cart/config';

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
      <AddToCartButton onClick={() => history.push(CHECKOUT_PAGE_PATH)}>
        GO TO CHECKOUT
      </AddToCartButton>
    </div>
  );
}

export default Cart;
