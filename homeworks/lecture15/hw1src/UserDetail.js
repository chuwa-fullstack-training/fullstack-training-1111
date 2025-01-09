// UserDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function UserDetail() {
  const { login } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch user info
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((userData) => {
        // Then fetch user’s repos
        fetch(`https://api.github.com/users/${login}/repos`)
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
  }, [login]);

  if (!selectedUser) {
    return <div style={{ margin: "2rem" }}>Loading {login}...</div>;
  }

  return (
    <div className="container">
      <div className="userProfile" style={{ width: "100%" }}>
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
              <p className="subHeading">Location: {selectedUser.location}</p>
            )}
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default UserDetail;
