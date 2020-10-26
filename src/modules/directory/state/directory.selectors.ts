import { createSelector } from 'reselect';
import { RootState } from 'core/store';

const selectedDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectedDirectory],
  (directory) => (directory.sections ? directory.sections : []),
);
