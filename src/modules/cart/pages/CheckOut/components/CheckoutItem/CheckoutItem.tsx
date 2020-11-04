import React from 'react';

import { IProduct } from 'common/definitions/product';

type Props = {
  item: IProduct;
  addItem: () => void;
  removeItem: () => void;
  clearItemFromCart: () => void;
};

function CheckoutItem(props: Props): React.ReactElement {
  const { item, addItem, removeItem, clearItemFromCart } = props;
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="c-checkout-item">
      <div className="c-checkout-item__product u-text-center">
        <img src={imageUrl} alt="cart item" />
      </div>
      <div className="c-checkout-item__product u-text-center">
        <span className="c-checkout-item__product__name">{name}</span>
      </div>
      <div className="c-checkout-item__product u-text-center">
        <div className="u-flex-row quantity">
          <div className="pointer" onClick={removeItem}>
            &#10094;
          </div>
          <span className="m-l-6 m-r-6">{quantity}</span>
          <div className="pointer" onClick={addItem}>
            &#10095;
          </div>
        </div>
      </div>
      <span className="c-checkout-item__product u-text-center">${price}</span>
      <div
        className="c-checkout-item__product pointer u-text-center"
        onClick={clearItemFromCart}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
