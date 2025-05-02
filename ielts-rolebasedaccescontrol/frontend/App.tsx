import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import TestTakerDashboard from './pages/TestTakerDashboard';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/testdashboard" element={<TestTakerDashboard />} />
    </Routes>
  );
}

export default App;
