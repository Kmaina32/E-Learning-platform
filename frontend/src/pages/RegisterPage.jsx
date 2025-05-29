import React, { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering: ${name} with email: ${email}`);
    // Add registration API call here
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" placeholder="Full Name" value={name} 
          onChange={e => setName(e.target.value)} required 
        />
        <br /><br />
        <input 
          type="email" placeholder="Email" value={email} 
          onChange={e => setEmail(e.target.value)} required 
        />
        <br /><br />
        <input 
          type="password" placeholder="Password" value={password} 
          onChange={e => setPassword(e.target.value)} required 
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
