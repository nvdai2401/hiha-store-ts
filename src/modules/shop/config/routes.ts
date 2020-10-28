import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
import { CollectionPreview, CollectionPage } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/shop',
    title: 'HomePage',
    exact: true,
    component: CollectionPreview,
    layout: Main,
  },
  {
    path: '/shop/:collectionName',
    title: 'CollectionPage',
    component: CollectionPage,
    layout: Main,
  },
];

export default pages;
