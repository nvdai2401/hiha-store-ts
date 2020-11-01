/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchCollectionsStart,
  fetchCollectionStart,
} from 'modules/shop/state/shop.slice';
import {
  selectCollectionsForPreview,
  selectCollections,
  selectCollectionsFetching,
} from 'modules/shop/state/shop.selectors';

export function useFetchCollectionsStart() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchCollectionsStart()), [dispatch]);
}

export function useFetchCollectionStart() {
  const dispatch = useDispatch();
  return useCallback(
    (collectionName: string) => dispatch(fetchCollectionStart(collectionName)),
    [dispatch],
  );
}

export function useSelectCollectionsForPreview() {
  return useSelector(selectCollectionsForPreview);
}

export function useSelectCollection(collectionName: string) {
  return useSelector(selectCollections(collectionName));
}

export function useSelectCollectionsFetching() {
  return useSelector(selectCollectionsFetching);
}
