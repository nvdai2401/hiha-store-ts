import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'modules/cart/state/cart.selectors';

import { AddToCartButton } from 'components';
import { CartItem } from 'modules/cart/components';

type Props = {
  hideCart: () => void;
};

function Cart(props: Props): React.ReactElement {
  const { hideCart } = props;
  const history = useHistory();
  const items = useSelector(selectCartItems);

  return (
    <div className="cart">
      <div className="cart__header">
        <span>Your cart</span>
        <span onClick={hideCart} className="cart__header__close-icon">
          &#10005;
        </span>
      </div>
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
