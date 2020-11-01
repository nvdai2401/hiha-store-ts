/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAuthInfo } from 'common/definitions/user';

import {
  googleSigInStart,
  emailSigInStart,
  signOutStart,
  signUpStart,
  checkUserSession,
} from 'modules/user/state/user.slice';
import {
  selectCurrentUser,
  selectGoogleSignInLoading,
  selectEmailSignInLoading,
  selectSignUpLoading,
} from 'modules/user/state/user.selectors';

export function useGoogleSignInStart() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(googleSigInStart()), [dispatch]);
}

export function useEmailSignInStart() {
  const dispatch = useDispatch();
  return useCallback(
    (userAuth: IAuthInfo) => dispatch(emailSigInStart(userAuth)),
    [dispatch],
  );
}

export function useSignUpStart() {
  const dispatch = useDispatch();
  return useCallback((userAuth: IAuthInfo) => dispatch(signUpStart(userAuth)), [
    dispatch,
  ]);
}

export function useSignOutStart() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(signOutStart()), [dispatch]);
}

export function useCheckUserSession() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(checkUserSession()), [dispatch]);
}

export function useCurrentUser() {
  return useSelector(selectCurrentUser);
}

export function useGoogleSignInLoading() {
  return useSelector(selectGoogleSignInLoading);
}

export function useEmailSignInLoading() {
  return useSelector(selectEmailSignInLoading);
}

export function useSignUpLoading() {
  return useSelector(selectSignUpLoading);
}
