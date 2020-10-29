import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AddToCartButton } from 'components';
import { TextField } from 'modules/user/components';

import { IEvent } from 'definitions/event';

function SignUp(): React.ReactElement {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    displayName: '',
  });
  const { email, password } = userCredentials;
  const handleChange = (event: IEvent) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Sign Up</h2>
      <span>Sign up with your email, name and password</span>
      <div>
        Have an account? <Link to="/sign-in">Sign in here.</Link>
      </div>
      <div>
        <TextField
          name="name"
          label="Display Name"
          value={email}
          handleChange={handleChange}
          type="text"
          required
        />
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
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          value={password}
          handleChange={handleChange}
          type="password"
          required
        />

        <div className="buttons">
          <AddToCartButton onClick={() => {}}>Sign up</AddToCartButton>
        </div>
      </div>
      <div />
    </div>
  );
}

export default SignUp;
