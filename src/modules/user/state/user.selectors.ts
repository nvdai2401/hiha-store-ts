import { createSelector } from 'reselect';
import { RootState } from 'core/store';

const selectedUser = (state: RootState) => state.user;

export const selectedCurrentUser = createSelector(
  [selectedUser],
  (user) => user.count,
);
