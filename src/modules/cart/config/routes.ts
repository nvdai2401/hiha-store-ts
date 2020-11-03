import { IRoutePages } from 'common/definitions/routes';
import { Main } from 'common/layouts';
import { CheckOut } from '../pages';

const CHECKOUT_PAGE_PATH = '/checkout';

const pages: IRoutePages[] = [
  {
    path: CHECKOUT_PAGE_PATH,
    title: 'CheckOutPage',
    exact: true,
    component: CheckOut,
    layout: Main,
  },
];

export { CHECKOUT_PAGE_PATH, pages };
