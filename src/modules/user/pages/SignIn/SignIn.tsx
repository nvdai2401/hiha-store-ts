import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  useGoogleSignInStart,
  useEmailSignInStart,
  useGoogleSignInLoading,
  useEmailSignInLoading,
} from 'hooks/state/userState';

import { IEvent } from 'common/definitions/event';
import {
  CustomButton as SignInButton,
  CustomButton as GoogleSignInButton,
  Spinner,
} from 'components';
import { TextField } from 'modules/user/components';

function SignIn(): React.ReactElement {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const googleSignInLoading = useGoogleSignInLoading();
  const emailSignInLoading = useEmailSignInLoading();
  const googleSigInStart = useGoogleSignInStart();
  const emailSigInStart = useEmailSignInStart();

  const handleChange = (event: IEvent) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = () => {
    emailSigInStart({ email, password });
  };

  return (
    <div className="c-sign-in m-t-b-0">
      <h1 className="m-t-b-0 m-b-24">Sign In</h1>
      <span>Sign in with your email and password.</span>
      <span className="m-b-18">
        No account?{' '}
        <Link to="/sign-up" className="bold">
          Create here.
        </Link>
      </span>

      <form className="c-sign-in__form" onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          label="Email"
          value={email}
          required
          autoFocus
          classes="m-b-30"
          handleChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={password}
          required
          classes="m-b-30"
          handleChange={handleChange}
        />

        <div className="c-sign-in__form__group-button">
          <SignInButton type="submit">
            {emailSignInLoading ? (
              <Spinner width="30px" height="30px" isInverted />
            ) : (
              'Sign in'
            )}
          </SignInButton>
          <GoogleSignInButton
            classes="google-c-sign-in-button"
            onClick={googleSigInStart}
          >
            {googleSignInLoading ? (
              <Spinner width="30px" height="30px" />
            ) : (
              'Continue with Google'
            )}
          </GoogleSignInButton>
        </div>
      </form>
      <div />
    </div>
  );
}

export default SignIn;
