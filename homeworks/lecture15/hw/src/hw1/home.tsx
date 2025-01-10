import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration } from 'react-router-dom';

interface User {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
  html_url: string;
  repos_url: string;
}
const API_URL = "https://api.github.com/users";

const Hw1 = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

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

  const handleUserClick = (username: string) => {
    navigate(`/hw1/${username}`);
  };
 
  return (
    <>
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
              handleUserClick(user.login);
            }}
          >
            <span>{user.id}</span>
            <span>{user.login}</span>
            <img src={user.avatar_url} alt="avatar" className="user-image" />
          </li>
        ))}
      </ul>
    </div>
    <ScrollRestoration />
    </>
  );  
}

export default Hw1;