import React from 'react';

import { LazyImage, AddToCartButton } from 'components';

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

function CollectionItem(props: Props): React.ReactElement {
  const { item, addItem } = props;
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <LazyImage
        placeHolder={`${imageUrl}?tr=bl-30,q-50`}
        src={imageUrl}
        alt={name}
        className="image"
      />
      <div className="collection-item__info">
        <span>{name}</span>
        <span>{`$${price}`}</span>
      </div>
      <AddToCartButton onClick={addItem}>Add to cart</AddToCartButton>
    </div>
  );
}

export default CollectionItem;