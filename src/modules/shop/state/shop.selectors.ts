import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (selectShop) => selectShop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const selectCollections = (collectionUrlParam: string) => {
  return createSelector([selectShopCollections], (collections) => {
    console.log('selectCollections', collections);
    return collections ? collections[collectionUrlParam] : null;
  });
};

export const selectCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.loading,
);
