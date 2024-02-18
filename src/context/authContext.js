import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("🚀 ~ AuthProvider ~ authTokens:", authTokens);
    console.log("🚀 ~ AuthProvider ~ user:", user);
  }, [user]);

  let login = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    let response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();
    console.log("🚀 ~ login ~ data:", data);
    const userData = jwtDecode(data.accessToken);

    if (response.status === 200) {
      setAuthTokens(data.accessToken);
      setUser(userData);
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  let contextData = {
    user: user,
    loginUser: login,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
