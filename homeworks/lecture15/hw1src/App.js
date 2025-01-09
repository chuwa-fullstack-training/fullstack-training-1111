import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
//route
import Login from "./Login";
import Users from "./Users";
import UserDetail from "./UserDetail";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [redirectAfterLogin, setRedirectAfterLogin] = useState("/");

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              redirectAfterLogin={redirectAfterLogin}
              setRedirectAfterLogin={setRedirectAfterLogin}
            />
          }
        />

        <Route
          path="/users"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              setRedirectAfterLogin={setRedirectAfterLogin}
            >
              <Users />
            </PrivateRoute>
          }
        />

        <Route
          path="/users/:login"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              setRedirectAfterLogin={setRedirectAfterLogin}
            >
              <UserDetail />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
};

export default App;
