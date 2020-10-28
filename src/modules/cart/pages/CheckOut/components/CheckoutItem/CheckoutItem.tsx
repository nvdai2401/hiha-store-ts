import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IProduct } from 'definitions/product';

type Props = {
  key?: number;
  item: IProduct;
  addItem: ({ id }: { id: number }) => void;
  removeItem: ({ id }: { id: number }) => void;
  clearItemFromCart: ({ id }: { id: number }) => void;
};

function CheckoutItem(props: Props): React.ReactElement {
  const { item, addItem, removeItem, clearItemFromCart } = props;
  const { id, imageUrl, name, quantity, price } = item;
  
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
          <div className="arrow" onClick={() => removeItem({ id })}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => addItem({ id })}>
            &#10095;
          </div>
        </div>
      </div>
      <span className="checkout-item__product">${price}</span>
      <div
        className="checkout-item__product remove-button"
        onClick={() => clearItemFromCart({ id })}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
