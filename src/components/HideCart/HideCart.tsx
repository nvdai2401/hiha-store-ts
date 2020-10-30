import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { hideCart } from 'modules/cart/state/cart.slice';
import { selectCartVisible } from 'modules/cart/state/cart.selectors';

function HideCart(): null {
  const { pathname } = useLocation();
  const cartVisible = useSelector(selectCartVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartVisible) {
      dispatch(hideCart());
    }
  }, [pathname]);

  return null;
}

export default HideCart;
