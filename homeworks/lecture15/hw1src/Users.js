// Users.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // On click, go to that user’s detail route
  const handleUserClick = (username) => {
    navigate(`/users/${username}`);
  };

  return (
    <div className="container">
      <div className="userList">
        <h2>GitHub Users</h2>
        {users.map((user) => (
          <div
            key={user.id}
            className="userListItem"
            onClick={() => handleUserClick(user.login)}
          >
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <span>{user.login}</span>
          </div>
        ))}
      </div>
      <div className="userProfile">
        <p>Select a user to view profile</p>
      </div>
    </div>
  );
}

export default Users;
