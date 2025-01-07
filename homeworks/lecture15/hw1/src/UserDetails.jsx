import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UserCard = () => {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const userDetailUrl = `https://api.github.com/users/${username}`;
  const reposUrl = `https://api.github.com/users/${username}/repos`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: user } = await axios.get(userDetailUrl);
        const { data: repos } = await axios.get(reposUrl);
        setUser(user);
        setRepos(repos);
        setFetching(false);
        // console.log(repos);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [username]);

  const getRepos = () => {
    return repos.slice(0, 5).map((repo, i) => (
      <li key={i}>
        <div className="repoName">{repo.name}</div>
        <div className="repoDescription">{repo.description}</div>
      </li>
    ));
  };

  if (fetching) {
    return <div className="userCard">Loading...</div>;
  } else {
    return (
      <div className="userCard">
        <div className="userAvatar">
          <img src={user.avatar_url} alt="asd" />
        </div>
        <div className="userBio">
          <div className="name">{user.name}</div>
          <div className="location">Location: {user.location}</div>
          <div>
            <div className="location">Repositories:</div>
            <ul>{getRepos()}</ul>
          </div>
        </div>
        <Link to="/users">back</Link>
      </div>
    );
  }
};

export default UserCard;
