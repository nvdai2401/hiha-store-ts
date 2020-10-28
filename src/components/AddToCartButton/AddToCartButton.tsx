import React from 'react';

type Props = {
  children: string | React.Component | React.Component[];
  onClick: () => void;
};

function AddToCartButton(props: Props): React.ReactElement {
  const { children, onClick } = props;
  return (
    <button className="add-to-cart-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default AddToCartButton;
