import { Navigate } from "react-router-dom";
import { useMemo } from "react";

const ProtectedRoute = ({ children }) => {
  const user = useMemo(() => localStorage.getItem("user"), []);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
