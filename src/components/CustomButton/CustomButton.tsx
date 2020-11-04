import React from 'react';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string | React.Component | React.Component[] | React.ReactNode;
  isInverted?: boolean;
  classes?: string;
  onClick?: () => void;
}

function CustomButton(props: IButtonProps): React.ReactElement {
  const {
    type = 'button',
    children,
    isInverted = false,
    classes = '',
    onClick,
  } = props;

  return (
    <button
      type={type}
      className={`c-custom-button o-button ${
        isInverted ? 'is-inverted' : ''
      } ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
