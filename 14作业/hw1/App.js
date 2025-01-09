import React, { useState } from "react";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://api.github.com/users");
  const [selectedUser, setSelectedUser] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleUserClick = async (url) => {
    try {
      const response = await fetch(url);
      const userData = await response.json();
      setSelectedUser(userData);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* User List */}
      <div style={{ flex: 1 }}>
        <h1>GitHub Users:</h1>
        {Array.isArray(data) &&
          data.map((user) => (
            <div
              key={user.id}
              onClick={() => handleUserClick(user.url)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "10px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <p>{user.login}</p>
            </div>
          ))}
      </div>

      {/* User Details */}
      <div style={{ flex: 2 }}>
        {selectedUser ? (
          <div>
            <h1>{selectedUser.name || selectedUser.login}</h1>
            <img
              src={selectedUser.avatar_url}
              alt={selectedUser.login}
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <p>
              <strong>Username:</strong> {selectedUser.login}
            </p>
            <p>
              <strong>Profile:</strong>{" "}
              <a
                href={selectedUser.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedUser.html_url}
              </a>
            </p>
            <p>
              <strong>Bio:</strong> {selectedUser.bio || "No bio available"}
            </p>
            <h2>Repositories:</h2>
            <Repositories url={selectedUser.repos_url} />
          </div>
        ) : (
          <p>Click on a user to view details</p>
        )}
      </div>
    </div>
  );
};

const Repositories = ({ url }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p>Error loading repositories</p>;
  }

  return (
    <ul>
      {data.slice(0, 5).map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default App;
