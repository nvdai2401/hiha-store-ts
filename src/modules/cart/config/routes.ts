import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
import { CheckOut } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/checkout',
    title: 'CheckOutPage',
    exact: true,
    component: CheckOut,
    layout: Main,
  },
];

export default pages;
