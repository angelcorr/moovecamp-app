import { Link } from "react-router-dom";

const Login = () => (
  <section className="bg-sticky-background-login bg-cover bg-center">
    <div className="h-screen flex justify-center items-center">
      <form className="w-64 md:w-80 lg:w-96 h-96 flex flex-col justify-evenly items-center border border-purple-800 rounded-md">
        <p className="text-2xl lg:text-3xl">Log In</p>
        <input className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md" type="email" placeholder="Email" />
        <input className="w-48 md:w-64 lg:w-80 p-2.5 border border-purple-800 rounded-md" type="password" placeholder="Password" />
        <button className="w-24 p-1 border border-purple-800 rounded-md">Log In</button>
        <p className="text-xs">First time in Cheve Stickies? <Link to="/sign-up"><strong>Sign Up</strong></Link></p>
      </form>
    </div>
  </section>
);

export default Login;
