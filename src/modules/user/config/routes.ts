import { IRoutePages } from 'definitions/routes';
import { Main } from 'layouts';
import { UserInfo, SignIn, SignUp } from '../pages';

const USER_PAGE_PATH = '/user';
const SIGN_IN_PAGE_PATH = '/sign-in';
const SIGN_UP_PAGE_PATH = '/sign-up';

const pages: IRoutePages[] = [
  {
    path: USER_PAGE_PATH,
    title: 'UserInfo',
    exact: true,
    component: UserInfo,
    layout: Main,
  },
  {
    path: SIGN_IN_PAGE_PATH,
    title: 'SignIn',
    exact: true,
    component: SignIn,
    layout: Main,
  },
  {
    path: SIGN_UP_PAGE_PATH,
    title: 'SignUp',
    exact: true,
    component: SignUp,
    layout: Main,
  },
];

export { USER_PAGE_PATH, SIGN_IN_PAGE_PATH, SIGN_UP_PAGE_PATH };
export default pages;
