import React, { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

function Overlay(props: Props): React.ReactElement {
  const { open, onClose } = props;

  // useEffect(() => {
  //   if (open) {
  //     document.body.setAttribute('style', 'position:fixed;');
  //   } else {
  //     document.body.setAttribute('style', '');
  //   }
  // }, [open]);

  return (
    <div className={`overlay ${open ? 'is-visible' : ''}`} onClick={onClose} />
  );
}

export default Overlay;
