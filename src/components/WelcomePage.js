import React from 'react';
import Medicines from './medicines';
import {Link, Route,Routes} from 'react-router-dom';

const WelcomePage = ({ user }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome!!, {user.email}</h2>
      <p>User ID: {user.id}</p>
    
    <nav>
    <ul>
      <li>
        <Link to="/medicines">Login</Link>
      </li>
      
    </ul>
  </nav>
  <Routes>
  <Route path="/medicines" element={<Medicines />} />

  </Routes>
  </div>
  );
};

export default WelcomePage;
