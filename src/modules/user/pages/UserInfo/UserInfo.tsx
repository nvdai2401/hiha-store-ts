import React from 'react';

import { useCurrentUser } from 'hooks/state/userState';
import {
  useSelectCartItems,
  useSelectCartItemTotalPrice,
  useAddItemToCart,
  useRemoveItemFromCart,
  useClearItemsFromCart,
} from 'hooks/state/cartState';

import { ShoppingCart, PaymentInfo } from 'modules/cart/components';

const UserInfo: React.FC = () => {
  const currentUser = useCurrentUser();
  const cartItems = useSelectCartItems();
  const total = useSelectCartItemTotalPrice();
  const addItem = useAddItemToCart();
  const removeItem = useRemoveItemFromCart();
  const clearItems = useClearItemsFromCart();

  return (
    <div className="c-user-info">
      <h1 className="m-t-b-0 m-b-24">User Information</h1>
      <p className="bold">Your information</p>
      <ul>
        <li className="m-l-24">
          Display name: <span>{currentUser.displayName}</span>
        </li>
        <li className="m-l-24">
          Email: <span>{currentUser.email}</span>
        </li>
        <li className="m-l-24">
          Created at: <span>{currentUser.createdAt}</span>
        </li>
      </ul>
      <p className="m-t-24 bold">Your cart</p>
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

export default UserInfo;
