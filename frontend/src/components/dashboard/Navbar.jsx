import React from "react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-between h-12 bg-teal-600 px-5">
      <p className="text-white">Welcome, {user?.name}</p>
      <button className="px-4 py-1 bg-teal-900 text-white hover:bg-teal-800">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
