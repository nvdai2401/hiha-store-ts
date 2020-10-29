import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUpStart } from 'modules/user/state/user.slice';

import { AddToCartButton } from 'components';
import { TextField } from 'modules/user/components';

import { IEvent } from 'definitions/event';

function SignUp(): React.ReactElement {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (event: IEvent) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    if (password.length < 6 && password.length < 6) {
      alert('Password should be at least 6 characters');
    }
    dispatch(signUpStart({ email, password, displayName }));
  };

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Sign Up</h2>
      <span>Sign up with your email, name and password</span>
      <span className="sign-in__signup-text">
        Have an account? <Link to="/sign-in">Sign in here.</Link>
      </span>
      <div className="sign-in__group-textfield">
        <TextField
          name="displayName"
          label="Display Name"
          value={displayName}
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
          value={confirmPassword}
          handleChange={handleChange}
          type="password"
          required
        />

        <div className="sign-in__group-button">
          <AddToCartButton onClick={handleSubmit}>Sign up</AddToCartButton>
        </div>
      </div>
      <div />
    </div>
  );
}

export default SignUp;
