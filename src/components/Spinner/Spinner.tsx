import React from 'react';

type Props = {
  width?: string;
  height?: string;
  classes?: string;
};

function Spinner(props: Props): React.ReactElement {
  const { width = '50px', height = '50px', classes } = props;

  return (
    <div className={`c-spinner ${classes}`}>
      <div style={{ width, height }} className="c-spinner__loading" />
    </div>
  );
}

export default Spinner;
