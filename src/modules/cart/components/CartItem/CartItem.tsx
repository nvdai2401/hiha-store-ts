import React from 'react';

import { IProduct } from 'definitions/product';

type Props = IProduct;

function CartItem(props: Props): React.ReactElement {
  const { imageUrl, name, quantity, price } = props;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} className="cart-item__image" />
      <div className="cart-item__body">
        <span className="cart-item__body__name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
