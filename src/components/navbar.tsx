
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/authcontext';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  if (!user) return null;

  return (
    <nav>
      <span>{user.username} ({user.role})</span>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      {user.role === 'Admin' && <Link to="/settings">Settings</Link>}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};