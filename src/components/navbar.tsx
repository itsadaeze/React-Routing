
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/authcontext';
import './navbar.css'

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  if (!user) return null;

  return (
    <nav className='navbar-container'>
      <h4 className='navtitle'>Dashboard</h4>
      <div className='links-conatiner'>
      <span>{user.username} ({user.role})</span>
      <Link to="/dashboard" className='navlink'>Dashboard</Link>
      <Link to="/profile" className='navlink'>Profile</Link>
      {user.role === 'Admin' && <Link className='navlink' to="/settings">Settings</Link>}
      <button className='logoutbtn' onClick={handleLogout}>Logout</button>
      </div>
      
    </nav>
  );
};