import React, { useState, useEffect } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await fetch('http://localhost:5000/api/bugs');
    const data = await res.json();
    setBugs(data);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  const addBug = (bug) => setBugs([...bugs, bug]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bug Tracker</h1>
      <BugForm onAdd={addBug} />
      <BugList bugs={bugs} />
    </div>
  );
}

export default App;
