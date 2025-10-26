import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // or response.json() if the API returns JSON
      })
      .then(data => {
        setMessage(data); // if JSON: setMessage(data.message)
      })
      .catch(error => {
        console.error('Error fetching message:', error);
        setMessage('Failed to load message');
      });
  }, []);

  return (
    <div>
      <h1>Message from Server:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;