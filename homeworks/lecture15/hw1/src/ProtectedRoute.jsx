import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, setRedirectPath, children }) => {
  if (!isLoggedIn) {
    setRedirectPath(window.location.pathname); // Save the current path
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
