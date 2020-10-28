import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { hideCart } from 'modules/cart/state/cart.slice';
import { selectCartHidden } from 'modules/cart/state/cart.selectors';

function HideCart(): null {
  const { pathname } = useLocation();
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hidden) {
      dispatch(hideCart());
    }
  }, [pathname]);

  return null;
}

export default HideCart;
