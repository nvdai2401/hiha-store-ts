import { IRoutePages } from 'common/definitions/routes';
import { Main } from 'common/layouts';
import { HomePage } from '../pages';

const HOME_PAGE_PATH = '/';

const pages: IRoutePages[] = [
  {
    path: HOME_PAGE_PATH,
    title: 'HomePage',
    exact: true,
    component: HomePage,
    layout: Main,
  },
];

export { HOME_PAGE_PATH };
export default pages;
