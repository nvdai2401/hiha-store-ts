import React from 'react';

import { ShoppingBagIcon } from 'common/icons';

type Props = {
  quantity: number | string;
  toggleCart: () => void;
};

function ShoppingBag(props: Props): React.ReactElement {
  const { quantity, toggleCart } = props;

  return (
    <div className="c-shopping-bag pointer" onClick={toggleCart}>
      <ShoppingBagIcon />
      <span className="c-shopping-bag__quantity">
        {quantity < 100 ? quantity : '99+'}
      </span>
    </div>
  );
}

export default ShoppingBag;
