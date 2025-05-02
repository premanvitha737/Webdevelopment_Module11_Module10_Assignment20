// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulated API call
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('role', 'admin');
      navigate('/admindashboard');
    } else if (username === 'user' && password === 'user123') {
      localStorage.setItem('role', 'test_taker');
      navigate('/testdashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p><strong>Test credentials:</strong></p>
      <ul>
        <li>Admin: <code>admin / admin123</code></li>
        <li>Test Taker: <code>user / user123</code></li>
      </ul>
    </div>
  );
};

export default Login;
