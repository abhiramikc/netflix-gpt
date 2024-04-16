import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignedInFrom, setIsSignedInFrom] = useState(true);
    const toggleSignIn = () =>
    {
    setIsSignedInFrom(!isSignedInFrom);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                alt="background-img"/>
            </div>
            <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignedInFrom ? "Sign In" : "Sign Up"}</h1>
                  {!isSignedInFrom && 
                    (
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-sm " />
                )
                }
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-sm " />
              
                <input type="password" placeholder="password" className="p-4 my-4 w-full bg-gray-700 rounded-sm" />
                <button className="p-4 my-4 bg-red-700 w-full rounded-md">{ isSignedInFrom ? "Sign In" : "Sign Up" }</button>

                <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{ isSignedInFrom ? "New to netfilx? Sign up Now" : "Already registerd ? Sign In Now" }</p>
            </form>
        </div>
    )
}
export default Login;