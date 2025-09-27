const express = require('express');
const path = require('path'); // Don't forget to require path module
const app = express();
const port = 3000;

// Set 'views' directory for any views being rendered
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define route handlers
app.get('/', (req, res) => {
  res.render('index', { title: 'VTU Top-Up Website' });
});

// Other route handlers...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
