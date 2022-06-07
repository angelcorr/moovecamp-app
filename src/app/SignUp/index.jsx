import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { singUpThunk } from '../redux/usersSlice';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== emailConfirmation) {
      setErrorMessage('Email doesn\'t match');
      return;
    }

    if (password !== passwordConfirmation) {
      setErrorMessage('Password doesn\'t match');
      return;
    }

    const newUser = { email, password };
    const thunkResponse = dispatch(singUpThunk(newUser));

    if (typeof thunkResponse === 'string') {
      setErrorMessage(thunkResponse);
      return;
    }

    navigate('/board');
  };

  return (
    <section className="bg-sticky-background-login bg-cover bg-center">
      <div className="h-screen flex justify-center items-center">
        <form
          className="log-sign-in-form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <p className="text-2xl">Sign Up</p>
          <input
            className="log-sign-in-inputs"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <input
            className="log-sign-in-inputs"
            type="email"
            value={emailConfirmation}
            onChange={(event) => setEmailConfirmation(event.target.value)}
            placeholder="Confirm your email"
          />
          <input
            className="log-sign-in-inputs"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <input
            className="log-sign-in-inputs"
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            placeholder="Confirm your Password"
          />
          {errorMessage && <p className="text-center text-rose-800">{errorMessage}</p>}
          <button type="submit" className="w-24 p-1 border border-purple-800 rounded-md">Sign In</button>
          <p className="text-xs">
            Do you have an account?
            {' '}
            <Link to="/">
              <strong>Log In</strong>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
