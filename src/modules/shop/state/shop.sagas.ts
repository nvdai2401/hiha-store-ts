/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from 'core/api/firebase';
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTION_START,
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from './shop.slice';

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

export function* fetchCollectionAsync(data) {
  try {
    const titlePayload =
      data.payload.charAt(0).toUpperCase() + data.payload.substr(1);
    const collectionRef = firestore
      .collection('collections')
      .where('title', '==', titlePayload);
    const snapshot = yield collectionRef.get();
    const transformedCollection = yield snapshot.docs.map((doc) => {
      const { title, items } = doc.data();
      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        items,
        title,
      };
    });

    yield put(fetchCollectionSuccess(transformedCollection[0]));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* onFetchCollectionStart() {
  yield takeLatest(FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart), call(onFetchCollectionStart)]);
}
