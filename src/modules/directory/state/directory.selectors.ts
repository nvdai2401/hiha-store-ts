import { createSelector } from 'reselect';
import { RootState } from 'core/store';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => (directory.sections ? directory.sections : []),
);

export const selectDirectorySectionsFetching = createSelector(
  [selectDirectory],
  (directory) => directory.loading,
);
