import { useState, useEffect } from "react";
import UserListItem from "./UserListItem";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.github.com/users");
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="grid-table">
        <span className="columnName">ID</span>
        <span className="columnName">Username</span>
        <span className="columnName">Image</span>
        {users.map((u, i) => {
          return <UserListItem key={i} user={u} />;
        })}
      </div>
      <Link to="/">back</Link>
    </div>
  );
};

export default UserList;
