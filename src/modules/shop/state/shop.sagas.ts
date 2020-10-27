import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from 'core/api/firebase';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.slice';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot,
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest('shop/fetchCollectionsStart', fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
