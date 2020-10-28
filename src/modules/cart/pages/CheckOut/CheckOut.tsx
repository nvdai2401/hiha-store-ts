import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, removeItem, clearItem } from 'modules/cart/state/cart.slice';
import {
  selectCartItems,
  selectCartItemTotalPrice,
} from 'modules/cart/state/cart.selectors';

import { CheckoutItem } from './components';

function CheckOut(): React.ReactElement {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartItemTotalPrice);

  return (
    <div className="checkout">
      <h2 className="checkout__title">Checkout</h2>
      <ul className="checkout__header">
        <li>Product</li>
        <li>Description</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Remove</li>
      </ul>

      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          item={cartItem}
          addItem={(item) => {
            dispatch(addItem(item));
          }}
          removeItem={(item) => {
            dispatch(removeItem(item));
          }}
          clearItemFromCart={(item) => {
            dispatch(clearItem(item));
          }}
        />
      ))}
      <div className="total">Total: ${total}</div>
      {/* <StripeCheckoutComponent price={total} /> */}
      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
    </div>
  );
}

export default CheckOut;
