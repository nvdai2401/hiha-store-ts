import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
import { CollectionPreview, ShopPage } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/shop',
    title: 'ShopPage',
    exact: true,
    component: ShopPage,
    layout: Main,
  },
  // {
  //   path: '/shop/:collectionRouteName',
  //   title: 'CollectionPage',
  //   component: CollectionPage,
  //   layout: Main,
  // },
];

export default pages;
