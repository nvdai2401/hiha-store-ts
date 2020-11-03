import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  useSelectCollection,
  useFetchCollectionStart,
} from 'hooks/state/shopState';
import { useAddItemToCart } from 'hooks/state/cartState';

import { Spinner } from 'components';
import { CollectionItem } from 'modules/shop/components';

type ParamsTypes = {
  collectionName: string;
};

function CollectionPage(): React.ReactElement {
  const { collectionName } = useParams<ParamsTypes>();
  const collection = useSelectCollection(collectionName);
  const addItem = useAddItemToCart();
  const fetchCollectionStart = useFetchCollectionStart();

  useEffect(() => {
    if (!collection) {
      fetchCollectionStart(collectionName);
    }
  }, []);

  if (!collection) return <Spinner classes="m-t-210" />;

  return (
    <div className="c-collection-page">
      <h1 className="c-collection-page__title">{collection.title}</h1>
      <div className="c-collection-page__items">
        {collection.items.map((item) => (
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

export default CollectionPage;
