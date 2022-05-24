import { useState } from 'react';
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
          className="w-64 md:w-80 lg:w-96 h-96 flex flex-col justify-evenly items-center border border-purple-800 rounded-md"
          onSubmit={(event) => handleSubmit(event)}
        >
          <p className="text-2xl lg:text-3xl">Log In</p>
          <input
            className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <input
            className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />

          {errorMessage && <p className="text-rose-800">{errorMessage}</p>}
          <button className="w-24 p-1 border border-purple-800 rounded-md">Log In</button>
          <p className="text-xs">
            First time in Cheve Stickies?{' '}
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
