import React from 'react';

import { IProduct } from 'common/definitions/product';

import { LazyImage } from 'components';

type Props = IProduct;

const CartItem: React.FC<Props> = (props: Props) => {
  const { imageUrl, name, quantity = 1, price } = props;

  return (
    <div className="c-cart-item m-b-18">
      <LazyImage
        placeHolder={`${imageUrl}?tr=bl-30,q-50`}
        src={imageUrl}
        alt={name}
        classes="c-cart-item__image"
      />
      <div className="c-cart-item__body m-l-12">
        <span className="c-cart-item__body__name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
        <span>Total: ${quantity * price}</span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
