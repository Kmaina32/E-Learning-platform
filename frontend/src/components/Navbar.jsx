import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', backgroundColor: '#004aad', color: 'white' }}>
      <Link to="/" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/courses" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Courses</Link>
      <Link to="/dashboard" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/login" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Login</Link>
      <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
    </nav>
  );
}

export default Navbar;
