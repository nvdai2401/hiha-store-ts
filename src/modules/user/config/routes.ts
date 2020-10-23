import { IRoutePages } from 'definitions/routes';
import { UserInfo } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/user-info',
    title: 'UserInfo',
    exact: true,
    component: UserInfo,
  },
];

export default pages;
