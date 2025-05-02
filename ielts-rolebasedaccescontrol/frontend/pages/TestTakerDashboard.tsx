// src/pages/TestTakerDashboard.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TestTakerDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'test_taker') {
      alert('Unauthorized access. Redirecting to login.');
      navigate('/');
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Taker Dashboard</h1>
      <p>Welcome to your IELTS Speaking Test area!</p>
      <ul>
        <li><button>Start Speaking Test</button></li>
        <li><button>View Previous Scores</button></li>
        <li><button>Practice Questions</button></li>
      </ul>
    </div>
  );
};

export default TestTakerDashboard;
