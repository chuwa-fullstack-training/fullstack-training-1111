import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    return localStorage.getItem('loggedin') ? children : <Navigate to="/login" />
}

export default ProtectedRoute;