import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

const UserDetails = () => {
  const { login } = useParams<{ login: string }>();

  const [user, setUser] = useState<DetailedUser | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userRes = await axios.get(
          `https://api.github.com/users/${login}`
        );
        const reposRes = await axios.get(userRes.data.repos_url);

        setUser({
          avatar_url: userRes.data.avatar_url,
          login: userRes.data.login,
          name: userRes.data.name || "No name provided",
          repos: reposRes.data.slice(0, 5).map((repo: Repository) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
          })),
        });
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    };

    fetchUserDetails();
  }, [login]);

  if (!user) return <p>Loading user details...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
        <h2>{user.login}</h2>
        <p>{user.name}</p>
        <h3>Repositories</h3>
        <ul>
          {user.repos.map((repo: Repository) => (
            <li key={repo.name}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>{repo.description || null}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
