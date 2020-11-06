import React from 'react';

import { IProduct } from 'common/definitions/product';

import { CheckoutItem } from 'modules/cart/components';

type Props = {
  items: IProduct[];
  total: number;
  addItem: (item: IProduct) => void;
  removeItem: (item: IProduct) => void;
  clearItems: (item: IProduct) => void;
};

const ShoppingCart: React.FC<Props> = (props: Props) => {
  const { items = [], total = 0, addItem, removeItem, clearItems } = props;

  return (
    <div className="c-shopping-cart">
      <ul className="c-shopping-cart__header o-list-bare">
        <li>Product</li>
        <li>Description</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Remove</li>
      </ul>

      {items.map((item) => (
        <CheckoutItem
          key={item.id}
          item={item}
          addItem={() => addItem(item)}
          removeItem={() => removeItem(item)}
          clearItemFromCart={() => clearItems(item)}
        />
      ))}
      <div className="total m-t-18">Total: ${total}</div>
    </div>
  );
};

export default ShoppingCart;
