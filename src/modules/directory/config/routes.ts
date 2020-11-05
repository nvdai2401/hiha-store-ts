import { lazy } from 'react';
import { IRoute } from 'common/definitions/routes';
import { Main } from 'common/layouts';

const HomePage = lazy(() =>
  import('modules/directory/pages').then(({ HomePage }) => ({
    default: HomePage,
  })),
);

const HOME_PAGE_PATH = '/';

const routes: IRoute[] = [
  {
    path: HOME_PAGE_PATH,
    title: 'Home page',
    exact: true,
    component: HomePage,
    layout: Main,
  },
];

export { HOME_PAGE_PATH, routes };
