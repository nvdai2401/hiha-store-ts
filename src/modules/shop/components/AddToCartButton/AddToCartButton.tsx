import React from 'react';

type Props = {
  children: string | React.Component | React.Component[];
};

function AddToCartButton(props: Props): React.ReactElement {
  const { children } = props;
  return (
    <button className="add-to-cart-button" type="button">
      {children}
    </button>
  );
}

export default AddToCartButton;
