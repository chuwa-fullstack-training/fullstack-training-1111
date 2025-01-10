import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { FC, ReactNode } from 'react';

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const user = useMemo(() => localStorage.getItem('user'), []);
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/hw1/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/hw1/login');
  }

  return (
    <div>
      <nav>
        <Link to="/hw1">Home</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      {children}
    </div>
  );
}

export default ProtectedRoute;