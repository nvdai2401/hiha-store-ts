import React from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="collection-list">
      <Link to={`/${title.toLowerCase()}`} className="collection-list__title">
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
