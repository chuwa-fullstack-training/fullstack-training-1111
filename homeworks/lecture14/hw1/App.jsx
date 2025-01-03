import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import UserListItem from "./UserListItem";
import UserCard from "./UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [displayUser, setDisplayUser] = useState(null);

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
          return (
            <UserListItem key={i} user={u} setDisplayUser={setDisplayUser} />
          );
        })}
      </div>
      <div className="userCardContainer">
        {displayUser === null ? "" : <UserCard username={displayUser} />}
      </div>
    </div>
  );
};

export default App;