import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCollectionStart } from 'modules/shop/state/shop.slice';
import { selectCollections } from 'modules/shop/state/shop.selectors';
import { addItem } from 'modules/cart/state/cart.slice';

import { Spinner } from 'components';
import { CollectionItem } from 'modules/shop/components';

type ParamsTypes = {
  collectionName: string;
};

function CollectionPage(): React.ReactElement {
  const dispatch = useDispatch();
  const { collectionName } = useParams<ParamsTypes>();
  const collection = useSelector(selectCollections(collectionName));

  useEffect(() => {
    if (!collection) {
      dispatch(fetchCollectionStart(collectionName));
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
