import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    // Logic to toggle between Sign In and Sign Up forms
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/DE-en-20250915-TRIFECTA-perspective_3b5a5cc2-80cb-4c14-b36b-f0ea8afce9a1_small.jpg"
        alt="Background"
      />
      <form className="absolute p-12 bg-black/80 w-1/4 my-36 mx-auto left-0 right-0 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Full Name"
          className={`p-4 my-2 w-full rounded lg bg-transparent border ${
            isSignInForm ? "hidden" : ""
          }`}
        ></input>
        <input
          type="email"
          placeholder="Email or mobile number"
          required
          className="p-4 my-2 w-full rounded lg bg-transparent border"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-4 my-2 w-full rounded lg bg-transparent border"
        />
        <button
          type="submit"
          className="outline-none p-3 my-4 bg-red-600 text-white w-full rounded lg z-10"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix? " : "Already a User? "}
          <span
            className="font-bold hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now!" : "Sign in now!"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
