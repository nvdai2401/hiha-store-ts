import React from 'react';

import {
  useSelectCartItems,
  useSelectCartItemTotalPrice,
  useAddItemToCart,
  useRemoveItemFromCart,
  useClearItemsFromCart,
} from 'hooks/state/cartState';

import { CheckoutItem, PaymentButton } from './components';

function CheckOut(): React.ReactElement {
  const cartItems = useSelectCartItems();
  const total = useSelectCartItemTotalPrice();
  const addItem = useAddItemToCart();
  const removeItem = useRemoveItemFromCart();
  const clearItems = useClearItemsFromCart();

  return (
    <div className="c-checkout">
      <h1 className="m-t-b-0 m-b-24">Checkout</h1>
      <ul className="c-checkout__header o-list-bare">
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
          addItem={() => addItem(cartItem)}
          removeItem={() => removeItem(cartItem)}
          clearItemFromCart={() => clearItems(cartItem)}
        />
      ))}
      <div className="total m-t-18">Total: ${total}</div>
      <PaymentButton price={total} />
      <div className="test-warning m-b-24">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
    </div>
  );
}

export default CheckOut;
