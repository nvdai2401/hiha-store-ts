import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface ICollection {
  id: string;
  routeName: string;
  items: IProduct[];
}

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
      state.loading = false;
      state.collections = action.payload;
    },
    fetchCollectionsFailure(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} = shopSlice.actions;
export default shopSlice.reducer;
