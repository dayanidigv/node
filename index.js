// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Sample data - list of users
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// Define a route for the API endpoint
app.get('/api/users', (req, res) => {
  // Return the list of users as JSON
  res.json(users);
});
console.log("This is node api  code.");
// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



