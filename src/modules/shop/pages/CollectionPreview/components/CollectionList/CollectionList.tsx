import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'core/store';
import { IProduct } from 'definitions/product';

import { addItem } from 'modules/cart/state/cart.slice';

import { CollectionItem } from 'modules/shop/components';

type Props = {
  title: string;
  items: IProduct[];
};

function CollectionList(props: Props): React.ReactElement {
  const { title, items } = props;
  const dispatch = useDispatch();
  const pathname = useSelector(
    (state: RootState) => state.router.location.pathname,
  );

  const handleOnAddItem = (product): void => {
    dispatch(addItem(product));
  };

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
              addItem={() => handleOnAddItem(item)}
            />
          ))}
      </div>
    </div>
  );
}

export default CollectionList;
