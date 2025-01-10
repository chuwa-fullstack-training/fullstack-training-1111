import { useState, useEffect } from "react";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
  html_url: string;
  repos_url: string;
}

interface UserRepos {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const API_URL = "https://api.github.com/users";

const Hw1 = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<UserRepos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      if (data) {
        setUsers(data);
      }
    });
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = (await response.json()) as User[];
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserDetails = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = (await response.json()) as User;
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserRepos = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = (await response.json()) as UserRepos[];
      setRepos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserClick = (user: User) => {
    setLoading(true);
    getUserDetails(user.url)
      .then(() => getUserRepos(user.repos_url))
      .then(() => setLoading(false));
  };

  return (
    <div className="hw1-container">
      <ul className="users-list">
        <li className="column-titles">
          <span>ID</span>
          <span>Username</span>
          <span>Image</span>
        </li>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              handleUserClick(user);
            }}
          >
            <span>{user.id}</span>
            <span>{user.login}</span>
            <img src={user.avatar_url} alt="avatar" className="user-image" />
          </li>
        ))}
      </ul>
      <div className="detail-container">
        {!user && <p>This is a loading page, Select a user to see details</p>}
        {loading ? (
          <div className="loader">
            <div className="loader-image">
              <div className="loader-circle blink"></div>
            </div>
            <div className="loader-content">
              <div className="loader-name blink"></div>
              <div className="loader-description blink"></div>
              <div className="loader-repos blink"></div>
            </div>
          </div>
        ) : (
          user &&
          repos && (
            <div className="user-details">
              <div className="detail-image">
                <img src={user.avatar_url} alt="avatar" />
              </div>
              <div className="detail">
                <h2> {user.login}</h2>
                <p>Location: {user.location}</p>
                <a href={user.html_url}>Github link</a>
                <p>Repositories:</p>
                <ul>
                  {repos.slice(0, 3).map((repo) => (
                    <li key={repo.id}>
                      <a href={repo.html_url}>{repo.name}</a>
                      <p>{repo.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Hw1;
