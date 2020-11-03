import React from 'react';

type Props = {
  children: string | React.Component | React.Component[] | React.ReactNode;
  onClick: () => void;
};

function AddToCartButton(props: Props): React.ReactElement {
  const { children, onClick } = props;

  return (
    <button
      className="c-add-to-cart-button o-button"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default AddToCartButton;
