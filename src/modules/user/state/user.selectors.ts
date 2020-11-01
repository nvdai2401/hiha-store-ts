import { createSelector } from 'reselect';
import { RootState } from 'core/store';

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const selectGoogleSignInLoading = createSelector(
  [selectUser],
  (user) => user.googleSignInLoading,
);

export const selectEmailSignInLoading = createSelector(
  [selectUser],
  (user) => user.emailSignInLoading,
);

export const selectSignUpLoading = createSelector(
  [selectUser],
  (user) => user.signUpLoading,
);
