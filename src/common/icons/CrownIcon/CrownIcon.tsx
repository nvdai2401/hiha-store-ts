import React from 'react';

import { ReactComponent as CrownSVG } from 'assets/svg/crown.svg';

type Props = React.HTMLAttributes<HTMLOrSVGElement>;

function CrownIcon(props: Props): React.ReactElement {
  return <CrownSVG {...props} />;
}

export default CrownIcon;
