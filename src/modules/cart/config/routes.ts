import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
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

export { CHECKOUT_PAGE_PATH };
export default pages;
