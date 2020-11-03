import React from 'react';

import { ReactComponent as UserSVG } from 'assets/svg/user.svg';

type Props = React.HTMLAttributes<HTMLOrSVGElement>;

function UserIcon(props: Props): React.ReactElement {
  return <UserSVG {...props} />;
}

export default UserIcon;
