const express = require('express');
const app = express();
const port = 3000;

// Serves everything in the public/ folder (HTML, CSS, JS) as static files
app.use(express.static('public'));

// Returns the current high score — hardcoded for now, will connect to a database later
app.get('/api/score', (req, res) => {
  res.json({ highScore: 5 });
});

// Starts the server and listens for incoming requests
app.listen(port, () => {
  console.log(`Server is open and listening at http://localhost:${port}`);
});
