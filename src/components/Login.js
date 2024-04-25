import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignedInFrom, setIsSignedInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignIn = () => {
    setIsSignedInFrom(!isSignedInFrom);
    alert("sigh In:" + isSignedInFrom);
  };

  const handleButtonClick = (e) => {
    //Validate the form data
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    const errMessage = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errMessage);
    if (errMessage) return;
    if (!isSignedInFrom) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("sign up success!", user);
        })
        .catch((error) => {
          console.log("error",error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("sigh in success",user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errMessage = error.message;
          setErrorMessage(errorCode + " - "+ errMessage);
      })
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignedInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInFrom && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 rounded-sm "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm "
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          className="p-3 my-4 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignedInFrom ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignedInFrom
            ? "New to netfilx? Sign up Now"
            : "Already registerd ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
