import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IEvent } from 'common/definitions/event';
import { useSignUpStart, useSignUpLoading } from 'hooks/state/userState';

import { CustomButton as SignUpButton, Spinner } from 'components';
import { TextField } from 'modules/user/components';

function SignUp(): React.ReactElement {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const signUpLoading = useSignUpLoading();
  const signUpStart = useSignUpStart();

  const handleChange = (event: IEvent) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = () => {
    if (password.length < 6) {
      alert('Password should be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  return (
    <div className="c-sign-up m-t-b-0">
      <h1 className="m-t-b-0 m-b-24">Sign Up</h1>
      <span>Sign up with your email, name and password.</span>
      <span className="m-b-24">
        Already have account?{' '}
        <Link to="/sign-in" className="bold">
          Sign in here.
        </Link>
      </span>

      <form className="c-sign-up__form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          required
          autoFocus
          classes="m-b-30"
          handleChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          value={email}
          required
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
        <TextField
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          required
          classes="m-b-30"
          handleChange={handleChange}
        />

        <SignUpButton type="submit" classes="sign-up-button">
          {signUpLoading ? (
            <Spinner width="30px" height="30px" isInverted />
          ) : (
            'Sign up'
          )}
        </SignUpButton>
      </form>
      <div />
    </div>
  );
}

export default SignUp;
