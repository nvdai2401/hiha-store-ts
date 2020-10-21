import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'core/store';

function useRoute() {
  const history = useHistory();
  const { location } = useSelector((state: RootState) => state.router);
  const [route, setRoute] = useState({ pathname: '', props: null });

  const changeRoute = (pathname, args) => {
    setRoute({ pathname, props: args });
    history.push(pathname);
  };

  useEffect(() => {
    if (location.pathname) {
      setRoute(location);
      history.push(location.pathname);
    }
  }, [location, history]);

  return [route || {}, changeRoute];
}

export default useRoute;
