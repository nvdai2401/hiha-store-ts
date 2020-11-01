import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from 'common/definitions/product';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemsFromCart,
} from './cart.utils';

interface ICartState {
  items: IProduct[];
  visible: boolean;
}

const initialState: ICartState = {
  items: [],
  visible: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart(state) {
      state.visible = true;
    },
    hideCart(state) {
      state.visible = false;
    },
    addItem(state, action: PayloadAction<IProduct>) {
      state.items = addItemToCart(action.payload, state.items);
    },
    removeItem(state, action: PayloadAction<IProduct>) {
      state.items = removeItemFromCart(action.payload, state.items);
    },
    clearItems(state, action: PayloadAction<IProduct>) {
      state.items = clearItemsFromCart(action.payload, state.items);
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
  clearItems,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
