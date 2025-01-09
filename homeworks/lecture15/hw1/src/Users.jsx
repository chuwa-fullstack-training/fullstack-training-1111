import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Profile from './Profile';
import './Users.css'

function Users() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    fetch('https://api.github.com/users').then((res) => res.json()).then((res) => {
      setUsers(res);
    });
  }, []);

  const loadProfile = (e) => {
    const id = e.currentTarget.id;
    setSelected(users[parseInt(id)]);
  }

  return (
    <>
    <div className='users'>
      <div className='userTable'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return (
                <tr id={index} key={index} onClick={loadProfile}>
                  <td>{user.id}</td>
                  <td>
                    <Link to={`/users/${user.login}`}>{user.login}</Link>
                  </td>
                  <td><img src={user.avatar_url} /></td>
                </tr>
              
              );
            })
          }
        </tbody>
      </table>
      </div>
      {selected && <Profile user={selected} className='profile' />}
    </div>
    </>
  )
}

export default Users;