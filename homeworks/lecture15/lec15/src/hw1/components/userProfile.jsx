import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { login } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userResponse = await fetch(`https://api.github.com/users/${login}`);
      const reposResponse = await fetch(`https://api.github.com/users/${login}/repos`);
      const userData = await userResponse.json();
      const reposData = await reposResponse.json();
      setUserDetails({ ...userData, repos: reposData });
    };

    fetchUserDetails();
  }, [login]);

  if (!userDetails) return <p>Loading...</p>;

  return (
    <div className="user-profile">
      <div className="profile-card">
        <img src={userDetails.avatar_url} alt={userDetails.login} className="profile-avatar" />
        <h2>{userDetails.name || userDetails.login}</h2>
        <p>Location: {userDetails.location || 'Not available'}</p>
        <h3>Repositories:</h3>
        <ul>
          {userDetails.repos.slice(0, 5).map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>{repo.description || 'No description'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
