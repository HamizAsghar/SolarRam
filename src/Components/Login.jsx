import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../Styles/Style";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const localStorageEmail = JSON.parse(localStorage.getItem("email"));
    const localStoragePassword = JSON.parse(localStorage.getItem("password"));

    if (email === localStorageEmail && password === localStoragePassword) {
      toast.success("Login successful");
      localStorage.setItem("isAuthenticated", true);
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Login to Your Account
        </h2>

        <form onSubmit={handleOnSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-700"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={visible ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-700"
              />
              <span
                className="absolute right-3 top-2.5 text-slate-500 cursor-pointer"
                onClick={() => setVisible(!visible)}>
                {visible ? (
                  <AiOutlineEye size={22} />
                ) : (
                  <AiOutlineEyeInvisible size={22} />
                )}
              </span>
            </div>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm text-slate-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2 text-blue-600 border-gray-300 rounded"
              />
              Remember me
            </label>
            <Link
              to="/forget-password"
              className="text-blue-600 hover:text-blue-500 transition">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-md shadow-sm">
            Login
          </button>

          {/* Footer Link */}
          <p className="text-sm text-center text-slate-600">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
