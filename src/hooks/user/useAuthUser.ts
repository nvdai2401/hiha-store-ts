import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'modules/user/state/user.selectors';

function useAuthUser(): boolean {
  const currentUser = useSelector(selectCurrentUser);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    if (currentUser.id) {
      setIsUserAuthenticated(true);
    }
  }, [currentUser]);

  return isUserAuthenticated;
}

export default useAuthUser;
