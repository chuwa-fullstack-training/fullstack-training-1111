import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  repos_url: string;
  url: string;
}

const Users = () => {
  const { data, loading, error } = useFetch<User[]>(
    "https://api.github.com/users"
  );

  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {data && Array.isArray(data) ? (
            data.map((user: any) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/users/${user.login}`)}
                style={{ cursor: "pointer" }}
              >
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s Avatar`}
                    width="50"
                  />
                </td>
              </tr>
            ))
          ) : (
            <p>No data found</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
