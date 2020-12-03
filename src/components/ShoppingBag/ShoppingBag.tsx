import React from 'react';

import { ShoppingBagIcon } from 'common/icons';

type Props = {
  quantity: number | string;
  toggleCart: () => void;
};

const ShoppingBag: React.FC<Props> = (props: Props) => {
  const { quantity, toggleCart } = props;

  return (
    <div className="c-shopping-bag pointer" onClick={toggleCart}>
      <ShoppingBagIcon />
      <span className="c-shopping-bag__quantity bold">
        {quantity < 100 ? quantity : '99+'}
      </span>
    </div>
  );
};

export default React.memo(ShoppingBag);
