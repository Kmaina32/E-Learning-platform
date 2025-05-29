import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login with Email: ${email} Password: ${password}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
