import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  basename: process.env.NODE_ENV === 'production' ? '/hiha-store-ts' : '/',
});

export default history;
