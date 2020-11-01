import React from 'react';

import { IProduct } from 'common/definitions/product';

type Props = {
  key?: number;
  item: IProduct;
  addItem: () => void;
  removeItem: () => void;
  clearItemFromCart: () => void;
};

function CheckoutItem(props: Props): React.ReactElement {
  const { item, addItem, removeItem, clearItemFromCart } = props;
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="checkout-item__product">
        <img src={imageUrl} alt="cart item" />
      </div>
      <div className="checkout-item__product">
        <span>{name}</span>
      </div>
      <div className="checkout-item__product">
        <div className="u-flex-row quantity">
          <div className="arrow" onClick={removeItem}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItem}>
            &#10095;
          </div>
        </div>
      </div>
      <span className="checkout-item__product">${price}</span>
      <div
        className="checkout-item__product remove-button"
        onClick={clearItemFromCart}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
