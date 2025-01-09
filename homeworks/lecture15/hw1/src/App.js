/*
import React, { useState } from "react";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import "./App.css";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">

      <div className="user-list-container">
        <UserList onSelectUser={(user) => setSelectedUser(user)} />
      </div>


      <div className="user-profile-container">
        {selectedUser ? (
          <UserProfile username={selectedUser} />
        ) : (
          <p>Select a user to view their profile</p>
        )}
      </div>
    </div>
  );
};

export default App;

*/
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [redirectPath, setRedirectPath] = useState("/users"); // Path to redirect after login
  const [selectedUser, setSelectedUser] = useState(null); // Tracks the selected GitHub user

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedUser(null); // Clear selected user on logout
  };

  return (
    <Router>
      <div>
        {/* Logout Button */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              padding: "10px",
              background: "#f44",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}

        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                redirectPath={redirectPath}
              />
            }
          />

          {/* Protected Route for User List */}
          <Route
            path="/users"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                setRedirectPath={setRedirectPath}
              >
                <UserList
                  onSelectUser={(userLogin) => {
                    console.log("Selected User:", userLogin); // Debugging log
                    setSelectedUser(userLogin); // Save the selected user login
                  }}
                />
              </ProtectedRoute>
            }
          />

          {/* Protected Route for User Profile */}
          <Route
            path="/users/:login"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                setRedirectPath={setRedirectPath}
              >
                {selectedUser ? (
                  <UserProfile username={selectedUser} />
                ) : (
                  <Navigate to="/users" />
                )}
              </ProtectedRoute>
            }
          />

          {/* Default Redirect */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
