import React from 'react';

import { LazyImage, CustomButton as AddToCartButton } from 'components';

interface ICollection {
  id?: number;
  imageUrl: string;
  name: string;
  price: number;
}

type Props = {
  item: ICollection;
  addItem: () => void;
};

const CollectionItem: React.FC<Props> = (props: Props) => {
  const { item, addItem } = props;
  const { name, price, imageUrl } = item;
  const placeHolder = `${imageUrl}?tr=bl-30,q-50`;

  return (
    <div className="c-collection-item">
      <LazyImage placeHolder={placeHolder} src={imageUrl} alt={name} />
      <div className="c-collection-item__info m-b-6">
        <span className="c-collection-item__info__name">{name}</span>
        <span>{`$${price}`}</span>
      </div>
      <AddToCartButton onClick={addItem} classes="add-to-cart-button">
        Add to cart
      </AddToCartButton>
    </div>
  );
};

export default CollectionItem;
