import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCollectionStart } from 'modules/shop/state/shop.slice';
import {
  selectCollections,
  selectCollectionsFetching,
} from 'modules/shop/state/shop.selectors';

import { Spinner } from 'components';
import { CollectionItem } from 'modules/shop/components';

function CollectionPage(): React.ReactElement {
  const dispatch = useDispatch();
  const { collectionName } = useParams();
  const collection = useSelector(selectCollections(collectionName));

  useEffect(() => {
    if (!collection) {
      dispatch(fetchCollectionStart(collectionName));
    }
  }, []);

  if (!collection) return <Spinner />;

  return (
    <div className="collection-page">
      <h2 className="collection-page__title">{collection.title}</h2>
      <div className="collection-page__items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
