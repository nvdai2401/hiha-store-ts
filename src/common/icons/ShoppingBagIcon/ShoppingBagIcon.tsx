import React from 'react';

import { ReactComponent as ShoppingBagSVG } from 'assets/svg/shopping-bag.svg';

type Props = React.HTMLAttributes<HTMLOrSVGElement>;

function ShoppingBagIcon(props: Props): React.ReactElement {
  return <ShoppingBagSVG {...props} />;
}

export default ShoppingBagIcon;
