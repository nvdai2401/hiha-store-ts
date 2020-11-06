import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelectCartVisible, useHideCart } from 'hooks/state/cartState';

const HideCart = () => {
  const { pathname } = useLocation();
  const cartVisible = useSelectCartVisible();
  const hideCart = useHideCart();

  useEffect(() => {
    if (cartVisible) {
      hideCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hideCart]);

  return null;
};

export default HideCart;
