import { call, all, takeLatest, put } from 'redux-saga/effects';
import { firestore } from 'core/api/firebase';
import {
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
  }
}

export function* onFetchDirectorySectionsStart() {
  yield takeLatest(
    'directory/fetchDirectorySectionsStart',
    fetchDirectorySections,
  );
}

export function* directorySaga() {
  yield all([call(onFetchDirectorySectionsStart)]);
}
