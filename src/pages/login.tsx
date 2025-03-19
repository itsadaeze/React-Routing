
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useAuth } from '../context/authcontext';
import './login.css'

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<'Admin' | 'Editor' | 'Viewer'>('Viewer');
  const { login } = useAuth();
  const navigate = useNavigate(); 
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, role });
    const redirectPath = location.state?.from?.pathname || '/dashboard';
    navigate(redirectPath);
  };

  return (
    <div className='logincontainer'>
      <h2 >Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text" id='username'> Username</label>
        <input
        id='text'
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="select" id='username'> Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value as 'Admin' | 'Editor' | 'Viewer')}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};