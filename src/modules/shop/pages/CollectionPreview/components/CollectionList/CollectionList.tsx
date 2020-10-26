import React from 'react';
import { Link } from 'react-router-dom';

interface ICollection {
  id?: string;
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
    <div className="collection-preview">
      <Link to={`/${title.toLowerCase()}`} className="title">
        {title.toUpperCase()}
      </Link>
      <div className="preview">
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
