/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, all, takeLatest, put } from 'redux-saga/effects';
import { firestore } from 'core/api/firebase';
import {
  FETCH_DIRECTORY_SECTIONS_START,
  fetchDirectorySectionsSuccess,
  fetchDirectorySectionsFailure,
} from './directory.slice';
import { convertSnapshotToSectionsArray } from './directory.utils';

export function* fetchDirectorySections() {
  try {
    const directoryRef = firestore.collection('directory');
    const snapshot = yield directoryRef.get();
    const sections = yield call(convertSnapshotToSectionsArray, snapshot);
    yield put(fetchDirectorySectionsSuccess(sections));
  } catch (error) {
    yield put(fetchDirectorySectionsFailure(error.message));
    alert(error.message);
  }
}

export function* onFetchDirectorySectionsStart() {
  yield takeLatest(FETCH_DIRECTORY_SECTIONS_START, fetchDirectorySections);
}

export function* directorySagas() {
  yield all([call(onFetchDirectorySectionsStart)]);
}
