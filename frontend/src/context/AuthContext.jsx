import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:3000/api/auth/verify",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response?.data?.success) {
            setUser(response?.data?.user);
          }
        } else {
          setUser(null);
          setLoading(false);
        }
      } catch (error) {
        if (!error?.response?.data?.success) {
          setUser(null);
          setLoading(false);
        }
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);

export default AuthContext;
