import { IRoutePages } from 'common/definitions/routes';
import { Main } from 'common/layouts';
import { UserInfo, SignIn, SignUp, Contact } from '../pages';

const USER_PAGE_PATH = '/user-info';
const SIGN_IN_PAGE_PATH = '/sign-in';
const SIGN_UP_PAGE_PATH = '/sign-up';
const CONTACT_PAGE_PATH = '/contact';

const pages: IRoutePages[] = [
  {
    path: USER_PAGE_PATH,
    title: 'User information',
    component: UserInfo,
    layout: Main,
  },
  {
    path: SIGN_IN_PAGE_PATH,
    title: 'Sign In',
    component: SignIn,
    layout: Main,
  },
  {
    path: SIGN_UP_PAGE_PATH,
    title: 'Sign Up',
    component: SignUp,
    layout: Main,
  },
  {
    path: CONTACT_PAGE_PATH,
    title: 'Contact information',
    component: Contact,
    layout: Main,
  },
];

export { USER_PAGE_PATH, SIGN_IN_PAGE_PATH, SIGN_UP_PAGE_PATH, pages };
