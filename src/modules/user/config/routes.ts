import { lazy } from 'react';
import { IRoute } from 'common/definitions/routes';
import { Main } from 'common/layouts';
import { Spinner } from 'components';

const UserInfoPage = lazy(() =>
  import('modules/user/pages').then(({ UserInfo }) => ({
    default: UserInfo,
  })),
);

const SignInPage = lazy(() =>
  import('modules/user/pages').then(({ SignIn }) => ({
    default: SignIn,
  })),
);

const SignUpPage = lazy(() =>
  import('modules/user/pages').then(({ SignUp }) => ({
    default: SignUp,
  })),
);

const ContactPage = lazy(() =>
  import('modules/user/pages').then(({ Contact }) => ({
    default: Contact,
  })),
);

const USER_INFO_PAGE_PATH = '/user-info';
const SIGN_IN_PAGE_PATH = '/sign-in';
const SIGN_UP_PAGE_PATH = '/sign-up';
const CONTACT_PAGE_PATH = '/contact';

const routes: IRoute[] = [
  {
    path: USER_INFO_PAGE_PATH,
    title: 'User information',
    fallback: Spinner,
    component: UserInfoPage,
    layout: Main,
  },
  {
    path: SIGN_IN_PAGE_PATH,
    title: 'Sign In',
    fallback: Spinner,
    component: SignInPage,
    layout: Main,
  },
  {
    path: SIGN_UP_PAGE_PATH,
    title: 'Sign Up',
    fallback: Spinner,
    component: SignUpPage,
    layout: Main,
  },
  {
    path: CONTACT_PAGE_PATH,
    title: 'Contact information',
    fallback: Spinner,
    component: ContactPage,
    layout: Main,
  },
];

export {
  USER_INFO_PAGE_PATH,
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  CONTACT_PAGE_PATH,
  routes,
};
