import React from 'react';

import {
  useSelectCartItems,
  useSelectCartItemTotalPrice,
  useAddItemToCart,
  useRemoveItemFromCart,
  useClearItemsFromCart,
} from 'hooks/state/cartState';

import { ShoppingCart, PaymentInfo } from 'modules/cart/components';

const CheckOut: React.FC = () => {
  const cartItems = useSelectCartItems();
  const total = useSelectCartItemTotalPrice();
  const addItem = useAddItemToCart();
  const removeItem = useRemoveItemFromCart();
  const clearItems = useClearItemsFromCart();

  return (
    <div className="c-checkout">
      <h1 className="m-t-b-0 m-b-24">Checkout</h1>
      <ShoppingCart
        items={cartItems}
        total={total}
        addItem={addItem}
        removeItem={removeItem}
        clearItems={clearItems}
      />
      <PaymentInfo total={total} />
    </div>
  );
};

export default CheckOut;
