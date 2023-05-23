import React, { useState } from 'react';
import { useHistory,useNavigate} from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();
  const nav=useNavigate();

  const handleLogin = () => {
    // Validate the username and password here
    if (username === 'admin' && password === 'admin123') {
      nav("/medicinepage")
    } else {
      alert('Invalid username or password');
    }
  };

  return (
<div>
      <h2>Admin Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};


export default AdminLogin;
