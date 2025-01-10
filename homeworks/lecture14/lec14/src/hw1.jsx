import React, { useEffect, useState } from 'react';
import './hw1.css';

const GitFetcher = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const fetchUserDetails = async (username) => {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const userData = await userResponse.json();
    const reposData = await reposResponse.json();
    setUserDetails({ ...userData, repos: reposData });
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    fetchUserDetails(user.login);
  };

  return (
    <div className="app-container">

<div className="user-list">
  <div className="user-list-header">
    <span>ID</span>
    <span>Username</span>
    <span>Image</span>
  </div>
  <ul>
    {users.map((user, index) => (
      <li key={user.id} onClick={() => handleUserClick(user)}>
        <span>{index + 1}</span> {/* Displaying row index as ID */}
        <span>{user.login}</span>
        <img src={user.avatar_url} alt={user.login} />
      </li>
    ))}
  </ul>
</div>

      <div className="user-profile">
        {userDetails ? (
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
        ) : (
          <p>Select a user to view their profile</p>
        )}
      </div>
    </div>
  );
};

export default GitFetcher;
