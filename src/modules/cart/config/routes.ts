import { lazy } from 'react';
import { IRoute } from 'common/definitions/routes';
import { Main } from 'common/layouts';
import { Spinner } from 'components';

const CheckOutPage = lazy(() =>
  import('modules/cart/pages').then(({ CheckOut }) => ({
    default: CheckOut,
  })),
);

const CHECKOUT_PAGE_PATH = '/checkout';

const routes: IRoute[] = [
  {
    path: CHECKOUT_PAGE_PATH,
    title: 'Checkout',
    exact: true,
    fallback: Spinner,
    component: CheckOutPage,
    layout: Main,
  },
];

export { CHECKOUT_PAGE_PATH, routes };
