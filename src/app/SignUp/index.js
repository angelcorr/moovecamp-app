import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../redux/usersSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="bg-sticky-background-login bg-cover bg-center">
      <div className="h-screen flex justify-center items-center">
        <form className="w-64 md:w-80 lg:w-96 h-96 flex flex-col justify-evenly items-center border border-purple-800 rounded-md">
          <p className="text-2xl">Sign Up</p>
          <input className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md" type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
          <input className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md" type="email" placeholder="Confirm your email" />
          <input className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md" type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
          <input className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md" type="password" placeholder="Confirm your Password" />
          <button className="w-24 p-1 border border-purple-800 rounded-md" type="button" onClick={() => dispatch(signUp({ email, password }))}><Link to="/board">Sign Up</Link></button>
          <p className="text-xs">Do you have an account? <Link to="/"><strong>Log In</strong></Link></p>
        </form>
      </div>
    </section>
  )
};

export default SignUp;
