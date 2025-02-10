// Import required modules
const express = require('express');
require('dotenv').config(); // Load environment variables

// Create an Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Thameem", "Ashraf"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

// Start the server
app.listen(3000, () => console.log("🚀 Server is running on port 3000."));