import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  googleSigInStart,
  emailSigInStart,
} from 'modules/user/state/user.slice';
import {
  selectAuthLoading,
  selectCurrentUser,
} from 'modules/user/state/user.selectors';

import { AddToCartButton, Spinner } from 'components';

import { TextField } from 'modules/user/components';

import { IEvent } from 'definitions/event';

function SignIn(): React.ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const currentUser = useSelector(selectCurrentUser);
  const loading = useSelector(selectAuthLoading);

  const handleChange = (event: IEvent) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Sign In</h2>
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
          <AddToCartButton
            onClick={() => {
              dispatch(emailSigInStart({ email, password }));
            }}
          >
            {loading ? <Spinner width="30px" height="30px" /> : 'Sign in'}
          </AddToCartButton>
          <AddToCartButton
            onClick={() => {
              dispatch(googleSigInStart());
            }}
          >
            Continue with Google
          </AddToCartButton>
        </div>
      </div>
      <div />
    </div>
  );
}

export default SignIn;
