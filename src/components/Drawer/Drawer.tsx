import React, { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

function Drawer(props: Props): React.ReactElement {
  const { open, onClose } = props;

  useEffect(() => {
    if (open) {
      document.body.setAttribute('style', `position:fixed; z-index: 1;`);
    } else {
      document.body.setAttribute('style', '');
    }
  }, [open]);

  return (
    <div className={`test-drawer ${open ? 'is-open' : ''}`} onClick={onClose}>
      <div
        className="test-drawer__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div className="test-drawer__overlay" />
    </div>
  );
}

export default Drawer;
