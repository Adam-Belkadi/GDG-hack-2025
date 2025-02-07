import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './auth/login/components/SignInPage';
import SignUp from './auth/signup/signup';
import HomePage from './pages/home page/homepage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;