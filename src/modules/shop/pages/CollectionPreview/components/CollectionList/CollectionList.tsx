import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IProduct } from 'definitions/product';

import { useAddItemToCart } from 'hooks/state/cartState';

import { CollectionItem } from 'modules/shop/components';

type Props = {
  title: string;
  items: IProduct[];
};

function CollectionList(props: Props): React.ReactElement {
  const { title, items } = props;
  const { pathname } = useLocation();
  const addItem = useAddItemToCart();

  return (
    <div className="collection-list">
      <Link
        to={`${pathname}/${title.toLowerCase()}`}
        className="collection-list__title"
      >
        {title.toUpperCase()}
      </Link>
      <div className="collection-list__products">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
              addItem={() => addItem(item)}
            />
          ))}
      </div>
    </div>
  );
}

export default CollectionList;
