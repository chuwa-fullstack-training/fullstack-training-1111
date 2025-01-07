import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="page">
      <h1>Home</h1>
      {user === null ? (
        <Link to="/login">Login Here</Link>
      ) : (
        <p style={{ cursor: "pointer" }} onClick={handleLogout}>
          Logout Here
        </p>
      )}
    </div>
  );
};

export default Home;
