import React, { useState } from 'react';
import mockUsers from './mockUsers.json';

function App() {
  const [emailInput, setEmailInput] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false); 

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);

    const match = mockUsers.find((u) => u.email === emailInput); 
    if (match) {
      setUser(match);
      setError('');
    } else {
      setUser(null);
      setError('User not found');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Email Lookup</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {!searched && <p>Welcome!</p>} 

      <div style={{ marginTop: '2rem' }}>
        <p
          style={{
            fontWeight: user?.accountType === 'Premium' ? 'bold' : 'normal',
          }}
        >
          Name: {user?.fullName}
        </p>
        <p>Email: {user?.email}</p> 
        <p>Subscribed: {user?.isSubscribed ? 'Yes' : 'No'}</p>
        <p>Account Type: {user?.accountType}</p>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
