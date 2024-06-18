import React, { useState, useRef } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  GENERIC_ERROR_MESSAGE,
  INVALID_CREDENTIALS_ERROR_CODE,
  INVALID_CREDENTIALS_ERROR_MESSAGE,
} from "../constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const user = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  async function signUp() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
    } catch (error) {
      setErrorMessage(GENERIC_ERROR_MESSAGE);
    }
  }

  async function signIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === INVALID_CREDENTIALS_ERROR_CODE)
        setErrorMessage(INVALID_CREDENTIALS_ERROR_MESSAGE);
      else setErrorMessage(GENERIC_ERROR_MESSAGE);
    }
  }

  const handleButtonClick = () => {
    const validationResult = validateData(
      email.current.value,
      password.current.value
    );
    if (validationResult instanceof Error) {
      setErrorMessage(validationResult.message);
      return;
    }
    // in case the data is valid, we want to sign in/sign up the user.
    setErrorMessage(null);
    if (isSignInForm) signIn();
    else signUp();
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background"
        ></img>
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={user}
            type="text"
            placeholder="Name"
            className="p-3 my-3 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700"
        />
        <p className="text-red-500 my-2 font-bold text-lg">{errorMessage}</p>
        <button
          className="my-5 h-9 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-3" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
