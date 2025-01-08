import React, { useState, useEffect } from "react";
import "./styles.css";
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUserClick = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((userData) => {
        fetch(`https://api.github.com/users/${username}/repos`)
          .then((res) => res.json())
          .then((reposData) => {
            const topRepos = reposData.slice(0, 3);

            setSelectedUser({
              ...userData,
              repos: topRepos,
            });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      {/* Left side: List of users */}
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

      {/* Right side: Selected user's profile */}
      <div className="userProfile">
        {/* If no user is selected yet, show a placeholder */}
        {!selectedUser ? (
          <p>Select a user to view profile</p>
        ) : (
          <>
            {/* Profile Header */}
            <div className="profileHeader">
              <img
                src={selectedUser.avatar_url}
                alt={selectedUser.login}
                className="profileAvatar"
              />
              <div>
                <h2 className="heading">
                  {selectedUser.name || selectedUser.login}
                </h2>
                {selectedUser.location && (
                  <p className="subHeading">
                    Location: {selectedUser.location}
                  </p>
                )}
              </div>
            </div>

            {/* Some Repositories */}
            <p>Repositories:</p>
            <ul className="repoList">
              {selectedUser.repos && selectedUser.repos.length > 0 ? (
                selectedUser.repos.map((repo) => (
                  <li key={repo.id} className="repoItem">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                    {repo.description && (
                      <div className="repoDesc">{repo.description}</div>
                    )}
                  </li>
                ))
              ) : (
                <li>No repositories found.</li>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
