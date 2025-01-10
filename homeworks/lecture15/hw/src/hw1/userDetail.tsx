import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

const API_URL = 'https://api.github.com/users';

const UserDetail = () => {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<UserRepos[]>([]);
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    setLoading(true);
    getUserDetails(`${API_URL}/${username}`)
      .then(() => getUserRepos(`${API_URL}/${username}/repos`))
      .then(() => setLoading(false));
  }, [username]);


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

  return (
    <div className="hw1-container">
      <div className="detail-container">
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
                <div className="back-button" onClick={() => window.history.back()}>
                  Back
                </div>
                <img src={user.avatar_url} alt="avatar" />
              </div>
              <div className="detail">
                <h2> {user.login}</h2>
                <p>Location: {user.location}</p>
                <a href={user.html_url}>Github link</a>
                <p>Repositories:</p>
                <ul>
                  {repos.slice(0, 10).map((repo) => (
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
}

export default UserDetail;
