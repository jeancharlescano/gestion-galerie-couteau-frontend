// PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom/dist';

const PrivateRoute = () => {
    console.log("private routes works")
    const auth = false
    return auth ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute;
