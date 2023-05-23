import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setPlace] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();
  
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        first_name: firstName,
        last_name: lastName,
      place:address,
      email,
      password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        setFirstName('');
        setLastName('');
        setPlace('');
        setEmail('');
        setPassword('');
        
        setError('');
        nav("/login")


      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
      console.log('Registration Error:', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setPlace(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
