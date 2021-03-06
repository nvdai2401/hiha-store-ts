import React, { useEffect } from 'react';

import {
  useFetchCollectionsStart,
  useSelectCollectionsForPreview,
  useSelectCollectionsFetching,
} from 'hooks/state/shopState';

import { Spinner } from 'components';
import { CollectionList } from './components';

const CollectionPreview: React.FC = () => {
  const collections = useSelectCollectionsForPreview();
  const loading = useSelectCollectionsFetching();
  const fetchCollectionsStart = useFetchCollectionsStart();

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  if (loading) return <Spinner classes="m-t-210" />;

  return (
    <div className="c-collection-preview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionList key={id.toString()} {...otherCollectionsProps} />
      ))}
    </div>
  );
}

export default CollectionPreview;
