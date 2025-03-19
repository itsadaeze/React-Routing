import React from 'react';
import { useAuth } from '../context/authcontext';
import { AdminDashboard } from './dashboard/admindashboard';
import { EditorDashboard } from './dashboard/editordashboard';
import { ViewerDashboard } from './dashboard/viewerdashboard';



export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  switch (user.role) {
    case 'Admin':
      return <AdminDashboard />;
    case 'Editor':
      return <EditorDashboard />;
    case 'Viewer':
      return <ViewerDashboard />;
    default:
      return <div>Invalid Role</div>;
  }
};
