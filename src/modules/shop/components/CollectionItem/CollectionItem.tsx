import React from 'react';

interface ICollection {
  id?: string;
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
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addItem(item);
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
