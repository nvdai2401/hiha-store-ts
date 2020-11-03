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
    <div className="c-collection-item">
      <LazyImage
        placeHolder={`${imageUrl}?tr=bl-30,q-50`}
        src={imageUrl}
        alt={name}
      />
      <div className="c-collection-item__info m-b-6">
        <span className="c-collection-item__info__name">{name}</span>
        <span>{`$${price}`}</span>
      </div>
      <AddToCartButton onClick={addItem}>Add to cart</AddToCartButton>
    </div>
  );
}

export default CollectionItem;
