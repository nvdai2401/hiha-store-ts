import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from 'common/definitions/product';

interface ICollections {
  sneakers?: ICollection;
  hats?: ICollection;
  mens?: ICollection;
  jackets?: ICollection;
  womens?: ICollection;
}

interface IShopState {
  collections: ICollections;
  errorMessage: string;
  loading: boolean;
}

const initialState: IShopState = {
  collections: {},
  errorMessage: '',
  loading: false,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    fetchCollectionsStart(state) {
      state.loading = true;
    },
    fetchCollectionsSuccess(state, action: PayloadAction<ICollections>) {
      state.collections = action.payload;
      state.loading = false;
    },
    fetchCollectionsFailure(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    fetchCollectionStart(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchCollectionSuccess(state, action: PayloadAction<ICollection>) {
      state.collections[action.payload.title.toLowerCase()] = action.payload;
      state.loading = false;
    },
    fetchCollectionFailure(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionStart,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} = shopSlice.actions;
export default shopSlice.reducer;
