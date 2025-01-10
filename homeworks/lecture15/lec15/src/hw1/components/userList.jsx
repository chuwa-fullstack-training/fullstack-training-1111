import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <div className="user-list-header">
        <span>ID</span>
        <span>Username</span>
        <span>Image</span>
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <span>{index + 1}</span>
            <span>
              <Link to={`/users/${user.login}`} className="user-link">
                {user.login}
              </Link>
            </span>
            <img src={user.avatar_url} alt={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
