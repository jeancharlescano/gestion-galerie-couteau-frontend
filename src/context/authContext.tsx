'use client'

import { createContext, useState, useEffect, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface User {
  isAdmin?: boolean;
  [key: string]: any;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthContextType {
  user: User | null;
  loginUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loginUser: async () => {},
  logoutUser: () => {},
});

export default AuthContext;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("authToken");
      return token ? JSON.parse(token) : null;
    }
    return null;
  });
  
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("authToken");
      return token ? jwtDecode(token) : null;
    }
    return null;
  });
  
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || process.env.VITE_REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      }
    );

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.accessToken));
      localStorage.setItem("authToken", JSON.stringify(data));
      router.push("/gallery");
    } else {
      alert("Something went wrong");
    }
  };

  const logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const updateToken = async () => {
    if (!authTokens) return;
    
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || process.env.VITE_REACT_APP_API_URL}/auth/refresh`,
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
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};