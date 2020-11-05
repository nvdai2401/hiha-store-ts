import { commonRoutes } from 'common/pages';
import { userRoutes } from 'modules/user/config';
import { directoryRoutes } from 'modules/directory/config';
import { shopRoutes } from 'modules/shop/config';
import { cartRoutes } from 'modules/cart/config';

const routes = [
  ...commonRoutes,
  ...userRoutes,
  ...directoryRoutes,
  ...shopRoutes,
  ...cartRoutes,
];

export { routes };
