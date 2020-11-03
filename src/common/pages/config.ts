import { IRoutePages } from 'common/definitions/routes';

import { Main } from 'common/layouts';
import { userPages } from 'modules/user/config';
import { directoryPages } from 'modules/directory/config';
import { shopPages } from 'modules/shop/config';
import { cartPages } from 'modules/cart/config';
import NotFound from './NotFound';

const NOT_FOUND_PAGE_PATH = '/404-not-found';

const commonPages: IRoutePages[] = [
  {
    path: NOT_FOUND_PAGE_PATH,
    title: 'NotFound',
    component: NotFound,
    layout: Main,
  },
];

const pages = [
  ...commonPages,
  ...userPages,
  ...directoryPages,
  ...shopPages,
  ...cartPages,
];

export { NOT_FOUND_PAGE_PATH, pages };
