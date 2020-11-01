import React, { useEffect } from 'react';

import {
  useFetchCollectionsStart,
  useSelectCollectionsForPreview,
  useSelectCollectionsFetching,
} from 'hooks/state/shopState';

import { Spinner } from 'components';
import { CollectionList } from './components';

function CollectionPreview(): React.ReactElement {
  const collections = useSelectCollectionsForPreview();
  const loading = useSelectCollectionsFetching();
  const fetchCollectionsStart = useFetchCollectionsStart();

  useEffect(() => {
    fetchCollectionsStart();
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
