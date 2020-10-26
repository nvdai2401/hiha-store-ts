import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
import { CollectionPreview } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/shop',
    title: 'HomePage',
    exact: true,
    component: CollectionPreview,
    layout: Main,
  },
];

export default pages;
