import React, { Suspense, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCollectionsStart } from 'modules/shop/state/shop.slice';

import { RootState } from 'core/store';
import { Spinner } from 'components';

import {
  selectCollectionsForPreview,
  selectCollectionsFetching,
} from 'modules/shop/state/shop.selectors';
import CollectionPreview from '../CollectionPreview';
import CollectionPage from '../CollectionPage';

function ShopPage(): React.ReactElement {
  const dispatch = useDispatch();
  const pathname = useSelector(
    (state: RootState) => state.router.location.pathname,
  );
  const loading = useSelector(selectCollectionsFetching);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  if (loading) return <Spinner />;
  console.log(`${pathname}/:collectionRouteName`);
  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path={`${pathname}`} component={CollectionPreview} />
      <Route path={`${pathname}/:collectionId`} component={CollectionPage} />
    </Suspense>
  );
}

export default ShopPage;
