import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

function WithDrawer(WrapperComponent: (props?: any) => React.ReactElement) {
  return function (props: Props) {
    const { open, onClose } = props;
    return (
      <>
        <WrapperComponent {...props} />
        <div
          className={`overlay ${open ? 'is-visible' : ''}`}
          onClick={onClose}
        />
      </>
    );
  };
}

export default WithDrawer;
