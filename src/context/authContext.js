import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authToken")
      ? jwtDecode(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("🚀 ~ AuthProvider ~ authTokens:", authTokens);
  //   console.log("🚀 ~ AuthProvider ~ user:", user);
  // }, [user]);

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

    if (response.status === 200) {
      setAuthTokens(data.accessToken);
      setUser(jwtDecode(data.accessToken));
      localStorage.setItem("authToken", JSON.stringify(data));
      navigate("/gallery");
    } else {
      alert("Something went wrong");
    }
  };

  const logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  let contextData = {
    user: user,
    loginUser: login,
    logoutUser: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
