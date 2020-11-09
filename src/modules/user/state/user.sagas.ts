/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from 'core/api/firebase';
import { convertTimestampToDateTime } from 'utils';

import { HOME_PAGE_PATH } from 'modules/directory/config';
import { SIGN_IN_PAGE_PATH } from 'modules/user/config';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  sigInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.slice';

export function* getUserSnapshotFromUserAuth(userAuth, additionalData = {}) {
  try {
    const userRef = yield createUserProfileDocument(userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    const userInfo = userSnapshot.data();
    if (!userInfo) return;

    const createdAt = convertTimestampToDateTime(
      userInfo.createAt.seconds * 1000,
    );

    yield put(
      sigInSuccess({
        id: userSnapshot.id,
        displayName: userInfo.displayName,
        email: userInfo.email,
        createdAt,
      }),
    );
  } catch (error) {
    yield put(signInFailure(error.message));
    alert(error.message);
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshotFromUserAuth(user);
    yield put(push(HOME_PAGE_PATH));
  } catch (error) {
    yield put(signInFailure(error.message));
    alert(error.message);
  }
}

export function* signInWithEmail(data) {
  const { email, password } = data.payload;
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshotFromUserAuth(user);
    yield put(push(HOME_PAGE_PATH));
  } catch (error) {
    yield put(signInFailure(error.message));
    alert(error.message);
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
    alert(error.message);
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(push(SIGN_IN_PAGE_PATH));
  } catch (error) {
    yield put(signOutFailure(error.message));
    alert(error.message);
  }
}

export function* signUp(data) {
  const { email, password, displayName } = data.payload;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({
        user,
        additionalData: { displayName },
      }),
    );
  } catch (error) {
    yield put(signUpFailure(error));
    alert(error.message);
  }
}

export function* signInAfterSignUp(data) {
  const { user, additionalData } = data.payload;
  yield getUserSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
