import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/') // Your Flask server endpoint
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error connecting to backend."));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>E-Learning Platform</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
