import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import './hw1.css';

const GitFetcher = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} redirectPath={redirectPath} />}
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} setRedirectPath={setRedirectPath}>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/:login"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} setRedirectPath={setRedirectPath}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const ProtectedRoute = ({ isLoggedIn, setRedirectPath, children }) => {
  if (!isLoggedIn) {
    setRedirectPath(window.location.pathname);
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default GitFetcher;
