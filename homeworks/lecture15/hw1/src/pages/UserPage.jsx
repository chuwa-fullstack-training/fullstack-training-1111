import {useState, useEffect, useMemo} from 'react';
import {useNavigate, Link} from 'react-router-dom';

export default function UserPage() {
  const user = useMemo(() => localStorage.getItem('user'), []);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const container = {
    margin: 'auto',
  };

  useEffect(() => {
    if (!user) navigate('/login', {state: {from: '/users'}});
  }, [navigate, user]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((data) => data.json())
      .then((d) => setUsers(d));
  }, []);

  return (
    <div style={container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={user.login}>{user.login}</Link>
                </td>
                <td>
                  <img
                    style={{width: 150, height: 150}}
                    src={user.avatar_url}
                  ></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
