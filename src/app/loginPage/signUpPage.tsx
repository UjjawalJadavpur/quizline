import React from "react";
import { faEnvelope, faGraduationCap, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

interface SignUpPageProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpPage: React.FC<SignUpPageProps> = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  role,
  setRole,
}) => {
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !role) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.0.167:3000/users/signup",
        { userName: username, email, password, role },
        { withCredentials: true }
      );

      if (response.status >= 200 && response.status < 300) {
        alert("Registered Successfully");
        setUsername("");
        setEmail("");
        setPassword("");
        setRole("");

        localStorage.setItem("quiz_Line", JSON.stringify(response.data));
        // Uncomment if you have navigation logic:
        // navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (error: unknown) {
      console.error(
        "Sign up failed:",
        error instanceof Error ? error.message : "Unknown error"
      );
      alert("Registration failed. Please check your details and try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-[350px]">
        <div className="relative mb-4 w-full max-w-[400px]">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            className="w-full pl-10 py-2 text-black border border-gray-300 rounded focus:border-blue-500"
            value={username}
            placeholder="Enter the User Name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative mb-4 w-full max-w-[400px]">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="email"
            className="w-full pl-10 py-2 text-black border border-gray-300 rounded focus:border-blue-500"
            value={email}
            placeholder="Enter your Email-id"
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
            className="w-full pl-10 py-2 text-black border border-gray-300 rounded focus:border-blue-500"
            value={password}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="relative mb-4 w-full max-w-[400px]">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <select
            className="w-full pl-10 py-2 text-gray-400 border border-gray-300 rounded focus:border-blue-500 bg-white"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="teacher" className="text-black">
              As a Teacher
            </option>
            <option value="student" className="text-black">
              As a Student
            </option>
          </select>
        </div>
        <button
          className="py-2 px-5 w-full max-w-[400px] border-none rounded bg-blue-700 text-white font-bold cursor-pointer hover:bg-blue-800 mb-3"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
