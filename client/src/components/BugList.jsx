import React from 'react';

export default function BugList({ bugs }) {
  if (bugs.length === 0) return <p>No bugs reported yet.</p>;
  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug._id}>
          <strong>{bug.title}</strong>: {bug.description} - {bug.status}
        </li>
      ))}
    </ul>
  );
}
