import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IProduct } from 'common/definitions/product';

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
    <div className="c-collection-list">
      <Link
        to={`${pathname}/${title.toLowerCase()}`}
        className="c-collection-list__title m-b-18"
      >
        {title.toUpperCase()}
      </Link>
      <div className="c-collection-list__products">
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
