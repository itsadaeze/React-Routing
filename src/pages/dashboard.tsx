import React from 'react';
import { useAuth } from '../context/authcontext';

const AdminDashboard = () => <div>Admin Controls</div>;
const EditorDashboard = () => <div>Content Editor Panel</div>;
const ViewerDashboard = () => <div>Read-only Reports</div>;

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
