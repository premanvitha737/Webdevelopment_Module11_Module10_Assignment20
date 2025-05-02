import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/');
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
    </div>
  );
};

export default AdminDashboard;
