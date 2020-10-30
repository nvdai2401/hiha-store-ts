import React from 'react';

type Props = {
  width: string;
  height: string;
};

function Spinner(props: Props): React.ReactElement {
  const { width, height } = props;

  return (
    <div className="spinner">
      <div style={{ width, height }} className="spinner__loading" />
    </div>
  );
}

export default Spinner;
