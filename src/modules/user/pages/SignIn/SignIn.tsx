import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  useGoogleSignInStart,
  useEmailSignInStart,
  useGoogleSignInLoading,
  useEmailSignInLoading,
} from 'hooks/state/userState';

import { IEvent } from 'common/definitions/event';
import { AddToCartButton, Spinner } from 'components';
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

  return (
    <div className="sign-in">
      <h1 className="sign-in__title">Sign In</h1>
      <span>Sign in with your email and password.</span>
      <span className="sign-in__signup-text">
        No account? <Link to="/sign-up">Create here.</Link>
      </span>
      <div className="sign-in__group-textfield">
        <TextField
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          type="email"
          required
        />
        <TextField
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          type="password"
          required
        />

        <div className="sign-in__group-button">
          <AddToCartButton onClick={() => emailSigInStart({ email, password })}>
            {emailSignInLoading ? (
              <Spinner width="30px" height="30px" />
            ) : (
              'Sign in'
            )}
          </AddToCartButton>
          <AddToCartButton onClick={googleSigInStart}>
            {googleSignInLoading ? (
              <Spinner width="30px" height="30px" />
            ) : (
              'Continue with Google'
            )}
          </AddToCartButton>
        </div>
      </div>
      <div />
    </div>
  );
}

export default SignIn;
