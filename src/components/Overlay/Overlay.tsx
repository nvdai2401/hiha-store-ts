import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};
const Overlay: React.FC<Props> = (props: Props) => {
  const { open, onClose } = props;

  return (
    <div
      className={`c-overlay ${open ? 'is-visible' : ''}`}
      onClick={onClose}
    />
  );
};

export default Overlay;
