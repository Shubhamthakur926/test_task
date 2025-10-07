// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from './pages/sign-in';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;