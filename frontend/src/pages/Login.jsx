import React, { useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response?.data?.success) {
        login(response?.data?.user);
        localStorage.setItem("token", response?.data?.token);
        if (response?.data?.user?.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      if (!error?.response?.data?.success) {
        setError(error?.response?.data?.error);
      } else {
        setError("Server error");
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <h1 className="font-[Pacifico] text-3xl text-white">
        Employee Management System
      </h1>

      <div className="border shadow p-6 w-80 bg-white">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="text-block bg-white">
              Email
            </label>
            <input
              className="w-full border px-3 py-2"
              type="email"
              name="email"
              placeholder="john@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="text-block bg-white">
              Password
            </label>
            <input
              className="w-full border px-3 py-2"
              type="password"
              name="Password"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-teal-600">
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-teal-600 text-white p-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
