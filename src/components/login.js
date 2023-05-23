import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link,createSearchParams} from 'react-router-dom';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const nav=useNavigate();

  const handleLogin = async () => {

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
         body: new URLSearchParams({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        // Navigate to medicine page with user information
       nav({
        pathname:"/medicines",
        search:createSearchParams({
          name:email
        }).toString()
      });
      
        setLoggedInUser(user);
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (loggedInUser) {
    

    //nav('/medicine')
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <button onClick={handleLogin}>Login</button>
      <p>Click <Link to="/adminlogin">here</Link> to access the medicine page as an administrator.</p>
      <p>New User? Register  <Link to="/register">here</Link></p>
      {loginError && <p>Invalid credentials</p>}
    </div>
  );
};

export default Login;
