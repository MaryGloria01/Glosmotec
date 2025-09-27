const express = require('express');
const app = express();
const path = require('path'); // Add this line to import the path module

const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to VTU Top-Up Website');
});

// Route for purchasing airtime
app.post('/purchase-airtime', (req, res) => {
  // Logic for purchasing airtime goes here
  res.send('Airtime purchased successfully');
});

// Route for purchasing data
app.post('/purchase-data', (req, res) => {
  // Logic for purchasing data goes here
  res.send('Data purchased successfully');
});

// Other routes...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
