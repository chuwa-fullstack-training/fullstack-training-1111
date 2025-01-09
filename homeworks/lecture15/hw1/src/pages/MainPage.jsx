import {Link, useNavigate} from 'react-router-dom';

export default function MainPage() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div style={{margin: 'auto', alignItems: 'center', textAlign: 'center'}}>
      <h1>Home</h1>
      {user && (
        <>
          <div>Welcome {user}</div>
          <button onClick={handleLogOut}>Log out</button>
        </>
      )}
      {!user && <Link to="login">Login</Link>}
    </div>
  );
}
