import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  useFetchCollectionStart,
  useSelectCollection,
} from 'hooks/state/shopState';

import { addItem } from 'modules/cart/state/cart.slice';

import { Spinner } from 'components';
import { CollectionItem } from 'modules/shop/components';

type ParamsTypes = {
  collectionName: string;
};

function CollectionPage(): React.ReactElement {
  const dispatch = useDispatch();
  const fetchCollectionStart = useFetchCollectionStart();
  const { collectionName } = useParams<ParamsTypes>();
  const collection = useSelectCollection(collectionName);

  useEffect(() => {
    if (!collection) {
      fetchCollectionStart(collectionName);
    }
  }, []);

  const handleOnAddItem = (product): void => {
    dispatch(addItem(product));
  };

  if (!collection) return <Spinner width="50px" height="50px" />;

  return (
    <div className="collection-page">
      <h2 className="collection-page__title">{collection.title}</h2>
      <div className="collection-page__items">
        {collection.items.map((item) => (
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

export default CollectionPage;
