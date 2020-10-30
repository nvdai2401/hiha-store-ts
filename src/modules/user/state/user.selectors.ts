import { createSelector } from 'reselect';
import { RootState } from 'core/store';

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const selectAuthLoading = createSelector(
  [selectUser],
  (user) => user.loading,
);
