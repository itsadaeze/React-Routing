
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import { AuthProvider } from './context/authcontext';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { Profile } from './pages/profile';
import { Settings } from './pages/settings';
import { PrivateRoute } from './components/privateroute';
import { Navbar } from './components/navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/login" element={<Login />} /> {/* Use element prop */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute adminOnly><Settings /></PrivateRoute>} />
          <Route path="/" element={<Navigate to="/login" replace />} /> {/* Use Navigate */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;