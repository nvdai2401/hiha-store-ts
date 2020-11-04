/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from 'core/api/firebase';
import { getDateTimeFromTimestamp } from 'utils';

import { HOME_PAGE_PATH } from 'modules/directory/config';
import { SIGN_IN_PAGE_PATH } from 'modules/user/config';
import {
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

    const createdAt = getDateTimeFromTimestamp(
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
  yield takeLatest('user/googleSigInStart', signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest('user/emailSigInStart', signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest('user/checkUserSession', isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest('user/signOutStart', signOut);
}

export function* onSignUpStart() {
  yield takeLatest('user/signUpStart', signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest('user/signUpSuccess', signInAfterSignUp);
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
