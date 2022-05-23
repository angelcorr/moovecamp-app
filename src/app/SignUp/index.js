import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUsers, singUpThunk } from "../redux/usersSlice";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectUsers);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== emailConfirmation) {
      setErrorMessage(`Email doesn't match`);
      return;
    }

    if (password !== passwordConfirmation) {
      setErrorMessage(`Password doesn't match`);
      return;
    }

    const newUser = { email, password };
    const thunkResponse = dispatch(singUpThunk(newUser));

    if (typeof thunkResponse === 'string') {
      setErrorMessage(thunkResponse);
      return;
    }

    navigate('/board');
  }

  return (
    <section className="bg-sticky-background-login bg-cover bg-center">
      <div className="h-screen flex justify-center items-center">
        <form
          className="w-64 md:w-80 lg:w-96 h-96 flex flex-col justify-evenly items-center border border-purple-800 rounded-md"
          onSubmit={(event) => handleSubmit(event)}
        >
          <p className="text-2xl">Sign Up</p>
          <input
            className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <input
            className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md"
            type="email"
            value={emailConfirmation}
            onChange={(event) => setEmailConfirmation(event.target.value)}
            placeholder="Confirm your email"
          />
          <input
            className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <input
            className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md"
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            placeholder="Confirm your Password"
          />
          {errorMessage && <p className="text-rose-800">{ errorMessage }</p>}
          <button
            className="w-24 p-1 border border-purple-800 rounded-md"
          >
            Sign In
          </button>
          <p className="text-xs">Do you have an account? <Link to="/"><strong>Log In</strong></Link></p>
        </form>
      </div>
    </section>
  )
};

export default SignUp;
