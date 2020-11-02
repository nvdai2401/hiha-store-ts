import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

function Overlay(props: Props): React.ReactElement {
  const { open, onClose } = props;
  return (
    <div className={`overlay ${open ? 'is-visible' : ''}`} onClick={onClose} />
  );
}

export default Overlay;
