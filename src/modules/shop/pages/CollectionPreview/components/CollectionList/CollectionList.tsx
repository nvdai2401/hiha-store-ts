import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'core/store';

import { CollectionItem } from 'modules/shop/components';

interface ICollection {
  id?: number;
  imageUrl: string;
  name: string;
  price: number;
}

type Props = {
  title: string;
  items: ICollection[];
};

function CollectionList(props: Props): React.ReactElement {
  const { title, items } = props;
  const pathname = useSelector(
    (state: RootState) => state.router.location.pathname,
  );

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
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionList;
