const express = require('express');
console.log("its okay");
// Create an instance of the Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
