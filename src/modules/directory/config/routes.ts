import { IRoutePages } from 'definitions/routes';
import { HomePage } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/',
    title: 'HomePage',
    exact: true,
    component: HomePage,
  },
];

export default pages;
