import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignInPage from './auth/login/components/SignInPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to sign in */}
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  )
}

export default App