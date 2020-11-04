import React from 'react';

import { PaymentButton } from 'modules/cart/components';

type Props = {
  total: number;
};

function PaymentInfo(props: Props): React.ReactElement {
  const { total = 0 } = props;

  return (
    <div className="c-payment-info">
      <PaymentButton price={total} />
      <div className="c-payment-info__warning m-b-24">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
    </div>
  );
}

export default PaymentInfo;
