/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from 'definitions/product';

import {
  showCart,
  hideCart,
  addItem,
  removeItem,
  clearItems,
  clearCart,
} from 'modules/cart/state/cart.slice';
import {
  selectCartItems,
  selectCartVisible,
  selectCartItemCount,
  selectCartItemTotalPrice,
} from 'modules/cart/state/cart.selectors';

export function useShowCart() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(showCart()), [dispatch]);
}

export function useHideCart() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(hideCart()), [dispatch]);
}

export function useAddItemToCart() {
  const dispatch = useDispatch();
  return useCallback((item: IProduct) => dispatch(addItem(item)), [dispatch]);
}

export function useRemoveItemFromCart() {
  const dispatch = useDispatch();
  return useCallback((item: IProduct) => dispatch(removeItem(item)), [
    dispatch,
  ]);
}

export function useClearItemsFromCart() {
  const dispatch = useDispatch();
  return useCallback((item: IProduct) => dispatch(clearItems(item)), [
    dispatch,
  ]);
}

export function useClearCart() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(clearCart()), [dispatch]);
}

export function useSelectCartItems() {
  return useSelector(selectCartItems);
}

export function useSelectCartVisible() {
  return useSelector(selectCartVisible);
}

export function useSelectCartItemCount() {
  return useSelector(selectCartItemCount);
}

export function useSelectCartItemTotalPrice() {
  return useSelector(selectCartItemTotalPrice);
}
