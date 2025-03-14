import React, { useState } from "react";
import background from "../../assets/background.jpg"; // Import ảnh nền
import "./Login.css"
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="card-login">
        <h2 className="text-2xl font-bold text-gray-800 text-center">WELCOME BACK</h2>
        <h3 className="text-lg font-semibold text-center mt-2">Log In to your Account</h3>
        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-pink-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-pink-500 hover:underline">Forgot Password?</a>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition"
          >
            CONTINUE
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          New User? <a href="#" className="text-pink-500 font-semibold hover:underline">SIGN UP HERE</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
