import { IRoutePages } from 'common/definitions/routes';
import { Main } from 'common/layouts';
import { CollectionPreview, CollectionPage } from '../pages';

const SHOP_PAGE_PATH = '/shop';

const pages: IRoutePages[] = [
  {
    path: SHOP_PAGE_PATH,
    title: 'Shop page',
    exact: true,
    component: CollectionPreview,
    layout: Main,
  },
  {
    path: `${SHOP_PAGE_PATH}/:collectionName`,
    title: 'Collection page',
    component: CollectionPage,
    layout: Main,
  },
];

export { SHOP_PAGE_PATH, pages };
