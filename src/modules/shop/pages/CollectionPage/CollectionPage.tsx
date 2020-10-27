import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CollectionItem } from 'modules/shop/components';

import { selectCollections } from 'modules/shop/state/shop.selectors';

function CollectionPage(): React.ReactElement {
  // const { collectionRouteName } = useParams();
  // const collection = useSelector(selectCollections(collectionRouteName));
  console.log('CollectionPage');
  return (
    <div className="collection-page">
      skdfdhkf
      {/* <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div> */}
    </div>
  );
}

export default CollectionPage;
