import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

type Props = {
  price: number;
};

const PaymentButton: React.FC<Props> = (props: Props) => {
  const { price } = props;
  const apiKey = process.env.REACT_APP_STRIPE_API_KEY || '';

  const onToken = () => {
    alert('Your payment is success!!!');
  };

  return (
    <div className="c-payment-button m-t-12 m-b-12">
      <StripeCheckout
        name="HiHa Store"
        label="Pay Now"
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        locale="en"
        currency="USD"
        billingAddress
        shippingAddress
        description={`Your total is $${price}.`}
        amount={price * 100}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={apiKey}
      />
    </div>
  );
};

export default PaymentButton;
