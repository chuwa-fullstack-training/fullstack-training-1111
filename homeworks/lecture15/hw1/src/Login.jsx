import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, redirectPath }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials
  const hardcodedUsername = "admin";
  const hardcodedPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setIsLoggedIn(true);
      navigate(redirectPath); // Redirect to the original page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
