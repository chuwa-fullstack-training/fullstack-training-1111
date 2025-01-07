import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import axios from "axios";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  repos_url: string;
  url: string;
}

interface Repository {
  name: string;
  html_url: string;
  description: string;
}

interface DetailedUser {
  avatar_url: string;
  login: string;
  name: string | null;
  repos: Repository[];
}

function App() {
  const { data, loading, error } = useFetch<User[]>(
    "https://api.github.com/users"
  );

  const [selectedUser, setSelectedUser] = useState<DetailedUser | null>(null);

  const fetchRepoAndNameAndSetUser = async (user: User) => {
    try {
      const [userUrl, userRepoUrl] = await Promise.all([
        axios.get(user.url),
        axios.get(user.repos_url),
      ]);

      setSelectedUser({
        avatar_url: user.avatar_url,
        login: user.login,
        name: userUrl.data.name || "No name provided",
        repos: userRepoUrl.data.slice(0, 5).map((repo: Repository) => ({
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
        })),
      });
    } catch (error) {}
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="layout-container">
      {/* User List */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {data && Array.isArray(data) ? (
              data.map((user: any) => (
                <tr
                  key={user.id}
                  onClick={() => fetchRepoAndNameAndSetUser(user)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{user.id}</td>
                  <td>{user.login}</td>
                  <td>
                    <img
                      src={user.avatar_url}
                      alt={`${user.login}'s Avatar`}
                      width="50"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <p>No data found</p>
            )}
          </tbody>
        </table>
      </div>

      {/* User Profile Card */}
      <div style={{ flex: 1 }}>
        {selectedUser ? (
          <div className="profile-container">
            <div className="profile-card">
              <img
                src={selectedUser.avatar_url}
                alt={`${selectedUser}'s avatar`}
                width="100"
              />
              <h2>{selectedUser.login}</h2>
              <p>{selectedUser.name}</p>
              <h3>Repositories</h3>
              <ul>
                {selectedUser.repos.map((repo: Repository) => (
                  <li key={repo.name}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                    <p>{repo.description || null}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
