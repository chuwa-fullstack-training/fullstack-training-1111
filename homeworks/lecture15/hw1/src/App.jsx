import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/:login" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
