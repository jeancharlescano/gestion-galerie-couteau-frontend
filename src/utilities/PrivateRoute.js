import { Navigate, Outlet } from "react-router-dom/dist";
import { useContext } from "react";
import AuthContext from "../context/authContext";

const PrivateRoute = () => {
  console.log("private routes works");
  let { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
