import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

const Container = styled.div`
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 400px;

  > * {
    width: 100%; /* Applies to all direct children */
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      const timeout = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timeout);
    }
  }, [user, navigate]);

  return user ? (
    <div>Will redirect back to the last page...</div>
  ) : (
    <Container>
      <form
        style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem('user', e.target.elements.username.value);
          console.log(location.state);
          navigate(from, {replace: true});
        }}
      >
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <input
          style={{marginTop: 10, backgroudColor: '#ddd'}}
          type="submit"
          value="Submit"
        />
      </form>
    </Container>
  );
};

export default LoginPage;
