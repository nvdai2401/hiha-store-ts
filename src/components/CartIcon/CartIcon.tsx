import React from 'react';

import { ReactComponent as ShoppingIcon } from 'assets/svg/shopping-bag.svg';

type Props = {
  itemCount: number;
  toggleCart: () => void;
};

function CartIcon(props: Props): React.ReactElement {
  const { itemCount, toggleCart } = props;

  return (
    <div className="cart-icon" onClick={toggleCart} aria-hidden="true">
      <ShoppingIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
