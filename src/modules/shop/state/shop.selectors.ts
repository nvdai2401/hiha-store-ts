import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const selectCollections = (collectionName: string) =>
  createSelector([selectShopCollections], (collections) => {
    return collections ? collections[collectionName] : null;
  });

export const selectCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.loading,
);
