import React, { useState } from "react";
import SignUpPage from "./signUpPage";
import SignInPage from "./signInPage";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [role, setRole] = useState("");
 

  return (
  
      <div className="bg-gray-50 rounded-lg shadow-lg p-6 w-[700px] min-w-[400px] max-w-lg relative">
        <h3 className="text-black font-serif text-xl m-2 flex justify-center">
          Unlock the Fun of Learning with 
          <strong>QuizLine</strong>!
        </h3>

        <div className="flex w-full mb-8 pl-4 mt-5">
          <button
            className={`flex-1 py-4 font-serif bg-blue-400 text-white text-lg rounded-l-lg transition-colors hover:bg-blue-800 ${
              isSignIn ? "bg-blue-700 font-bold" : ""
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-4 font-serif bg-blue-400 text-white text-lg rounded-r-lg transition-colors hover:bg-blue-800 ${
              !isSignIn ? "bg-blue-700 font-bold" : ""
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        {isSignIn ? (
          <SignInPage
            // setUsername={setUsername}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        ) : (
          <SignUpPage
            username={username}
            email={email}
            password={password}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            role={role}
            setRole={setRole}
          />
        )}

       
      </div>

  );
};

export default LoginPage;
