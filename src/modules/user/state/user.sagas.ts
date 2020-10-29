import { takeLatest, call, all, put } from 'redux-saga/effects';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from 'core/api/firebase';
// import userActionTypes from './user.types';

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

    yield put(
      sigInSuccess({
        id: userSnapshot.id,
        displayName: userInfo.displayName,
        email: userInfo.email,
      }),
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// export function* signUp({ payload: { email, password, displayName } }) {
//   try {
//     const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//     yield put(signUpSuccess({ user, additionalData: { displayName } }));
//   } catch (error) {
//     yield put(signUpFailure(error));
//     yield alert(error.message);
//   }
// }

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getUserSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest('user/googleSigInStart', signInWithGoogle);
}

// export function* onEmailSignInStart() {
//   yield takeLatest('user/emailSigInStart', signInWithEmail);
// }

// export function* onCheckUserSession() {
//   yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// }

// export function* onSignOutStart() {
//   yield takeLatest('user/signOutStart', signOut);
// }

// export function* onSignUpStart() {
//   yield takeLatest('user/signUpStart', signUp);
// }

// export function* onSignUpSuccess() {
//   yield takeLatest('user/signUpSuccess', signInAfterSignUp);
// }

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    // call(onEmailSignInStart),
    // call(onCheckUserSession),
    // call(onSignOutStart),
    // call(onSignUpStart),
    // call(onSignUpSuccess),
  ]);
}
