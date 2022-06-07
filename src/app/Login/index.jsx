import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logInThunk } from '../redux/usersSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUser = { email, password };
    const thunkResponse = dispatch(logInThunk(currentUser));

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
          <p className="text-2xl lg:text-3xl">Log In</p>
          <input
            className="log-sign-in-inputs"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <input
            className="log-sign-in-inputs"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />

          {errorMessage && <p className="text-center text-rose-800">{errorMessage}</p>}
          <button type="submit" className="w-24 p-1 border border-purple-800 rounded-md">Log In</button>
          <p className="text-xs">
            First time in Cheve Stickies?
            {' '}
            <Link to="/sign-up">
              <strong>Sign Up</strong>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
