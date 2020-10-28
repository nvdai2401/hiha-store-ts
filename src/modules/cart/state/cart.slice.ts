import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from 'definitions/product';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from './cart.utils';

interface ICartState {
  items: IProduct[];
  hidden: boolean;
}

const initialState: ICartState = {
  items: [],
  hidden: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart(state) {
      state.hidden = true;
    },
    hideCart(state) {
      state.hidden = false;
    },
    addItem(state, action: PayloadAction<IProduct>) {
      state.items = addItemToCart(action.payload, state.items);
    },
    removeItem(state, action: PayloadAction<IProduct>) {
      state.items = removeItemFromCart(action.payload, state.items);
    },
    clearItem(state, action: PayloadAction<IProduct>) {
      state.items = clearItemFromCart(action.payload, state.items);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  showCart,
  hideCart,
  addItem,
  removeItem,
  clearItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
