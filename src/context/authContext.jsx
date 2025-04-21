import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwtDecode(localStorage.getItem("authToken"))
      : null
  );
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  let login = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      }
    );

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
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

  const updateToken = async () => {
    let response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: authTokens.refreshToken,
        }),
      }
    );

    let data = await response.json();

    if (response.status === 200) {
      let newAuthData = {
        accessToken: data,
        refreshToken: authTokens.refreshToken,
      };

      setAuthTokens(newAuthData);
      setUser(jwtDecode(data.accessToken));
      localStorage.setItem("authToken", JSON.stringify(data));
    } else {
      logout();
    }
  };

  let contextData = {
    user: user,
    loginUser: login,
    logoutUser: logout,
  };

  useEffect(() => {
    let fiftyNineMin = 1000 * 60 * 59;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fiftyNineMin);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
