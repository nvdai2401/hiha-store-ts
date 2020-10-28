import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

type Props = {
  price: number;
};

function PaymentButton(props: Props): React.ReactElement {
  const { price } = props;
  const apiKey = process.env.REACT_APP_STRIPE_API_KEY || '';

  const onToken = () => {
    alert('Your payment is success!!!');
  };

  return (
    <div className="payment-button">
      <StripeCheckout
        label="Pay Now"
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        name="Hiha Store"
        locale="en"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={price * 100}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={apiKey}
      />
    </div>
  );
}

export default PaymentButton;
