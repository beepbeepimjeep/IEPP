const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});