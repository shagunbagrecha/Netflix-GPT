import { useState, useRef } from "react";
import { validateData } from "../utils/validation";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrormessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    // Logic to toggle between Sign In and Sign Up forms
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validate the form Data
    validateData(email.current.value, password.current.value);
    const message = validateData(email.current.value, password.current.value);
    setErrormessage(message);

    if (message) return;

    //Sign In/ Sign Up Logic here
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrormessage(error.message);

            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    }

    // Proceed with form submission if no error
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
          ref={name}
          type="text"
          placeholder="Full Name"
          className={`p-4 my-2 w-full rounded lg bg-transparent border ${
            isSignInForm ? "hidden" : ""
          }`}
        ></input>
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          required
          className="p-4 my-2 w-full rounded lg bg-transparent border"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          required
          className="p-4 my-2 w-full rounded lg bg-transparent border"
        />
        <button
          type="submit"
          className="outline-none p-3 my-4 bg-red-600 text-white w-full rounded lg z-10"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-yellow-600">{errormessage}</p>
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
