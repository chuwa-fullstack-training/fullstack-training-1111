// PrivateRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ isAuthenticated, setRedirectAfterLogin, children }) {
  const location = useLocation();

  if (!isAuthenticated) {
    // Store the path they tried to visit
    setRedirectAfterLogin(location.pathname);
    // Redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the protected component
  return children;
}

export default PrivateRoute;
