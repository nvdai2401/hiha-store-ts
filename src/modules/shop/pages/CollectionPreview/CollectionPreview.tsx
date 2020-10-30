import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCollectionsStart } from 'modules/shop/state/shop.slice';
import {
  selectCollectionsForPreview,
  selectCollectionsFetching,
} from 'modules/shop/state/shop.selectors';

import { Spinner } from 'components';
import { CollectionList } from './components';

function CollectionPreview(): React.ReactElement {
  const dispatch = useDispatch();
  const collections = useSelector(selectCollectionsForPreview);
  const loading = useSelector(selectCollectionsFetching);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  if (loading) return <Spinner width="50px" height="50px" />;

  return (
    <div className="collection-preview u-flex-column">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionList key={id.toString()} {...otherCollectionsProps} />
      ))}
    </div>
  );
}

export default CollectionPreview;
