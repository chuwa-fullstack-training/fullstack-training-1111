import './App.css'
import { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetch('https://api.github.com/users').then(data => data.json()).then(d => setUsers(d));
  }, []);

  const handleClick = (id) => {
    setSelectedUser(users.find(user => user.id === id));
  }

  return (
    <>
      <div className='container'>
        <div className='sidebar'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {users?.map(user => {
                return (
                  <tr key={user.id} onClick={() => handleClick(user.id)}>
                    <td>{user.id}</td>
                    <td>{user.login}</td>
                    <td><img src={user.avatar_url}></img></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='content'>
          {selectedUser && <ProfileCard user={selectedUser}/>}
        </div>
      </div>
    </>
  )
}

export default App
