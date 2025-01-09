import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => {
            onSelectUser(user.login); // Update the selected user
            navigate(`/users/${user.login}`); // Navigate to the user's profile page
          }}
        >
          <img src={user.avatar_url} alt={user.login} />
          <span>{user.login}</span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
