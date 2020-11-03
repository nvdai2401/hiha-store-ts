import React from 'react';

import { ShoppingBagIcon } from 'common/icons';

type Props = {
  itemCount: number | string;
  toggleCart: () => void;
};

function CartIcon(props: Props): React.ReactElement {
  const { itemCount, toggleCart } = props;

  return (
    <div className="cart-icon" onClick={toggleCart} aria-hidden="true">
      <ShoppingBagIcon className="cart-icon__icon" />
      <span className="cart-icon__count">
        {itemCount < 100 ? itemCount : '99+'}
      </span>
    </div>
  );
}

export default CartIcon;
