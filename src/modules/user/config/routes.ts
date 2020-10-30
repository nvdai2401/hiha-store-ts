import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
import { UserInfo, SignIn, SignUp } from '../pages';

const pages: IRoutePages[] = [
  {
    path: '/user',
    title: 'UserInfo',
    exact: true,
    component: UserInfo,
    layout: Main,
  },
  {
    path: '/sign-in',
    title: 'SignIn',
    exact: true,
    component: SignIn,
    layout: Main,
  },
  {
    path: '/sign-up',
    title: 'SignUp',
    exact: true,
    component: SignUp,
    layout: Main,
  },
];

export default pages;
