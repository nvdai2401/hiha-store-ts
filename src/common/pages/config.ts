import { lazy } from 'react';
import { IRoute } from 'common/definitions/routes';

import { Main } from 'common/layouts';

const NotFoundPage = lazy(() => import('common/pages/NotFound'));

const NOT_FOUND_PAGE_PATH = '/404-not-found';

const routes: IRoute[] = [
  {
    path: NOT_FOUND_PAGE_PATH,
    title: '404 - Not found',
    component: NotFoundPage,
    layout: Main,
  },
];

export { NOT_FOUND_PAGE_PATH, routes };
