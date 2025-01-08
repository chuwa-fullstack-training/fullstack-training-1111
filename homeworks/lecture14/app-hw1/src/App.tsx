import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/User";
import UserDetails from "./pages/UserDetail";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Router */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />

        {/* Users Router */}
        <Route
          path="/users"
          element={isLoggedIn ? <Users /> : <Navigate to="/login" replace />}
        />

        {/* User Details Router */}
        <Route
          path="/users/:login"
          element={
            isLoggedIn ? <UserDetails /> : <Navigate to="/login" replace />
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
