import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
import { HomePage } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/',
    title: 'HomePage',
    exact: true,
    component: HomePage,
    layout: Main,
  },
];

export default pages;
