import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import RoleSelection from "../component/roleSelection";

interface SignInPageProps {
  // setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const SignInPage: React.FC<SignInPageProps> = ({
  email,
  password,
  setEmail,
  setPassword,
}) => {
  

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://http://192.168.0.167:3000/users/login', 
            { email, password },
            { withCredentials: true }  
          );
    
          console.log('Login successful:', response.data);
           <RoleSelection role={response.data.role}/>
          // Set authentication user and navigate
        //   setAuthUser(response.data);
        //   navigate('/');  // Assuming you have a navigate function to redirect
    
          // Store user data in localStorage
          localStorage.setItem("Chat_App", JSON.stringify(response.data));
        } catch (error: unknown) {
            // Narrow the type of 'error' to AxiosError
            if (axios.isAxiosError(error)) {
              console.log('Login failed:', error.response);
              alert('Login failed. Please check your credentials and try again.');
            } else {
              console.error('An unexpected error occurred:', error);
            }
          }
      };

      const handleKeyDownForLogin = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          handleLogin();
        }
      };

  return (
    <div className="flex flex-col items-center text-black min-h-[350px] ">
      
      
      <div className="relative mb-4 w-full max-w-[400px]">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          className="w-full pl-10 py-2 border border-gray-300 rounded focus:border-blue-500 text-black"
          value={email}
          placeholder="Enter your Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative mb-4 w-full max-w-[400px]">
        <FontAwesomeIcon
          icon={faLock}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="password"
          className="w-full pl-10 py-2 border border-gray-300 rounded focus:border-blue-500 text-black"
          value={password}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDownForLogin}
        />
      </div>
      <div className=" text-lg text-gray-300 cursor-pointer hover:text-gray-700 mb-8">
        <span>Forgot Password?</span>
      </div>

      <button
        className="py-2 px-5 w-full max-w-[400px] border-none rounded bg-blue-700 text-white font-bold cursor-pointer hover:bg-blue-800"
        onClick={handleLogin}
      >
        Log in
      </button>
    
    </div>
  );
};

export default SignInPage;
