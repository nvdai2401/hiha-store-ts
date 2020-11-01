/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDirectorySectionsStart } from 'modules/directory/state/directory.slice';
import {
  selectDirectorySections,
  selectDirectorySectionsFetching,
} from 'modules/directory/state/directory.selectors';

export function useFetchDirectorySectionsStart() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchDirectorySectionsStart()), [dispatch]);
}

export function useSelectDirectorySections() {
  return useSelector(selectDirectorySections);
}

export function useSelectDirectorySectionsFetching() {
  return useSelector(selectDirectorySectionsFetching);
}
