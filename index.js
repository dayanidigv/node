// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Sample data - list of users
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eva' },
  // Add more users as needed
];

// Define a route for the API endpoint to get a random user
app.get('/api/users/random', (req, res) => {
  // Get a random user from the users array
  const randomUser = users[Math.floor(Math.random() * users.length)];
  // Return the random user as JSON
  res.json(randomUser);
});

// Define a route for the API endpoint to get all users
app.get('/api/users', (req, res) => {
  // Return the list of users as JSON
  res.json(users);
});

console.log("This is node API code.");

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
